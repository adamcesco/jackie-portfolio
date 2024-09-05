"use client";

import React from "react";
import propTypes from "prop-types";
import Image from "next/image";

import { ProjectCardContext } from "@/contexts/ProjectCardContext";

import "./ProjectCard.css";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  handleNextImage = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
    }));
  };

  handlePrevImage = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex - 1 + images.length) % images.length,
    }));
  };

  render() {
    const { institution, title, images, date } = this.props;
    const { currentImageIndex } = this.state;

    return (
      <a className="project-card underline-hover" href="#">
        <Image
          src={images[currentImageIndex]}
          alt={`${title} ${images[currentImageIndex]} ${currentImageIndex + 1}`}
          width="4000"
          height="4000"
          className="project-card__image"
        />
        <span className="project-card__header">
          {institution} | {title}
        </span>
        <p className="project-card__date">{date}</p>
      </a>
    );
  }
}
ProjectCard.contextType = ProjectCardContext;
ProjectCard.propTypes = {
  institution: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.string).isRequired,
  date: propTypes.string.isRequired,
};

export default ProjectCard;
