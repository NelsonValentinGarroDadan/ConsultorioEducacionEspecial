import {React}from "react";
import { isMobile } from 'react-device-detect';
import "../Hojas de Estilos/BotonMenu.css"
function BotonMenu ({ activo, setBotonActivo }) {
    document.body.style.overflow = activo ? 'hidden' : 'auto';
    const cambiarActivo = ()=>{
        setBotonActivo(!activo);
    }
    return(
        <div className={activo? "boton-menu activo" : "boton-menu" } 
            onClick={cambiarActivo} 
            style={{ display: !isMobile ? 'none' : 'flex' }}
            >
            <div className="linea linea-top"></div>
            <div className="linea linea-mid"></div>
            <div className="linea linea-bot"></div>
        </div>
    );
};

export default BotonMenu;