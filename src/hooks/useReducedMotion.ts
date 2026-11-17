import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion() {
  const [reduzido, setReduzido] = useState(() => matchMedia(QUERY).matches);

  useEffect(() => {
    const mq = matchMedia(QUERY);
    const onChange = () => setReduzido(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduzido;
}
