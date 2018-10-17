import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/action";

class Projects extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }

  render() {
    const projects = this.props.projects;
    const academicProjects = projects.academicProjects.map(academicProject => (
      <div key={academicProject.title}>
        <h6>{academicProject.title}</h6>
      </div>
    ));
    const personalProjects = projects.personalProjects.map(personalProject => (
      <div key={personalProject.title}>
        <h6>{personalProject.title}</h6>
      </div>
    ));
    return (
      <div>
        {academicProjects}
        <hr />
        {personalProjects}
      </div>
    );
  }
}

Projects.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  projects: state.projects.items
});

export default connect(
  mapStateToProps,
  { fetchProjects }
)(Projects);
