"use client";

import React from "react";
import propTypes from "prop-types";

import "./ProjectDeck.css";

export default function ProjectDeck({ children }) {
  // todo: map 2 children at a time into flexbox rows, alternating sizes and grow directions
  // todo: make project-dect flex width grow when a project-card is clicked so that project cards do not shrink or wrap
  //! not checked for odd number of children
  const pairs = children.reduce((acc, child, index) => {
    if (index % 2 === 0 && index === children.length - 1) {
      acc.push([child, null]);
    } else if (index % 2 === 0) {
      acc.push([child]);
    } else {
      acc[acc.length - 1].push(child);
    }
    return acc;
  }, []);

  return pairs.map((pair, index) => (
    <div
      key={index}
      className={`project-deck 
          ${index % 2 === 1 ? "right-card-clicked" : ""}
        }`}
    >
      {pair[0]}
      {pair[1]}
    </div>
  ));
}
ProjectDeck.propTypes = {
  children: propTypes.node.isRequired,
};
