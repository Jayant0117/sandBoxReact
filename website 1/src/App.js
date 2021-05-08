import React from "react";
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";




function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    </Switch>
    </Router>
    
    </>
   );
}

export default App;
