import React from "react";
import  '../Hojas de Estilos/ItemServicio.css';
function ItemServicio({texto , color}){
    return(
        
        <div className="item-servicio" style={{backgroundColor : color}}>
            {texto}
        </div>
    );
}
export default  ItemServicio;