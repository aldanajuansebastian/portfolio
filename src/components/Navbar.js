import React from 'react';
import './Navbar.css';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';


function Navbar () {
    return (
        <div className="navbar">
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><Link className="Link1" to="projects" smooth={true} duration={1000}>Projects</Link></motion.div>
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><Link className="Link1" to="skills" smooth={true} duration={1000}>Skills</Link></motion.div>
            <motion.div className="itemNav" whileHover={{scale:1.1,}}><Link className="Link1" to="contact" smooth={true} duration={1000}>Contact</Link></motion.div>
        
        </div>
    )
}

export default Navbar;