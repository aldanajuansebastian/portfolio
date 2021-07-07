import React from 'react';
import './App.css';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends React.Component {

    constructor (props) { 
      super(props);

    }
    render() {
        return (
          <>
            <Navbar />
            <Inicio />
            <Projects />
            <Skills />
            <Footer />
          </>
          )    
    }
}

export default App;