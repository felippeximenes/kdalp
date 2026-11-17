const reduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- idioma ---------- */
const root = document.documentElement;
function setLang(l) {
  root.lang = l === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll('[data-set-lang]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.setLang === l));
  try { localStorage.setItem('lang', l); } catch {}
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}
let salvo = null;
try { salvo = localStorage.getItem('lang'); } catch {}
setLang(salvo || (navigator.language.startsWith('pt') ? 'pt' : 'en'));
document.querySelectorAll('[data-set-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.setLang)));

/* ---------- manifesto: quebra em palavras ---------- */
const chaves = ['fogo', 'caos', 'coroa', 'fire', 'chaos', 'crown'];
document.querySelectorAll('[data-split] [data-l]').forEach((el) => {
  el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => {
    const kw = chaves.includes(w.toLowerCase().replace(/[^\p{L}]/gu, ''));
    return `<span class="w${kw ? ' kw' : ''}">${w}</span>`;
  }).join(' ');
});

/* ---------- capítulos: item ativo na barra lateral ---------- */
const navLinks = document.querySelectorAll('.capitulos__nav a');
const obsCap = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('ativo', a.hash === '#' + e.target.id));
  });
}, { rootMargin: '-50% 0px -50% 0px' });
document.querySelectorAll('.cap').forEach((c) => obsCap.observe(c));
const nav = document.querySelector('.capitulos__nav');
new IntersectionObserver(([e]) => nav.classList.toggle('visivel', e.isIntersecting), { rootMargin: '-50% 0px -50% 0px' })
  .observe(document.querySelector('.capitulos'));

/* ---------- assista: carrega o YouTube só no clique ---------- */
document.querySelector('.assista__capa').addEventListener('click', (e) => {
  const id = e.currentTarget.dataset.video;
  e.currentTarget.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" title="Firestarter" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
});

/* ---------- hero: vídeo ---------- */
const video = document.querySelector('.hero__video');
function irPara(p) {
  if (video.duration) video.currentTime = p * (video.duration - 0.05);
}

if (reduzido) {
  // sem scrub: mostra um quadro fixo já em chamas, com o título visível
  video.addEventListener('loadedmetadata', () => irPara(0.5));
} else {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  /* hero: 400vh fixado, scroll = tempo do vídeo */
  let progresso = 0;
  video.addEventListener('loadedmetadata', () => irPara(progresso));
  gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '+=400%',
      pin: true,
      scrub: true,
      onUpdate: (s) => { progresso = s.progress; irPara(progresso); },
    },
  })
    .to('.hero__dica', { autoAlpha: 0, duration: 0.15 }, 0)
    .to('.hero__rotulo', { autoAlpha: 0, duration: 0.1 }, 0.45)
    .fromTo('.hero__titulo', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.15 }, 0.75)
    .to('.hero__flash', { opacity: 1, duration: 0.1 }, 0.9)
    .set({}, {}, 1);

  /* manifesto: palavras acendem com o scroll */
  document.querySelectorAll('.manifesto__texto').forEach((p) => {
    ScrollTrigger.create({
      trigger: p,
      start: 'top 75%',
      end: 'bottom 40%',
      scrub: true,
      onUpdate: (s) => {
        const visiveis = [...p.querySelectorAll('.w')].filter((w) => w.offsetParent);
        const n = Math.round(s.progress * visiveis.length);
        visiveis.forEach((w, i) => {
          w.style.opacity = i < n ? 1 : 0.18;
          w.classList.toggle('aceso', i < n);
        });
      },
    });
  });

  /* as quatro: horizontal no desktop, empilhado no mobile */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    const secao = document.querySelector('.quatro');
    const trilho = secao.querySelector('.quatro__trilho');
    secao.classList.add('horizontal');
    const h = gsap.to(trilho, {
      x: () => -(trilho.scrollWidth - innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: secao,
        start: 'top top',
        end: () => '+=' + (trilho.scrollWidth - innerWidth),
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    trilho.querySelectorAll('.ficha__retrato').forEach((r) => {
      gsap.from(r, {
        filter: 'blur(18px)', scale: 1.06, ease: 'none',
        scrollTrigger: { trigger: r, containerAnimation: h, start: 'left 90%', end: 'left 35%', scrub: true },
      });
    });
    return () => secao.classList.remove('horizontal');
  });
  mm.add('(max-width: 899px)', () => {
    gsap.utils.toArray('.ficha__retrato').forEach((r) => {
      gsap.from(r, {
        filter: 'blur(18px)', scale: 1.06, ease: 'none',
        scrollTrigger: { trigger: r, start: 'top 90%', end: 'top 40%', scrub: true },
      });
    });
  });

  /* capítulos: entrada simples (as transições do clipe entram depois) */
  gsap.utils.toArray('.cap').forEach((c) => {
    gsap.from(c.children, {
      autoAlpha: 0, y: 60, duration: 1, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: c, start: 'top 65%' },
    });
  });

  /* coração: fogo vira rosa */
  gsap.set('.coracao__fogo', { opacity: 1 });
  gsap.set('.coracao__rosa', { opacity: 0, scale: 0.8, transformOrigin: '50% 60%' });
  gsap.timeline({ scrollTrigger: { trigger: '.coracao', start: 'top 55%' } })
    .from('.coracao__fogo', { scale: 0.4, transformOrigin: '50% 80%', duration: 0.8, ease: 'back.out(2)' })
    .to('.coracao__fogo', { opacity: 0, scale: 1.15, duration: 0.6 }, '+=0.5')
    .to('.coracao__rosa', { opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' }, '<')
    .to('.coracao__svg', { y: -12, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
}
