"use client";

import React from "react";
import propTypes from "prop-types";
import Image from "next/image";

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
    const { title, images, imageWidth, imageHeight, description, date } =
      this.props;
    const { currentImageIndex } = this.state;

    return (
      // todo: make the following div a button or an anchor depending on whether you want projects to have their own page or if you want the project card to expand to show more details
      <div className="project-card">
        <div className="project-card__photos">
          {/* Render multiple photos for each home */}
          <Image
            src={images[currentImageIndex]}
            alt={`${title} ${images[currentImageIndex]} ${currentImageIndex + 1}`}
            width={imageWidth}
            height={imageHeight}
          />
          <button
            className="project-card__prev-button"
            type="button"
            onClick={this.handlePrevImage}
          >
            Previous
          </button>
          <button
            className="project-card__next-button"
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
