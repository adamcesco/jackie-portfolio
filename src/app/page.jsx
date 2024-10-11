"use client";

import React from "react";
import ProjectDeck from "@/widgets/ProjectDeck";

import "./page.css";
import AboutSection from "@/widgets/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* welcome page section */}
      <ProjectDeck
        projects={[
          {
            institution: "Texas A&M University",
            title: "Trust Dynamics in Multi-Human Robot Teaming",
            images: ["/images/placeholder.svg"],
            tags: ["Robotics", "Teamwork", "Trust Dynamics"],
          },
          {
            institution: "Texas A&M University",
            title: "Investigating Hyperspectral-based Algorithms",
            images: ["/images/placeholder.svg"],
            tags: ["Image Processing", "Algorithms", "Hyperspectral Imaging"],
          },
          {
            institution: "Texas A&M University",
            title: "AM Receiver Circuit",
            images: ["/images/placeholder.svg"],
            tags: ["Electronics", "Circuit Design", "AM Receiver"],
          },
          {
            institution: "Texas A&M University",
            title: "Aggie Nightlight",
            images: ["/images/placeholder.svg"],
            tags: ["ARM Assembly", "Microcontroller Architecture"],
          },
          {
            institution: "Texas A&M University",
            title: "Pathfinding Robot",
            images: ["/images/placeholder.svg"],
            tags: ["Robotics", "Digital Logic Design", "Pathfinding"],
          },
        ]}
      />
      <AboutSection />
    </main>
  );
}
