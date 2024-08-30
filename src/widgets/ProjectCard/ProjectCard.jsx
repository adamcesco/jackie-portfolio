"use client";

import React from "react";
import propTypes from "prop-types";
import Image from "next/image";

import "./ProjectCard.css";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      expanded: false,
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
    const { title, images, imageWidth, imageHeight, description, date } =
      this.props;
    const { currentImageIndex, expanded } = this.state;

    return (
      <div
        type="button"
        className={`project-card ${expanded ? "expanded" : ""}`}
        onClick={() => {
          this.setState(() => ({
            expanded: true,
          }));
        }}
      >
        {expanded ? (
          <button
            className={"project-card__expand-button"}
            type="button"
            onClick={(event) => {
              this.setState(() => ({
                expanded: false,
              }));
              event.stopPropagation();
            }}
          >
            Unexpand
          </button>
        ) : (
          <button
            className={"project-card__unexpand-button"}
            type="button"
            onClick={(event) => {
              this.setState(() => ({
                expanded: true,
              }));
              event.stopPropagation();
            }}
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
            onClick={(event) => {
              this.handlePrevImage();
              event.stopPropagation();
            }}
          >
            Previous
          </button>
          <button
            className="project-card__prevnext-button"
            type="button"
            onClick={(event) => {
              this.handleNextImage();
              event.stopPropagation();
            }}
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
