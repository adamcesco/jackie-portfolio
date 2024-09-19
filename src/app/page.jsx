"use client";

import React from "react";
import ProjectDeck from "@/widgets/ProjectDeck";

import "./page.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* welcome page section */}
      <ProjectDeck
        projects={[
          {
            institution: "Texas A&M University",
            title: "Trust Dynamics in Multi-Human Robot Teaming",
            images: ["/images/temp1.png"],
            tags: ["Robotics", "Teamwork", "Trust Dynamics"],
          },
          {
            institution: "Texas A&M University",
            title: "Investigating Hyperspectral-based Algorithms",
            images: ["/images/temp2.png"],
            tags: ["Image Processing", "Algorithms", "Hyperspectral Imaging"],
          },
          {
            institution: "Texas A&M University",
            title: "AM Receiver Circuit",
            images: ["/images/temp3.png"],
            tags: ["Electronics", "Circuit Design", "AM Receiver"],
          },
          {
            institution: "Texas A&M University",
            title: "Digital Signal Processing",
            images: ["/images/temp4.png"],
            tags: ["Signal Processing", "Digital Signal Processing"],
          },
          {
            institution: "Texas A&M University",
            title: "Embedded Systems Design",
            images: ["/images/temp5.png"],
            tags: ["Embedded Systems", "Design"],
          },
        ]}
      />
      <div id="about-section">
        <h1>About Me</h1>
        <p>
          I am a recent graduate from Texas A&M University with a degree in
          Electrical Engineering. I have experience in robotics, image
          processing, and embedded systems design. I am passionate about
          creating innovative solutions to complex problems.
        </p>
      </div>
    </main>
  );
}
