import React from 'react';
import './navbar1.css';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

import {Link as Link1} from 'react-scroll';


function Navbar1 () {
    return (
        <div className="navbar">
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><Link to="./" >Home</Link></motion.div>
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><Link1 className="Link1" to="contact" smooth={true} duration={1000}>Contact</Link1></motion.div>
        
        </div>
    )
}

export default Navbar1;