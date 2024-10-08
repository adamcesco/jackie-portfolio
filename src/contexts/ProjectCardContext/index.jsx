"use client";

import React, { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

// Create a new context
const ProjectCardContext = createContext(null);

// Create a provider component
function ProjectCardProvider({ children }) {
  ProjectCardProvider.propTypes = {
    children: propTypes.node.isRequired,
  };

  // Define the state and toggle function
  const [fadeOut, setFadeOut] = useState(false);
  const [shrink, setShrink] = useState(false);

  // Provide the state and toggle function to the children components
  return (
    <ProjectCardContext.Provider
      value={{ fadeOut, setFadeOut, shrink, setShrink }}
    >
      {children}
    </ProjectCardContext.Provider>
  );
}

const useProjectCardContext = () => {
  const context = useContext(ProjectCardContext);
  if (!context) {
    throw new Error(
      "useProjectCardContext must be used within a ProjectCardProvider",
    );
  }
  return context;
};

export { ProjectCardContext, ProjectCardProvider, useProjectCardContext };
