import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSkills } from "../actions/action";

class Skills extends Component {
  componentWillMount() {
    this.props.fetchSkills();
  }

  render() {
    const skills = this.props.skills;
    const programLanguages = skills.programLanguages
      .sort((a, b) => b.proficiency - a.proficiency)
      .map(programLanguage => (
        <div key={programLanguage.title}>
          <h6>
            {programLanguage.title} - {programLanguage.proficiency}
          </h6>
        </div>
      ));
    const tools = skills.tools
      .sort((a, b) => b.proficiency - a.proficiency)
      .map(tool => (
        <div key={tool.title}>
          <h6>
            {tool.title} - {tool.proficiency}
          </h6>
        </div>
      ));
    return (
      <div>
        {programLanguages}
        <hr />
        {tools}
      </div>
    );
  }
}

Skills.propTypes = {
  fetchSkills: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  skills: state.skills.item
});

export default connect(
  mapStateToProps,
  { fetchSkills }
)(Skills);
