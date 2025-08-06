import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    provincia: '',
    consulta: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Escribí tu mensaje y te respondemos a la brevedad</h3>
        
        <div className="form-row">
          <div className="form-field">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <select
              name="provincia"
              value={formData.provincia}
              onChange={handleChange}
              required
            >
              <option value="">Provincia</option>
              <option value="buenos-aires">Buenos Aires</option>
              <option value="cordoba">Córdoba</option>
              <option value="santa-fe">Santa Fe</option>
              <option value="entre-rios">Entre Ríos</option>
              <option value="la-pampa">La Pampa</option>
              <option value="mendoza">Mendoza</option>
              <option value="san-luis">San Luis</option>
              <option value="rio-negro">Río Negro</option>
              <option value="neuquen">Neuquén</option>
              <option value="chubut">Chubut</option>
              <option value="santa-cruz">Santa Cruz</option>
              <option value="tierra-del-fuego">Tierra del Fuego</option>
              <option value="jujuy">Jujuy</option>
              <option value="salta">Salta</option>
              <option value="tucuman">Tucumán</option>
              <option value="santiago-del-estero">Santiago del Estero</option>
              <option value="chaco">Chaco</option>
              <option value="formosa">Formosa</option>
              <option value="misiones">Misiones</option>
              <option value="corrientes">Corrientes</option>
              <option value="catamarca">Catamarca</option>
              <option value="la-rioja">La Rioja</option>
              <option value="san-juan">San Juan</option>
            </select>
          </div>
          <div className="form-field">
            <input
              type="text"
              name="campo"
              placeholder="Campo"
              value={formData.campo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-field full-width">
          <textarea
            name="consulta"
            placeholder="Dejá tu consulta"
            value={formData.consulta}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 