import React from "react";
const ntnu = '/ntnu.png';
const vektor = '/vektor.svg';
const genus = '/genus.webp';
const berkeley = '/berkeley.png';

export const data = [
  {
    title: "Master's in Computer Science",
    location: "Trondheim, Norway",
    date: "2021 - Present",
    description: "I am in the 4th year of a 5-year master's program in Computer Science with a specialization in artificial intelligence at NTNU in Trondheim.",
    icon: React.createElement("img", { src: ntnu })
  },
  {
    title: "Software Developer",
    location: "Trondheim, Norway",
    date: "2023 - Present",
    description: "I am part of the IT team that develops the organization's website. We work with React with TypeScript for the front-end and PHP and SQL for the back-end. I have learned a lot about working on IT projects in a team.",
    icon: React.createElement("img", { src: vektor })
  },
  {
    title: "Summer Internship",
    location: "Oslo, Norway",
    date: "2024",
    description: "Intern as Software Developer at Genus, where I developed the No-Code platform Genus used for software solutions for clients. Focus on developing generalizable components through front-end development. Worked with technologies such as React, Node.js, and MongoDB.",
    icon: React.createElement("img", { src: genus })
  },
  {
    title: "University of California, Berkeley",
    location: "Berkeley, USA",
    date: "2024",
    description: "I am currently on an exchange semester at UC Berkeley, taking courses in Computer Science with a focus on computer vision and deep learning. During my time at Berkeley, I have gained significant insights, particularly in the field of deep learning.",
    icon: React.createElement("img", { src: berkeley })
  }
];
