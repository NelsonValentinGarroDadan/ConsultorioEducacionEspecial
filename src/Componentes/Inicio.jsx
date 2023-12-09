import React from "react";
import  "../Hojas de Estilos/Inicio.css"
function Inicio(){
    return(
        <>
        <div className="imagen-fondo" ></div>
        <section className="seccion-inicio" id="inicio">
            <h1 className="titulo-texto" >Consultorio de Educacion Especial</h1>
            <h3 className="eslogan-texto" >Damela mano y aprendamos juntos.</h3>
            <a className="boton-inicio" href="#contactanos">Saber mas...</a>
        </section>
        </>
        
    );
}

export default Inicio;