import React from 'react';
import './Navbar.css';
import {motion} from 'framer-motion';


function Navbar () {
    return (
        <div className="navbar">
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><a href="./" >Home</a></motion.div>
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><a href="#projects">Projects</a></motion.div>
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><a href="#skills">Skills</a></motion.div>
        </div>
    )
}

export default Navbar;