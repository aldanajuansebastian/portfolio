import React from 'react';
import './Inicio.css';
import fondo from './video/fondo.mp4';
import imagen from './img/ilustracion.png';
import {motion} from 'framer-motion';


function Inicio () {
    return (
        <div className="inicio">

            <video autoPlay loop muted className="videobg">
                <source src={fondo} type="video/mp4"></source>
            </video>
            <motion.div className="contenedor" animate={{ x: 20 }} transition={{ type: "spring", stiffness: 500 }}>
                <div className="imghome">
                <motion.img whileHover={{scale:1.1}} src={imagen} width="100%"></motion.img>
                </div>

                <motion.h1 whileHover={{scale:1.1}}>Sebastian Aldana</motion.h1>
                <p whileHover={{scale:1.05}}>Modern Languages Professional</p>
                <p whileHover={{scale:1.05}}>Web Developer (Frontend)</p>
                <p whileHover={{scale:1.05}}>Digital Marketing</p>
                
            </motion.div>
            

            
            
        </div>
    )
}

export default Inicio;