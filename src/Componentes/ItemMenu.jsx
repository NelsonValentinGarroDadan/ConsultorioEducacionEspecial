import React from "react";
import { isMobile } from 'react-device-detect';
import  "../Hojas de Estilos/ItemMenu.css";
function ItemMenu({ link, setNavegacion}){
    const navegacion = (e)=>{
        e.preventDefault();
        const sectionId = link.Nombre.toLowerCase().replace(" ", "-");;
        setNavegacion(sectionId,link.Nombre);
    }
    let className = link.Activo? "item-menu activo" : "item-menu";
    if(!isMobile){
        className += " laptop";
    }
    return(
        <a className={className } onClick={navegacion} href={`#${link.Nombre}`}>
            {link.Nombre}
        </a>
    );
}
export default ItemMenu;