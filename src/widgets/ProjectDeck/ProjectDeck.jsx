"use client";

import React from "react";
import propTypes from "prop-types";

import "./ProjectDeck.css";

export default function ProjectDeck({ children }) {
  // todo: map 2 children at a time into flexbox rows, alternating sizes and grow directions
  // todo: make project-dect flex width grow when a project-card is clicked so that project cards do not shrink or wrap
  return <div className="project-deck">{children}</div>;
}
ProjectDeck.propTypes = {
  children: propTypes.node.isRequired,
};
