import React from "react";
const team = [
  {
    name: "Barbara Oktoi",
    role: "Software Engineer",
    avatarColor: "#f4a261",
    bio: "Focused on building clean interfaces with React and JavaScript.",
    skills: ["HTML/CSS", "JavaScript", "React", "Python"],
  },
  {
    name: "Harmon Moindi",
    role: "Software Engineer",
    avatarColor: "#7ab8d9",
    bio: "Enjoys building full features from React components to backend logic.",
    skills: ["HTML/CSS", "JavaScript", "React", "Python"],
  },
  {
    name: "Frank Mwaura",
    role: "Software Engineer",
    avatarColor: "#8fbf7f",
    bio: "Interested in how frontend and backend fit together.",
    skills: ["HTML/CSS", "JavaScript", "React", "Python"],
  },
  {
    name: "Oketch Nathan",
    role: "Software Engineer",
    avatarColor: "#e08e45",
    bio: "Likes solving problems using Python and JavaScript.",
    skills: ["HTML/CSS", "JavaScript", "React", "Python"],
  },
];

export default function HomeAndAbout() {
  const styles = {
    home: {
      background: "#12141a",
      minHeight: "92vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 19%",
      color: "#eee",
    },
    small: {
      color: "#f5ae42",
      letterSpacing: "3px",
    },
    h1: {
      fontSize: "45px",
      marginTop: "30px",
    },
    names: {
      fontFamily: "monospace",
      fontSize: "17px",
    },
    text: {
      color: "#aab2c0",
      marginTop: "25px",
    },
    button: {
      background: "#f5ae42",
      border: "none",
      padding: "16px 25px",
      marginTop: "50px",
      cursor: "pointer",
    },
  };

  return (
    <>
      {/* HOME SECTION */}
      <main id="hero" style={styles.home}>
        <small style={styles.small}>▪ TEAM MANIFEST / G11</small>

        <h1 style={styles.h1}>Hello, we're Software Engineers,</h1>

        <p style={styles.names}>
          [Barbara Oktoi ] [Harmmon Moindi] [Frank Mwaura] [Oketch Nathan]
        </p>

        <p style={styles.text}>Welcome to our portfolio.</p>

        <button
          style={styles.button}
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View our work →
        </button>
      </main>

      {/* ABOUT SECTION */}
      <section
        id="about"
        style={{
          background: "#12141a",
          color: "#ccc",
          padding: "20px 19% 60px",
        }}
      >
        <h2 style={{ color: "#fff" }}>
          <span style={{ color: "#f5ae42" }}>01/ </span>
          About
        </h2>

        <p>
          We're a team of four <strong>software engineers</strong> building this
          portfolio together as Group 11.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            marginTop: "30px",
          }}
        >
          {team.map((person) => (
            <div
              key={person.name}
              style={{
                background: "#242832",
                border: "1px solid #444",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                gap: "12px",
              }}
            >
              <div
                style={{
                  background: person.avatarColor,
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />

              <div>
                <h3>{person.name}</h3>

                <p
                  style={{
                    color: "#f5ae42",
                    fontFamily: "monospace",
                  }}
                >
                  {person.role}
                </p>

                <p>{person.bio}</p>

                <div>
                  {person.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        border: "1px solid #555",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        marginRight: "6px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
