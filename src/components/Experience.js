import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchExperience } from "../actions/action";

class Experience extends Component {
  componentWillMount() {
    this.props.fetchExperience();
  }

  render() {
    const experiences = this.props.experiences.map(exp => (
      <div key={exp.title}>
        <h6>{exp.title}</h6>
        <p>{exp.role}</p>
        <p>
          {exp.startDate} - {exp.endDate}
        </p>
        <p>{exp.description}</p>
        <p>{exp.location}</p>
        <p>{exp.link}</p>
        <hr />
      </div>
    ));
    return <div>{experiences}</div>;
  }
}

Experience.propTypes = {
  fetchExperience: PropTypes.func.isRequired,
  experiences: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  experiences: state.experience.items
});

export default connect(
  mapStateToProps,
  { fetchExperience }
)(Experience);
