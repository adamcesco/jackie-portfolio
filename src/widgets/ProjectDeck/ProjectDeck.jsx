"use client";

import React from "react";
import propTypes from "prop-types";
import ProjectCard from "@/widgets/ProjectCard";

import { ProjectCardProvider } from "@/contexts/ProjectCardContext";

import "./ProjectDeck.css";

function ProjectDeck(props) {
  const { projects } = props;

  return (
    <ProjectCardProvider>
      <div className="project-deck">
        {projects.map((project) => (
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
