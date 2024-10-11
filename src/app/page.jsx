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
            title: "Digital Signal Processing",
            images: ["/images/placeholder.svg"],
            tags: ["Signal Processing", "Digital Signal Processing"],
          },
          {
            institution: "Texas A&M University",
            title: "Embedded Systems Design",
            images: ["/images/placeholder.svg"],
            tags: ["Embedded Systems", "Design"],
          },
        ]}
      />
      <AboutSection />
    </main>
  );
}
