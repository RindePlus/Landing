import fixedImage from '../assets/Maiz.jpg';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './HeroWindow.css';

const HeroWindow = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto-form');
    if (!contactSection) return;
    const header = document.querySelector('.header');
    const headerOffset = header ? header.offsetHeight : 0;
    const extraOffset = 290;
    const elementTop = contactSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, elementTop - headerOffset - extraOffset),
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="hero-window-section"
      style={{ backgroundImage: `url(${fixedImage})` }}
      ref={ref}
    >
      <div className="hero-window-container">
        <div className={`hero-window-content fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-window-title">
            Llevá al máximo nivel la productividad<br />
            de tu campo con RindePlus.
          </h1>
          <button className="hero-window-button" onClick={scrollToContact}>
            CONSULTA AHORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroWindow; 