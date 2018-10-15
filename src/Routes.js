import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from './components/Experience';
import Projects from "./components/Projects";
import Skills from './components/Skills';
import Education from './components/Education';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
        </div>
      </Router>
    );
  }
}
