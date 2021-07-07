import React from 'react';
import './Footer.css';
import {motion} from 'framer-motion';
import blue from './img/footer.png';


function Footer () {
    return (
        <div className="footer" id="footer">
                <img className="blue" src={blue} width="100%"></img>
                <div className="con">
                    <motion.h1 whileHover= {{scale:0.9}}>Footer</motion.h1>
                </div>
        </div>
    )
}

export default Footer;