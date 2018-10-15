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
    console.log(skills.programLanguages);
    // const programLanguages = skills.programLanguages.map(programLanguage => (
    //   <div key={programLanguage.title}>
    //     <h6>{programLanguage.title}</h6>
    //     <p>{programLanguage.profiency}</p>
    //   </div>
    // ));
    // const tools = skills.tools.map(tool => (
    //   <div key={tool.title}>
    //     <h6>{tool.title}</h6>
    //     <p>{tool.profiency}</p>
    //   </div>
    // ));
    return (
      <div>
        {/* {programLanguages} */}
        {/* {tools} */}
      </div>
    );
  }
}

Skills.propTypes = {
  fetchSkills: PropTypes.func.isRequired,
  skills: PropTypes.object
};

const mapStateToProps = state => ({
  skills: state.skills.item
});

export default connect(
  mapStateToProps,
  { fetchSkills }
)(Skills);
