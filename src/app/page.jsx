"use client";

import React from "react";
import ProjectDeck from "@/widgets/ProjectDeck";

import "./page.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* welcome page section */}
      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Jacqueline Aleman
        </h1>
        <p className="mb-4">
          I&apos;m a senior at Texas A&M University studying Electrical Systems
          Engineering Technology with minors in Cybersecurity and Project
          Management.
        </p>
      </div>
      <ProjectDeck
        projects={[
          {
            institution: "Texas A&M University",
            title: "Trust Dynamics in Multi-Human Robot Teaming",
            images: ["/images/robot.jpg"],
            date: "May 2023 - August 2023",
          },
          {
            institution: "Texas A&M University",
            title:
              "Investigating Hyperspectral-based Algorithms for Use in Off-Road Autonomous Vehicles",
            images: ["/images/vehicle.jpg"],
            date: "January 2023 - May 2023",
          },
          {
            institution: "Texas A&M University",
            title: "AM Receiver Circuit",
            images: ["/images/circuit.jpg"],
            date: "Spring 2023",
          },
          {
            institution: "Texas A&M University",
            title: "Digital Signal Processing",
            images: ["/images/dsp.jpg"],
            date: "Fall 2022",
          },
          {
            institution: "Texas A&M University",
            title: "Embedded Systems Design",
            images: ["/images/embedded.jpg"],
            date: "Spring 2022",
          },
        ]}
      />
    </main>
  );
}
