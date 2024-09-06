"use client";

import React from "react";
import propTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      <Link className="project-card underline-hover" href="#">
        <AspectRatio ratio={1.5227}>
          <Image
            src={images[currentImageIndex]}
            alt={`${title} ${images[currentImageIndex]} ${currentImageIndex + 1}`}
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="project-card__image"
          />
        </AspectRatio>
        <span className="project-card__header">
          {institution} | {title}
        </span>
        <p className="project-card__date">{date}</p>
      </Link>
    );
  }
}
ProjectCard.propTypes = {
  institution: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  images: propTypes.arrayOf(propTypes.string).isRequired,
  date: propTypes.string.isRequired,
};

export default ProjectCard;
