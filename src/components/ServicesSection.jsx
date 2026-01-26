import { IoIosTrendingUp } from 'react-icons/io';
import { WiRaindrops } from 'react-icons/wi';
import { PiPlantLight } from 'react-icons/pi';
import pronosticoProductividad from '../assets/pronostico_productividad.jpg';
import huellaHidrica from '../assets/huella_hidrica.jpg';
import capturaCarbono from '../assets/captura_carbono.jpg';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ServicesSection.css';

const services = [
  {
    icon: <IoIosTrendingUp />,
    title: 'Pronóstico de Productividad',
    image: pronosticoProductividad,
    description: 'El pronóstico de productividad proporciona estimaciones sobre el rendimiento esperado de los cultivos en función de: datos climáticos históricos y pronósticos, características del suelo, y prácticas de manejo agrícola. Utiliza modelos avanzados de análisis de datos y machine learning para ofrecer predicciones precisas.',
  },
  {
    icon: <WiRaindrops />,
    title: 'Pronóstico de Huella Hídrica',
    image: huellaHidrica,
    description: 'Proporciona un análisis detallado del uso y la necesidad de agua en los cultivos. Utiliza datos climáticos en tiempo real y modelos de evapotranspiración para calcular la cantidad de agua requerida para mantener la salud óptima de las plantas.',
  },
  {
    icon: <PiPlantLight />,
    title: 'Pronóstico de Captura de Carbono',
    image: capturaCarbono,
    description: 'Evalúa la capacidad del suelo para secuestrar carbono, un aspecto clave para la mitigación del cambio climático. Utiliza datos sobre el manejo del suelo, las prácticas agrícolas y las condiciones climáticas para estimar la cantidad de carbono que puede ser almacenado en el suelo.',
  },
];

const ServicesSection = ({ backgroundImage }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className={`services-section${backgroundImage ? ' services-section--with-bg' : ''}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      <div className="services-container" ref={ref}>
        <h2 className={`services-title fade-in-up ${isVisible ? 'visible' : ''}`}>Nuestros Servicios</h2>
        <div className="services-cards">
          {services.map((service, index) => (
            <div
              className={`service-card fade-in-up ${isVisible ? 'visible' : ''}`}
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
              </div>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 