import fixedImage from '../assets/fixed1.jpg';
import './HeroWindow.css';

const HeroWindow = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto-form');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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