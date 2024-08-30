"use client";

import React from "react";
import ProjectCard from "@/widgets/ProjectCard";

import "./page.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      {/* projects and research section */}
      <div className="mb-16" /> {/* Spacer */}
      <div className="mb-32 grid text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="col-span-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Research and Projects</h2>
          <h3 className="text-lg font-semibold mb-2">
            Trust Dynamics in Multi-Human Robot Teaming
          </h3>
          <p className="mb-4">
            Experiment and Data Analysis Team, College Station, Texas
          </p>
          <p className="mb-4">May 2023 - August 2023</p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Investigated human trust factors in human-robot work environments
              using bio instrumentation.
            </li>
            <li>Performed statistical analysis for experimental data.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">
            Investigating Hyperspectral-based Algorithms for Use in Off-Road
            Autonomous Vehicles
          </h3>
          <p className="mb-4">Spectral Database Team, College Station, Texas</p>
          <p className="mb-4">January 2023 - May 2023</p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Developed hyperspectral-based semantic segmentation software for
              path planning.
            </li>
            <li>
              Contributed to the creation of a hyperspectral library/database
              for efficient path planning.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">AM Receiver Circuit</h3>
          <p className="mb-4">
            Power Systems and Circuit Applications, College Station, Texas
          </p>
          <p className="mb-4">Spring 2023</p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Designed an AM receiver RLC circuit using various electrical
              components to detect AM radio signals.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Aggie Nightlight</h3>
          <p className="mb-4">
            Microcontroller Architecture, College Station, Texas
          </p>
          <p className="mb-4">Spring 2023</p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Programmed an MSP432 board to control a 16x16 LED display using
              ARM Assembly Language.
            </li>
            <li>
              Enabled customizable LED display with adjustable color and
              brightness.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">
            Autonomous Line Following Robot
          </h3>
          <p className="mb-4">Digital Electronics, College Station, Texas</p>
          <p className="mb-4">Fall 2022</p>
          <ul className="list-disc pl-8">
            <li>
              Programmed a DE10 Lite FPGA board using Intel Quartus Prime for
              line-following functionality.
            </li>
            <li>
              Implemented Pulse Width Modulation and One Hot Encoding for state
              machines.
            </li>
          </ul>
        </div>
        <hr className="border-t-2 border-gray-300 my-8" /> {/* Divider */}
        {/* awards and honors section, experience section */}
        <div className="col-span-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <h3 className="text-lg font-semibold mb-2">
            Teaching Assistant - Semi-Conductor Test Engineering I
          </h3>
          <p className="mb-4">
            Texas A&M University ESET Department, College Station, Texas
          </p>
          <p className="mb-4">May 2024 - Present</p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Assisted students with laboratory procedures and safety training.
            </li>
            <li>
              Evaluated student understanding through grading lab reports and
              assignments.
            </li>
            <li>Collaborated with TI Professionals on Cyclotron Tests.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">
            Product Engineering Intern
          </h3>
          <p className="mb-4">Texas Instruments, Dallas, Texas</p>
          <p className="mb-4">May 2024 - August 2024</p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Gained insight into Product Engineering roles before and after
              market release.
            </li>
            <li>Conducted design qualification tests (HTOL and bHAST).</li>
            <li>
              Implemented assembly changes to reduce costs and maintain
              competitiveness.
            </li>
            <li>
              Coordinated with various departments (test, validation, design,
              systems) for product release.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">
            Teaching Assistant - Local and Metropolitan Networks
          </h3>
          <p className="mb-4">
            Texas A&M University ESET Department, College Station, Texas
          </p>
          <p className="mb-4">August 2023 - May 2024</p>
          <ul className="list-disc pl-8">
            <li>
              Supported students with laboratory procedures and safety training.
            </li>
            <li>
              Graded lab reports and assignments to assess student
              understanding.
            </li>
          </ul>
        </div>
        {/* more in-depth about me footer section */}
      </div>
    </main>
  );
}
