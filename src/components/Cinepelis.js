import React from 'react';
import blue from './img/blue.png';
import './cinepelis.css';
import Imagen1 from './img/mkcp1.png'

const Cinepelis = () => {
    return (
        <div className="cinepelis">
            <div className="blue">
                <img src={blue} alt="Blue bg" width="100%" height="100%"></img>
            </div>

            <div className="title">
                <h1>Cinepelis</h1>
                <h2>Description</h2>
            </div>
            <div className="firstsection">
                <div className="mkcp1">
                    <img src={Imagen1} alt="Blue bg" width="100%" height="100%"></img>
                </div>
                <div className="description">
                    <h4>CinePelis (REACT)</h4>
                    <br></br>
                    <p>
                        This is a personal project developed with React. It's a website
                        about film productions. The project displays a list of different movies created
                        by CinePelis (this company does not exist). In addition, each movie has the
                        name, gender, rate and the option to choose the rate represented with stars.
                        Also, you can find a delete button to hide the selected movie.

                        The website allows you to add a new movie. You have to click Add New
                        A movie and a new page form appear. Try to write a name, choose the gender
                        and a fee. It will show the new movie on screen immediately.
                    </p>
                </div>
            </div>
            <div className="secondsection">
                <div className="moredetails">
                    <h2>More Details</h2>
                    <p>
                        This website was built with React. It contains different components.
                        The first one you see is the main banner, it has the logo of the company,
                        a short description and finally a button to call to action
                        (Search). The search bar has the input to type the name and a
                        to add a new movie button. You can search for any letter and if the name of the movie
                        You have entered the letter. It will appear in the next section. The following 
                        is the list of movies. The default list shows all movies. But you can choose which
                        see or not.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cinepelis;



