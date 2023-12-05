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
        <section className="seccion-contacto">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}
export default Contacto;


