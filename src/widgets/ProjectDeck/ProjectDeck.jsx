"use client";

import React from "react";
import propTypes from "prop-types";
import ProjectCard from "@/widgets/ProjectCard";

import "./ProjectDeck.css";

export default class ProjectDeck extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // possibly reduce the following algorithm so that odd numbered projects results in a trailing array of size one, rather than a trailing array of size two with a null value
    const { projects } = this.props;
    const pairs = projects.reduce((acc, child, index) => {
      if (index % 2 === 0 && index === projects.length - 1) {
        acc.push([child, null]);
      } else if (index % 2 === 0) {
        acc.push([child]);
      } else {
        acc.at(-1).push(child);
      }
      return acc;
    }, []);

    return pairs.map((pair, index) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={`project-deck 
        ${index % 2 === 1 ? "___odd" : ""}`}
      >
        <ProjectCard
          title={pair[0].title}
          images={pair[0].images}
          imageWidth={pair[0].imageWidth}
          imageHeight={pair[0].imageHeight}
          description={pair[0].description}
          date={pair[0].date}
        />
        {pair[1] ? (
          <ProjectCard
            title={pair[1].title}
            images={pair[1].images}
            imageWidth={pair[1].imageWidth}
            imageHeight={pair[1].imageHeight}
            description={pair[1].description}
            date={pair[1].date}
          />
        ) : null}
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
    }),
  ).isRequired,
};
