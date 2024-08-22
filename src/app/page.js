import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-3xl font-bold mb-4">Jacqueline Aleman</h1>
        <p className="mb-4">Email: jacquelinenaleman@gmail.com</p>
        <p className="mb-8">LinkedIn: <a href="https://www.linkedin.com/in/jacqueline-aleman" target="_blank" rel="noopener noreferrer">linkedin.com/in/jacqueline-aleman</a></p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="col-span-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="mb-4">Texas A&M University – College Station, Texas</p>
          <p className="mb-4">B.S. Electrical Systems Engineering Technology</p>
          <p className="mb-4">Minors: Cybersecurity & Project Management</p>
          <p className="mb-4">Expected Graduation: May 2025</p>
          <h3 className="text-lg font-semibold mb-2">Relevant Coursework:</h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Circuit Analysis</li>
            <li>Digital Electronics</li>
            <li>Embedded System Devices in C</li>
            <li>Power Systems and Circuit Applications</li>
            <li>Local and Metropolitan-Area Networks</li>
            <li>Six Sigma & Applied Statistics</li>
            <li>Microcontroller Architecture</li>
            <li>Analog Electronics</li>
            <li>Embedded Systems Software</li>
            <li>Advanced Network Systems and Security</li>
            <li>Electromagnetic and High-Frequency Systems</li>
            <li>Product Development</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Program Design and Concepts:</h3>
          <ul className="list-disc pl-8 mb-4">
            <li>Electrical Circuit Theory</li>
            <li>Logic Design</li>
            <li>Coding for Embedded Systems</li>
            <li>Network Infrastructure</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Extracurriculars:</h3>
          <ul className="list-disc pl-8">
            <li>Filipino Student Association (PHILSA)</li>
            <li>Aggie Undergraduate Research Program (ARP)</li>
            <li>Mexican Student Association (MSA)</li>
            <li>Society of Hispanic Professional Engineers (SHPE)</li>
          </ul>
        </div>

        <div className="col-span-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <h3 className="text-lg font-semibold mb-2">Product Engineer intern</h3>
          <p className="mb-4">Texas Instruments, Dallas, Texas</p>
          <p className="mb-4">May 2024 - August 2024</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Conducted design qualification tests (HTOL and bHAST).</li>
            <li>Implemented assembly changes to reduce costs and maintain competitiveness.</li>
            <li>Coordinated with various departments (test, validation, design, systems) for product release.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Teaching Assistant - Semi-Conductor Test Engineering I</h3>
          <p className="mb-4">Texas A&M University ESET Department, College Station, Texas</p>
          <p className="mb-4">May 2024 - Present</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Assisted students with laboratory procedures and safety training.</li>
            <li>Evaluated student understanding through grading lab reports and assignments.</li>
            <li>Collaborated with TI Professionals on Cyclotron Tests.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Product Engineering Intern</h3>
          <p className="mb-4">Texas Instruments, Dallas, Texas</p>
          <p className="mb-4">May 2024 - August 2024</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Gained insight into Product Engineering roles before and after market release.</li>
            <li>Conducted design qualification tests (HTOL and bHAST).</li>
            <li>Implemented assembly changes to reduce costs and maintain competitiveness.</li>
            <li>Coordinated with various departments (test, validation, design, systems) for product release.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Teaching Assistant - Local and Metropolitan Networks</h3>
          <p className="mb-4">Texas A&M University ESET Department, College Station, Texas</p>
          <p className="mb-4">August 2023 - May 2024</p>
          <ul className="list-disc pl-8">
            <li>Supported students with laboratory procedures and safety training.</li>
            <li>Graded lab reports and assignments to assess student understanding.</li>
          </ul>
        </div>

        <div className="col-span-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Research and Projects</h2>
          <h3 className="text-lg font-semibold mb-2">Investigating Hyperspectral-based Algorithms for Use in Off-Road Autonomous Vehicles</h3>
          <p className="mb-4">Spectral Database Team, College Station, Texas</p>
          <p className="mb-4">January 2023 - May 2023</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Developed hyperspectral-based semantic segmentation software for path planning.</li>
            <li>Contributed to the creation of a hyperspectral library/database for efficient path planning.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Trust Dynamics in Multi-Human Robot Teaming</h3>
          <p className="mb-4">Experiment and Data Analysis Team, College Station, Texas</p>
          <p className="mb-4">May 2023 - August 2023</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Investigated human trust factors in human-robot work environments using bio instrumentation.</li>
            <li>Performed statistical analysis for experimental data.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Autonomous Line Following Robot</h3>
          <p className="mb-4">Digital Electronics, College Station, Texas</p>
          <p className="mb-4">Fall 2022</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Programmed a DE10 Lite FPGA board using Intel Quartus Prime for line-following functionality.</li>
            <li>Implemented Pulse Width Modulation and One Hot Encoding for state machines.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">AM Receiver Circuit</h3>
          <p className="mb-4">Power Systems and Circuit Applications, College Station, Texas</p>
          <p className="mb-4">Spring 2023</p>
          <ul className="list-disc pl-8 mb-4">
            <li>Designed an AM receiver RLC circuit using various electrical components to detect AM radio signals.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Aggie Nightlight</h3>
          <p className="mb-4">Microcontroller Architecture, College Station, Texas</p>
          <p className="mb-4">Spring 2023</p>
          <ul className="list-disc pl-8">
            <li>Programmed an MSP432 board to control a 16x16 LED display using ARM Assembly Language.</li>
            <li>Enabled customizable LED display with adjustable color and brightness.</li>
          </ul>
        </div>

        <div className="col-span-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <h3 className="text-lg font-semibold mb-2">Technical:</h3>
          <p className="mb-4">Python, C, R, Quartus Prime, MATLAB, Simulink, Ubuntu, ARM Assembly Language, Verilog HDL, Microsoft Tools</p>
          <h3 className="text-lg font-semibold mb-2">Languages:</h3>
          <p className="mb-4">English, Spanish, Korean, ASL</p>
          <h3 className="text-lg font-semibold mb-2">Interests:</h3>
          <p className="mb-4">Semiconductor, Medical Equipment Development, Cyber Security, Machine Learning, Project Management, Circuit Schematics, Community Service</p>
        </div>

        <div className="col-span-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Awards & Honors</h2>
          <ul className="list-disc pl-8">
            <li>National Merit Special Scholarship (Insperity)</li>
            <li>Hispanic Scholarship Fund Recipient</li>
            <li>Lean Six Sigma Yellow Belt</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
