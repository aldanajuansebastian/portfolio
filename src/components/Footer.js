import React from 'react';
import './Footer.css';
import {motion} from 'framer-motion';
import Facebook from './img/facebook.png';
import Linkedin from './img/linkedin.png';
import Github from './img/github.png';
import Whatsapp from './img/whatsapp.png';


function Footer () {
    return (
        <div className="footer" id="contact" animate={{ x: 20 }} transition={{ type: "spring", stiffness: 5000 }}>
                <div className="con">
                    <motion.h3 whileHover= {{scale:0.9}}>Sebastian Aldana</motion.h3>
                    <p>aldanajuansebastian1@gmail.com</p>
                    <div className="socialmediasection">
                        <div className="socialmedialogo"><a href="https://www.facebook.com/Juan.Sebastian.Aldana.M/" target="blank"><img src={Facebook} alt="facebook logo" width="100%"/></a></div>
                        <div className="socialmedialogo"><a href="https://www.linkedin.com/in/juan-sebasti%C3%A1n-aldana-91752719b/" target="blank"><img src={Linkedin} alt="facebook logo" width="100%"/></a></div>
                        <div className="socialmedialogo"><a href="https://wa.me/+573208648408" target="blank"><img src={Whatsapp} alt="facebook logo" width="100%"/></a></div>
                        <div className="socialmedialogo"><a href="https://github.com/aldanajuansebastian" target="blank"><img src={Github} alt="facebook logo" width="100%"/></a></div>
                    
                    </div>
                </div>
        </div>
    )
}

export default Footer;