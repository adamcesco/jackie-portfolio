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
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="project-deck">
          <ProjectCard
            title={left.title}
            images={left.images}
            imageWidth={left.imageWidth}
            imageHeight={left.imageHeight}
            date={left.date}
            isBig={index % 2 === 0}
          />
          {right && (
            <ProjectCard
              title={right.title}
              images={right.images}
              imageWidth={right.imageWidth}
              imageHeight={right.imageHeight}
              date={right.date}
              isBig={index % 2 === 1}
            />
          )}
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
      date: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectDeck;
