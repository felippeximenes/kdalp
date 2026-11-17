import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import 'lenis/dist/lenis.css';
import './styles/tokens.css';
import './styles/global.css';
import { LanguageProvider } from './i18n/LanguageContext';
import { App } from './App';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const root = document.getElementById('root');
if (!root) throw new Error('#root não encontrado');

createRoot(root).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
