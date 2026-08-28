import React from 'react';

const teamProjects = [
  {
    name: "Barbara Oktoi",
    githubUrl: "https://github.com/barbaraoktoi", // Replace with actual URL
    projects: [
      {
        title: "Project Title One",
        description: "Short one-line description of the project goes here."
      },
      {
        title: "Project Title Two",
        description: "Short one-line description of the project goes here."
      }
    ]
  },
  {
    name: "Harmon Moindi",
    githubUrl: "https://github.com/harmonmoindi", // Replace with actual URL
    projects: [
      {
        title: "Project Title One",
        description: "Short one-line description of the project goes here."
      },
      {
        title: "Project Title Two",
        description: "Short one-line description of the project goes here."
      }
    ]
  },
  {
    name: "Frank Mwaura",
    githubUrl: "https://github.com/frankmwaura", // Replace with actual URL
    projects: [
      {
        title: "Project Title One",
        description: "Short one-line description of the project goes here."
      },
      {
        title: "Project Title Two",
        description: "Short one-line description of the project goes here."
      }
    ]
  },
  {
    name: "Oketch Nathan",
    githubUrl: "https://github.com/oketchnathan", // Replace with actual URL
    projects: [
      {
        title: "Project Title One",
        description: "Short one-line description of the project goes here."
      },
      {
        title: "Project Title Two",
        description: "Short one-line description of the project goes here."
      }
    ]
  }
];
export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] text-[#e0e0e0] px-8 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[#f59e0b] font-mono text-sm">02</span>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
        </div>

        {/* 2-Column Grid for Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamProjects.map((member, index) => (
            <div key={index} className="flex flex-col gap-6">
              {/* Member Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white font-bold text-sm">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f59e0b] text-xs font-mono hover:underline flex items-center gap-1"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              </div>