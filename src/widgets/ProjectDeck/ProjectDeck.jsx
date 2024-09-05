"use client";

import React from "react";
import propTypes from "prop-types";
import ProjectCard from "@/widgets/ProjectCard";

import { ProjectCardProvider } from "@/contexts/ProjectCardContext";

import "./ProjectDeck.css";

function ProjectDeck(props) {
  const { projects } = props;

  const pairs = projects.reduce((acc, project, index) => {
    if (index % 2 === 0) {
      acc.push([project]);
    } else {
      acc.at(-1).push(project);
    }
    return acc;
  }, []);

  return (
    <ProjectCardProvider>
        {pairs.map(([left, right], index) => (
          <div key={index} className="project-deck">
            <ProjectCard {...left} />
            {right && <ProjectCard {...right} />}
          </div>
        ))}
    </ProjectCardProvider>
  );
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

export default ProjectDeck;
