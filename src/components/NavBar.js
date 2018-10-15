import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeTheme } from "../actions/action";
import { DARK_THEME, WHITE_THEME } from "../data/theme";

class NavBar extends Component {
  handleChange(e) {
    e.preventDefault();
    if (e.target.getAttribute("id") === "theme") {
      this.props.changeTheme();
    }
  }

  render() {
    const darkTheme = this.props.darkTheme;
    const themeButton = darkTheme ? (
      <button
        type="button"
        className="btn btn-light"
        id="theme"
        onClick={e => this.handleChange(e)}
      >
        To Light Theme
      </button>
    ) : (
      <button
        type="button"
        className="btn btn-dark"
        id="theme"
        onClick={e => this.handleChange(e)}
      >
        To Dark Theme
      </button>
    );
    return (
      <div>
        <nav className={darkTheme ? DARK_THEME.navbar : WHITE_THEME.navbar}>
          <Link to={"/"} className="navbar-brand">
            {/* <img
              src="../image/mk.png"
              width="30"
              height="30"
              alt=""
            /> */}
            Minwoo Kim
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
            <div className="navbar-nav mr-auto">
              <Link to={"/experience"} className="nav-item nav-link">
                Experience
              </Link>
              <Link to={"/education"} className="nav-item nav-link">
                Education
              </Link>
              <Link to={"/skills"} className="nav-item nav-link">
                Skills
              </Link>
              <Link to={"/projects"} className="nav-item nav-link">
                Projects
              </Link>
            </div>
            <form className="form-inline my-2 my-lg-0">
              {themeButton}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  darkTheme: state.darkTheme.status
});

export default connect(
  mapStateToProps,
  { changeTheme }
)(NavBar);
