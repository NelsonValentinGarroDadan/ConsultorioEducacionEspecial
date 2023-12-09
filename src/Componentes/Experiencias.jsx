import React from "react";
import '../Hojas de Estilos/Experiencias.css';
import Carrucel from "./Carrucel";
function Experiencias(){
    return(
        <section className="seccion-experiencias" id="experiencias">
            <h1 className="seccion-experiencias-titulo">Experiencias</h1>
            <Carrucel />
        </section>
    );
}
export default Experiencias;