"use client";

import React from "react";
import propTypes from "prop-types";
import Image from "next/image";

import { ProjectCardContext } from "@/contexts/ProjectCardContext";

import "./ProjectCard.css";

class ProjectCard extends React.Component {
  static contextType = ProjectCardContext;

  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      expanded: false,
      unexpandShake: false,
    };
  }

  handleNextImage = (event) => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
    }));
    event.stopPropagation();
  };

  handlePrevImage = (event) => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex - 1 + images.length) % images.length,
    }));
    event.stopPropagation();
  };
  
  handleExpand = (event) => {
    const { aCardWillExpand } = this.context;
    aCardWillExpand();

    this.setState(() => ({
      expanded: true,
    }));
    event.stopPropagation();
  };

  handleUnexpand = (event) => {
    this.setState(() => ({
      expanded: false,
    }));
    const { aCardHasUnexpanded } = this.context;
    aCardHasUnexpanded();
    event.stopPropagation();
  };

  render() {
    const { title, images, imageWidth, imageHeight, description, date } =
      this.props;
    const { currentImageIndex, expanded, unexpandShake } = this.state;
    const { fadeOut } = this.context;
    
    return (
      <div
        type="button"
        className={`project-card ${expanded ? "expanded" : (fadeOut ? "fade-out" : "")}`}
        onClick={this.handleExpand}
      >
        {expanded ? (
          <button
            className={`project-card__unexpand-button ${unexpandShake ? "shake-animation" : ""}`}
            type="button"
            onClick={this.handleUnexpand}
            onAnimationEnd={() => {
              this.setState(() => ({
                unexpandShake: false,
              }));
            }}
          >
            Unexpand
          </button>
        ) : (
          <button
            className="project-card__expand-button"
            type="button"
            onClick={this.handleExpand}
          >
            Expand
          </button>
        )}
        <div className="project-card__photos">
          <Image
            src={images[currentImageIndex]}
            alt={`${title} ${images[currentImageIndex]} ${currentImageIndex + 1}`}
            width={imageWidth}
            height={imageHeight}
          />
          <button
            className="project-card__prevnext-button"
            type="button"
            onClick={this.handlePrevImage}
          >
            Previous
          </button>
          <button
            className="project-card__prevnext-button"
            type="button"
            onClick={this.handleNextImage}
          >
            Next
          </button>
        </div>
        <div className="project-card__details">
          <h2 className="project-card__title">{title}</h2>
          <p className="project-card__description">{description}</p>
          {date ? <p className="project-card__date">{date}</p> : null}
        </div>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  title: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.string).isRequired,
  imageWidth: propTypes.number.isRequired,
  imageHeight: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  date: propTypes.string,
};

ProjectCard.defaultProps = {
  date: null,
};

export default ProjectCard;
