import React from 'react';
import blue from './img/blue.png';
import './description.css';
import Imagen1 from './img/mkvp1.png';
import Imagen2 from './img/mkvp2.png';
import orange from './img/orange.png';
import { motion } from 'framer-motion';
import NavBar1 from './NavBar1';
import Footer from './Footer';

const Venuspizza = () => {
    return (
        <motion.div className="page" animate={{ x: 20 }} transition={{ type: "spring", stiffness: 500 }}>
            <NavBar1 />
            <div className="blue2">
                <img src={blue} alt="Blue bg" width="100%" height="100%"></img>
            </div>

            <div className="title">
                <h1>Venus Pizza</h1>
                <h2>Description</h2>
            </div>
            <div className="firstsection">
                <div className="mk1">
                    <img src={Imagen1} alt="Mockup" width="100%" height="100%"></img>
                </div>
                <div className="description">
                    <h4>Venus Pizza (REACT)</h4>
                    <br></br>
                    <p>
                        This is a personal project developed with React. It's a website
                        about Pizza Customization. The project displays a single Landing page that
                        has a button to call to action (Arma tu pizza). In the customize section you can choose
                        your favorite ingredients. There is a list that contains cheese, basil, tomato,
                        pineapple, etc.

                        The animation when you add the new ingredients is very soft and attractive.
                        To animate I use the package framer motion. When you are sure about your pizza you
                        clic on the next button and a new page appears. The new page shows you the 
                        purchase summary. Finally, if you clic on the next button your order is received,
                        and a new subpage ask you for wait the order.
                    </p>
                </div>
            </div>
            <div className="secondsection">
                <a href="https://aldanajuansebastian.github.io/venuspizza">
                    <motion.button animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} whileHover={{scale:1.1}} className="verpagina">Ver pagina</motion.button>
                </a>
                <div className="mk2">
                    <img src={Imagen2} alt="Mockup" width="100%" height="100%"></img>
                </div>
                <div className="moredetails">
                    <h2>More Details</h2>
                    <br></br>
                    <p>
                        The name Venus pizza is from a pizza shop near my home. They cook the best pizza and 
                        they inspire me to build the website. The web app is very simple and has not a lot of
                        functionalities. But is an scalable app. In the future I hope to add new funcionalities as
                        the payment section, new sizes of pizza and more flavors.

                    </p>
                </div>
            </div>
            <div className="orange">
                <img src={orange} width="100%" alt="fondo naranja"></img>
            </div>
            
            <Footer />
        </motion.div>
    );
}

export default Venuspizza;
