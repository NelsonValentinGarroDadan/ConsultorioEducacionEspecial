import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Hojas de Estilos/Contacto.css';
import {servicioId,templateId,publicKey} from '../config';

function Contacto() {
  const form = useRef();
  const [validacion, setValidacion] = useState({
    user_name: true,
    user_email: true,
    message: true,
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValidacion((prevValidacion) => ({
      ...prevValidacion,
      [name]: value.trim() !== '', 
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const Nombre = document.getElementById('nombreFormulario').value;
    const Mail = document.getElementById('mailFormulario').value;
    const Mensaje = document.getElementById('mensajeFormulario').value;

    const regexNombre = /^[A-Za-zÁ-Úá-úüÜ]+(?: [A-Za-zÁ-Úá-úüÜ]+)?$/;
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexMensaje = /^[a-zA-Z\s]+$/;

    const nombreValido = regexNombre.test(Nombre);
    const mailValido = regexMail.test(Mail);
    const mensajeValido = regexMensaje.test(Mensaje);
  
    setValidacion({
      user_name: nombreValido,
      user_email: mailValido,
      message: mensajeValido,
    });

    if (nombreValido && mailValido && mensajeValido) {
      emailjs.sendForm(servicioId, templateId, form.current, publicKey)
        .then((result) => {
          setMensajeEnviado(true)
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <footer className="seccion-contacto" id="contactanos">
      <h1 className="seccion-contacto-titulo">¡Contáctanos!</h1>
      {
      !mensajeEnviado && 
        <form ref={form} onSubmit={sendEmail} className="formulario">
          
          <label className="item-formulario label-formulario">Nombre</label>
          <input
            className="item-formulario input-formulario"
            type="text"
            name="user_name"
            placeholder="Ingresa tu nombre"
            id='nombreFormulario'
            onChange={handleInputChange}
          />
          <span className={!validacion.user_name? "item-formulario alerta-formulario-activa":  "item-formulario alerta-formulario"} >*Este campo es obligatorio , ejemplo "Pablo Escudero".</span>
          <label className="item-formulario label-formulario">Email</label>
          <input
            className="item-formulario input-formulario"
            type="email"
            name="user_email"
            placeholder="Ingresa tu email"
            id='mailFormulario'
            onChange={handleInputChange}
          />
          <span className={!validacion.user_email? "item-formulario alerta-formulario-activa":  "item-formulario alerta-formulario"} >*Este campo es obligatorio , ejemplo "ejemplo@ejemplo.com".</span>
          <label className="item-formulario label-formulario">Mensaje</label>
          <textarea
            className="item-formulario input-formulario textarea-formulario"
            name="message"
            placeholder="Ingresa el mensaje que desees enviar"
            id='mensajeFormulario'
            onChange={handleInputChange}
          />
          <span className={!validacion.message? "item-formulario alerta-formulario-activa":  "item-formulario alerta-formulario"} >*Este campo es obligatorio , ejemplo "Hola! estoy interesado".</span>
          <input className="item-formulario boton-enviar-formulario" type="submit" value="Enviar Mensaje" />
        </form>
      }
      {
        mensajeEnviado&&
        <div className='contenedor-mensaje-enviado'>
          <h2 className='item-formulario texto-mensaje-enviado'>Mensaje enviado con exito !.</h2>
          <button className='item-formulario boton-enviar-otromensaje' onClick={()=>{setMensajeEnviado(false)}}>Enviar otro mensaje</button>
        </div>
      }
      <div className="contenedor-copyright">
        <p className="copyright-texto">© copyright 2024</p>
      </div>
    </footer>
  );
}

export default Contacto;
