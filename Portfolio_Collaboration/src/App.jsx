import React from "react";
import Navbar from "./Components/Navbar";
import HomeAndAbout from "./Components/HomeAndAbout";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
import Contact from "./Components/Contacts";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#12141a",
        color: "#f3f1ec",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <Navbar />
      <HomeAndAbout />
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}
      >
        <Projects />
        <Profile />
      </div>
      <Contact />
    </div>
  );
}
