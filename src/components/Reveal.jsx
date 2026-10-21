import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/* Aparición al hacer scroll (estilos en HomePage.css: .rp-reveal /
   .rp-is-visible). En las islas el hook agrega .rp-is-visible al entrar en
   pantalla. En las secciones estáticas (sin React en el cliente) el hook no
   corre: ahí lo hace el script de BaseLayout, que no toca las islas para
   no desarmar la hidratación. */
const Reveal = ({ children, className = '', id, delay }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });
  const delayClass = delay ? `rp-reveal--delay-${delay}` : '';
  return (
    <div
      id={id}
      ref={ref}
      className={`rp-reveal ${delayClass} ${isVisible ? 'rp-is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
