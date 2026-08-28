import React from 'react';
import { FaGithub, FaLink, FaEnvelope } from 'react-icons/fa';

const teamProfiles = [
  {
    name: "Barbara Oktoi",
    role: "Software Engineer",
    bio: "Passionate about crafting intuitive user interfaces and modern web applications.",
    avatarBg: "bg-[#d97706]",
    github: "https://github.com/barbaraoktoi",
    email: "mailto:barbara@example.com"
  },
  {
    name: "Harmon Moindi",
    role: "Software Engineer",
    bio: "Dedicated to scalable web solutions, clean architecture, and seamless integration.",
    avatarBg: "bg-[#2563eb]",
    github: "https://github.com/harmonmoindi",
    email: "mailto:harmon@example.com"
  },
  {
    name: "Frank Mwaura",
    role: "Software Engineer",
    bio: "Focused on reliable backend systems, performant APIs, and developer tools.",
    avatarBg: "bg-[#16a34a]",
    github: "https://github.com/frankmwaura",
    email: "mailto:frank@example.com"
  },
  {
    name: "Oketch Nathan",
    role: "Software Engineer",
    bio: "Driven by technical innovation, robust software design, and teamwork.",
    avatarBg: "bg-[#ea580c]",
    github: "https://github.com/oketchnathan",
    email: "mailto:oketch@example.com"
  }
];


export default function Profile() {
  return (
    <section className="min-h-screen bg-[#121212] text-[#e0e0e0] px-8 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[#f59e0b] font-mono text-sm">03</span>
          <h1 className="text-3xl font-bold text-white">Profile</h1>
        </div>

        {/* 4-Card Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamProfiles.map((member, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:border-[#333] transition-all"
            >
                {/* Avatar Icon */}
              <div
                className={`w-20 h-20 rounded-full ${member.avatarBg} flex items-center justify-center text-white font-bold text-2xl mb-4`}
              >
                {member.name.charAt(0)}
              </div>