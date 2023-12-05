import React from "react";
import  '../Hojas de Estilos/ItemCarrucel.css';
function ItemCarrucel({nombre , texto , posicion}){
    return(
        <>
            <div className= {`item-carrucel ${posicion}`}>
                <h1 className="item-carrucel-titulo">{nombre}</h1>
                <p className="item-carrucel-texto">{texto}</p>
            </div>
        </>
    )
}

export default ItemCarrucel;