import {React , useState, useEffect} from "react";
import  "../Hojas de Estilos/Encabezado.css";

import Menu from "./Menu";
import BotonMenu from "./BotonMenu";
function Encabezado(){
    const [BotonActivo , setBotonActivo] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <section className={scrolling&&!BotonActivo? "cabecera fondo-blanco": "cabecera"}>
            <Menu activo={BotonActivo} setBotonActivo={setBotonActivo}/>
            <BotonMenu activo={BotonActivo} setBotonActivo={setBotonActivo}/>
        </section>
    );
};
export default Encabezado;