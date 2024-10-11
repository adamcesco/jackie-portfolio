import React from "react";
import Image from "next/image";

import "./AboutSection.css";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AboutSection() {
  return (
    <div id="about-section">
      <div className="about-section__image">
        <AspectRatio ratio={1}>
          <Image
            src="/images/placeholder.svg"
            alt="Profile"
            style={{ borderRadius: "50%" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            fill
          />
        </AspectRatio>
      </div>
      <div className="about-section__text">
        <h2>
          I&apos;m an Electrical Engineering Student at Texas A&M University
          with a minors in Cybersecurity and Project Management.
        </h2>
        <p>
          I have always been fascinated by the intersection of technology and
          creativity. From a young age, I enjoyed tinkering with gadgets and
          building small projects. My passion for engineering led me to Texas
          A&M University, where I am currently pursuing a degree in Electrical
          Engineering.
        </p>
        <p>
          During the summer of 2024, I had the opportunity to work as a Product
          Engineer intern at Texas Instruments in Dallas, Texas. In this role, I
          conducted design qualification tests (HTOL and bHAST) and implemented
          assembly changes to reduce costs and maintain competitiveness. I also
          coordinated with various departments, including test, validation,
          design, and systems, to ensure a smooth product release.
        </p>
        <p>
          Additionally, I am currently working as a Teaching Assistant for the
          Semi-Conductor Test Engineering course at Texas A&M University. My
          responsibilities include assisting students with laboratory procedures
          and safety training, evaluating their understanding through grading
          lab reports and assignments, and collaborating with TI Professionals
          on Cyclotron Tests.
        </p>
      </div>
    </div>
  );
}
