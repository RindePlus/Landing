import { AiOutlineFileSearch, AiOutlineFieldTime } from 'react-icons/ai';
import { IoIosTrendingUp } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';
import './FeatureCards.css';

const features = [
  {
    icon: <AiOutlineFileSearch />,
    title: 'Decisiones informadas',
    description: 'Conocé el momento óptimo para la siembra y la cosecha.',
  },
  {
    icon: <IoIosTrendingUp />,
    title: 'Optimización de recursos',
    description: 'Optimizá el uso de insumos como fertilizantes y pesticidas, reduciendo costos y mejorando el rendimiento.',
  },
  {
    icon: <AiOutlineFieldTime />,
    title: 'Planificación a largo plazo',
    description: 'Gestioná los riesgos con una visión a largo plazo del rendimiento esperado.',
  },
  {
    icon: <GiReceiveMoney />,
    title: 'Mejora en la rentabilidad',
    description: 'Ajustá tu estrategia para mejorar la rentabilidad de tus cultivos.',
  },
];

const FeatureCards = ({ backgroundImage, backgroundColor }) => {
  const isPlainBackground = Boolean(backgroundColor) && !backgroundImage;

  return (
    <section 
      className={`feature-cards-section${isPlainBackground ? ' feature-cards-section--plain' : ''}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundColor: backgroundColor || 'transparent'
      }}
    >
      <div className="feature-cards-overlay">
        <h2 className="feature-cards-title">
          Analisis de datos aplicado a tu producción
        </h2>
        <div className="feature-cards-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards; 