"use client";

import React from "react";
import propTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import "./ProjectCard.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

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
      <Card className="project-card__card">
        <Link className="project-card__link underline-hover" href="#">
          <CardContent className="project-card__content">
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
          </CardContent>
          <CardTitle className="project-card__title">
            {institution} | {title}
          </CardTitle>
          <CardDescription className="project-card__date">
            {date}
          </CardDescription>
        </Link>
      </Card>
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
