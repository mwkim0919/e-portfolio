import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchEducation } from "../actions/action";

class Education extends Component {
  componentWillMount() {
    this.props.fetchEducation();
  }

  render() {
    const education = this.props.education.map(edu => (
      <div key={edu.title}>
        <h6>
          {edu.school} - {edu.degree}
        </h6>
        <p>
          {edu.startDate} - {edu.endDate}
        </p>
      </div>
    ));

    return (
      <div>
        {education}
      </div>
    );
  }
}

Education.propTypes = {
  fetchEducation: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  education: state.education.items
});

export default connect(
  mapStateToProps,
  { fetchEducation }
)(Education);
