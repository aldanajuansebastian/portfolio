import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cinepelis from "../components/Cinepelis";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Venuspizza from "../components/Venuspizza";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/cinepelis">
                    <Cinepelis />
                </Route>
                <Route path="/venuspizza">
                    <Venuspizza />
                </Route>
                <Route path="/">
                    
                    <Inicio />
                    <Projects />
                    <Skills />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
