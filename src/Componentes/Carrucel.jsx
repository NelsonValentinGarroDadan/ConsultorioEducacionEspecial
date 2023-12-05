import {React , useState , useEffect}from "react";
import '../Hojas de Estilos/Carrucel.css'
import ItemCarrucel from "./ItemCarrucel";
function Carrucel(){
    const Experiencias = [  {nombre:"Marta Rodríguez",
                            experiencia:`Marta, madre de dos niños, 
                                ha experimentado un notable progreso 
                                en el desarrollo académico y emocional 
                                de sus hijos desde que comenzaron a asistir 
                                al consultorio. Agradece la dedicación de los 
                                profesores y destaca el enfoque personalizado 
                                que ha marcado la diferencia en las vidas de sus pequeños.`},
                            {nombre:"Juan Pérez",
                            experiencia:`Juan, padre de una niña con necesidades específicas, 
                            elogia la comprensión y paciencia de los profesionales del consultorio.
                             Ha notado un cambio positivo en la actitud y habilidades sociales de su hija, 
                             lo que le brinda tranquilidad y confianza en el proceso educativo.`},
                            {nombre:"Carla Gómez",
                            experiencia:`Carla, madre soltera de un niño con discapacidad intelectual, 
                            destaca el apoyo integral que ha recibido en el consultorio. La empatía de 
                            los profesores ha contribuido no solo al desarrollo académico de su hijo, 
                            sino también a su autoestima y confianza.`},
                            {nombre:"Luis Fernández",
                            experiencia:`Luis, padre de gemelos con necesidades educativas especiales, 
                            elogia la capacidad del consultorio para adaptarse a las necesidades individuales 
                            de cada uno de sus hijos. La atención personalizada y el progreso observado han 
                            generado una conexión especial con el equipo de profesionales.`},
                            {nombre:"Laura Herrera",
                            experiencia:`Laura, madre de un adolescente con dificultades de aprendizaje, 
                            destaca la colaboración entre profesores y padres en el consultorio. La comunicación 
                            abierta y regular ha permitido a Laura estar involucrada en el proceso educativo de 
                            su hijo, creando un ambiente de apoyo y confianza.`}]
    const [cardActual , setcardActual]  = useState(1);
    const [cardAnterior , setcardAnterior] = useState(0);
    const [cardSiguiente , setcardSiguiente] = useState(2);
    const siguienteCard = ()=>{
        setcardAnterior(cardActual);
        setcardActual(cardSiguiente);
        if(cardSiguiente + 1 < Experiencias.length){
            setcardSiguiente(cardSiguiente+1);
        }else{
            setcardSiguiente(0)
        }

    }
    const anteriorCard = ()=>{
        setcardSiguiente(cardActual);
        setcardActual(cardAnterior);
        if(cardAnterior - 1 > -1){
            setcardAnterior(cardAnterior-1);
        }else{
            setcardAnterior(Experiencias.length-1); 
        }
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          siguienteCard();
        }, 10000);
    
        return () => clearInterval(intervalId); 
      }, [cardActual]);
    return(
        <>
            <div className="carrucel">
               {Experiencias.map((item,index)=>{
                let posicion;
                if(index === cardActual){
                    posicion = "item-carrucel-actual";
                } else if(index === cardSiguiente){
                    posicion = "item-carrucel-siguiente";
                } else if(index === cardAnterior){
                    posicion = "item-carrucel-anterior";
                }else{
                    posicion = "";
                }
                return(
                    <ItemCarrucel 
                        key={index} 
                        nombre={item.nombre} 
                        texto={item.experiencia} 
                        posicion={posicion}
                    />
                );
               })} 
               <span className="boton-anterior" onClick={()=>{anteriorCard()}}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></span>
               <span className="boton-siguiente" onClick={()=>{siguienteCard()}}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span>
            </div>
            
        </>
    )
}

export default Carrucel;