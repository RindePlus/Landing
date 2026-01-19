import fixedImage from '../assets/Maiz.jpg';
import './HeroWindow.css';

const HeroWindow = () => {
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
    >
      <div className="hero-window-container">
        <div className="hero-window-content">
          <h1 className="hero-window-title">
            Llevá al máximo nivel la productividad<br />
            de tu campo con Rinde Plus.
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