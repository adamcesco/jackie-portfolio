"use client";

import React from "react";
import propTypes from "prop-types";
import ProjectCard from "@/widgets/ProjectCard";

import "./ProjectDeck.css";

function ProjectDeck(props) {
  const { projects } = props;

  return (
    <div className="project-deck">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          institution={project.institution}
          title={project.title}
          images={project.images}
          date={project.date}
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
      date: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectDeck;
