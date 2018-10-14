import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={'/'} className="nav-item nav-link active">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link to={'/projects'} className="nav-item nav-link">
                Projects
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
