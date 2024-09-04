"use client";

import React from "react";
import propTypes from "prop-types";
import ProjectCard from "@/widgets/ProjectCard";

import "./ProjectDeck.css";

export default class ProjectDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rightCardClicked: false,
    };
  }

  render() {
    // todo: map 2 children at a time into flexbox rows, alternating sizes and grow directions
    // todo: make project-dect flex width grow when a project-card is clicked so that project cards do not shrink or wrap
    //! not checked for odd number of children
    const { rightCardClicked } = this.state;
    const { projects } = this.props;
    const pairs = projects.reduce((acc, child, index) => {
      if (index % 2 === 0 && index === projects.length - 1) {
        acc.push([child, null]);
      }else if (index % 2 === 0) {
        acc.push([child]);
      } else {
        acc.at(-1).push(child);
      }
      return acc;
    }, []);

    return pairs.map((pair, index) => (
      <div
        key={index}
        className={`project-deck 
          ${index % 2 === 1 ? "___odd" : ""}
          ${rightCardClicked ? "___right-card-clicked" : ""
        }`}
      >
        <ProjectCard key={index} {...pair[0]} />
        {pair[1] ? 
        <ProjectCard key={index} {...pair[1]} 
          beforeExpand={() => {
            this.setState({rightCardClicked: true});
          }}
          afterUnexpand={() => {
            this.setState({rightCardClicked: false});
          }}
        /> 
        : null}
      </div>
    ));
  }
}
ProjectDeck.propTypes = {
  projects: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      images: propTypes.arrayOf(propTypes.string).isRequired,
      imageWidth: propTypes.number.isRequired,
      imageHeight: propTypes.number.isRequired,
      description: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
    })
  ),
};
