import React from "react";
import '../Hojas de Estilos/Servicio.css'
import ItemServicio from './ItemServicio';
function Servicios(){
    const Items = [ {texto:"Apoyo escolar a estudiantes con discapacidad itelectual-motriz",color : "#411f2d"},
                    {texto:"Apoyo escolar con dificultades específicas del apredizaje",color: "#ac4147"},
                    {texto: "Acompañamiento en la trayectoria educativa y extraescolar", color: "#f88863"},
                    {texto: "Acompañamiento y asesoramiento a las familias", color:"#7d1a0c"},
                    {texto: "Guia a papas sobre algunas pautas de las  dificultades de aprendizaje y como ellos pueden intervenir", color:"#000000"},
                    {texto: "Proporcionar un lugar donde los chicos, a través de distintas actividades puedan liberar tension", color:"#5f0d3b"}]
    return (
        <section className="seccion-servicios" id="que-ofrecemos">
            <div className="cards-servicios">
                {Items.map((item,index)=>{
                    return(<ItemServicio key={index}
                            texto={item.texto}
                            color={item.color}/>);
                })}
            </div>
            
            <div className="dirigido-servicios">
                <p className="dirigido-servicios-texto">Nuestros servicios, diseñados con cuidado, están dirigidos a niños de entre 4 a 10 años de edad, brindándoles un entorno educativo y de apoyo.</p>
            </div>
        </section>
    );
}
export default Servicios;