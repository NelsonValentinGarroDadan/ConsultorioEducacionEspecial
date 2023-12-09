import React from "react";
import  "../Hojas de Estilos/ItemMenu.css";
function ItemMenu({ link, setNavegacion}){
    const navegacion = (e)=>{
        e.preventDefault();
        const sectionId = link.Nombre.toLowerCase().replace(" ", "-");;
        setNavegacion(sectionId,link.Nombre);
    }
    return(
        <a className={link.Activo? "item-menu activo" : "item-menu" } onClick={navegacion} href={`#${link.Nombre}`}>
            {link.Nombre}
        </a>
    );
}
export default ItemMenu;