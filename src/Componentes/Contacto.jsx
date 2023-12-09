import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Hojas de Estilos/Contacto.css'
function Contacto(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_83ah46g', 'template_d30o58f', form.current, 'YlUpGvdEXIUleFLci')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <footer className="seccion-contacto" id='contactanos'>
            <form ref={form} onSubmit={sendEmail} className='formulario'>
                <h1 className='seccion-contacto-titulo'>Contactanos !</h1>
                <label className='item-formulario label-formulario'>Nombre</label>
                <input className='item-formulario input-formulario' type="text" name="user_name" placeholder='Ingresa tu nombre'/>
                <label className='item-formulario label-formulario'>Email</label>
                <input className='item-formulario input-formulario' type="email" name="user_email" placeholder='Ingresa tu email'/>
                <label className='item-formulario label-formulario'>Mensaje</label>
                <textarea className='item-formulario input-formulario textarea-formulario' name="message" placeholder='Ingresa el mensaje que desees enviar'/>
                <input className='item-formulario boton-enviar-formulario' type="submit" value="Enviar Mensaje" />
            </form>
            <div className='contenedor-copyright'>
                <p className="copyright-texto">© copyright 2024</p>
            </div>
            
        </footer>
    );
}
export default Contacto;


