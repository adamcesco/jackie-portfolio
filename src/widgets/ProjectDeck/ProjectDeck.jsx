"use client";

import React from "react";
import propTypes from "prop-types";
import ProjectCard from "@/widgets/ProjectCard";

import "./ProjectDeck.css";

function ProjectDeck(props) {
  const { projects } = props;

  return (
    <div id="project-deck">
      {projects.map((project, index) => (
        <ProjectCard
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          institution={project.institution}
          title={project.title}
          images={project.images}
          tags={project.tags}
        />
      ))}
    </div>
  );
}

ProjectDeck.propTypes = {
  projects: propTypes.arrayOf(
    propTypes.shape({
      institution: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      images: propTypes.arrayOf(propTypes.string).isRequired,
      tags: propTypes.arrayOf(propTypes.string).isRequired,
    }),
  ).isRequired,
};

export default ProjectDeck;
