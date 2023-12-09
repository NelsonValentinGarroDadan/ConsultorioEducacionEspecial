import {React, useState} from "react";
import { isMobile } from 'react-device-detect';
import "../Hojas de Estilos/Menu.css";

import ItemMenu from "./ItemMenu";
function Menu({ activo , setBotonActivo}){
        const definirMenu = ()=>{
            let clase;
            if(isMobile){
                clase=activo ? "menu activo" : "menu";
            }else{
                clase="menu laptop";
            }
            return clase;
        }
        const [links, setLinks] = useState([
            { Nombre: "Inicio", Activo: false },
            { Nombre: "Que Ofrecemos", Activo: false },
            { Nombre: "Sobre Nosotros", Activo: false },
            { Nombre: "Experiencias", Activo: false },
            { Nombre: "Contactanos", Activo: false }
          ]);
        const handleLinkClick = (linkNombre) => {
            const actualizarLinks = links.map((link) => {
              if (link.Nombre === linkNombre) {
                return { ...link, Activo: true };
              } else {
                return { ...link, Activo: false };
              }
            });
        
            setLinks(actualizarLinks);
        };
        const scrollLink = (Id, linkNombre) =>{
          const seccion = document.getElementById(Id);
          if(seccion){
            seccion.scrollIntoView({ behavior: 'smooth' })
            handleLinkClick(linkNombre);
            if(isMobile){
              setBotonActivo(!activo);
            }
            
          }
          
        }
    return(
        <div className={definirMenu()}>
            {links.map((link) => (
                <ItemMenu
                key={link.Nombre}
                link={link}
                setNavegacion = {scrollLink}
               />
            ))}
        </div>
    );
}
export default Menu;