import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cinepelis from "../components/Cinepelis";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/cinepelis">
                    <Cinepelis />
                </Route>
                <Route path="/">
                    <Navbar />
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
