"use client";

import React from "react";
import propTypes from "prop-types";
import ProjectCard from "@/widgets/ProjectCard";

import { ProjectCardProvider } from "@/contexts/ProjectCardContext";

import "./ProjectDeck.css";

export default class ProjectDeck extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects } = this.props;
    const pairs = projects.reduce((acc, child, index) => {
      if (index % 2 === 0) {
        acc.push([child]);
      } else {
        acc.at(-1).push(child);
      }
      return acc;
    }, []);

    return (
      <ProjectCardProvider>
        {pairs.map((pair, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`project-deck ${index % 2 === 1 ? "___odd" : ""}`}
          >
            {pair.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                images={project.images}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                description={project.description}
                date={project.date}
              />
            ))}
          </div>
        ))}
      </ProjectCardProvider>
    );
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
  ).isRequired,
};
