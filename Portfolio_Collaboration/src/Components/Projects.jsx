import React from 'react';

const teamProjects = [
  {
    name: "Barbara Oktoi",
    githubUrl: "https://github.com/Barb24-cpu",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg",
    projects: [
      { title: "Automobile Company", description: "Sells different types of cars.",
        image: "/project 1 Barbara.png"
       },
      { title: "SokoPlus", description: "A shopping platform from trusted independent sellers.",
        image: "/project 2 Barbara.png"
       }
    ]
  },
  {
    name: "Harmon Moindi",
    githubUrl: "https://github.com/harmonmoindi",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg",
    projects: [
      { title: "CV Center", description: "A place you can make & download your CV (CV Center).",
        image: "/Project 1 Harmon.jpg"
       },
      { title: "Trading Performance Tracker", description: "A web application used to help you keep track and improve your trading.",
        image: "/Project 2 Harmon Trading performance tracker.jpeg"
       }
    ]
  },
  {
    name: "Frank Mwaura",
    githubUrl: "https://github.com/coodewizard31",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg",
    projects: [
      { title: "Akan Generator", description: "A Ghanian naming system by gender & days of the week.",
        image: "/project 1 Frank.jpeg"
       },
      { title: "Mediflow", description: "A hospital medical traffic system.",
        image: "/project 2 Frank.jpeg"
       }
    ]
  },
  {
    name: "Oketch Nathan",
    githubUrl: "https://github.com/nobuyanzi07-cell",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg",
    projects: [
      { title: "PrimeFlix", description: "A movie rating app.",
        image: "/project 1 Nathan.jpeg"
       },
      { title: "FlatBooks", description: "A bookstore website.",
        image: "/project 2 Nathan.jpeg"
       }
    ]
  }
];

export default function Projects() {
  return (
    <section style={{ marginBottom: '5rem' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2.5rem', color: '#ffffff' }}>
        <span style={{ color: '#d97706', marginRight: '0.75rem', fontSize: '1.5rem' }}>02</span>
        Projects
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {teamProjects.map((member, index) => (
          <div key={index}>
            {/* Developer Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
             {member.avatarImg ? (
  <img 
    src={member.avatarImg} 
    alt={member.name}
    style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      objectFit: 'cover'
    }}
  />
) : (
  <div style={{
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: member.avatarBg || '#333'
  }} />
)}
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#ffffff', fontWeight: 'bold' }}>{member.name}</h3>
              <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 'bold' }}>
                Learn more →
              </a>
            </div>

            {/* Projects 2-Column Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
              {member.projects.map((project, pIndex) => (
                <div key={pIndex} style={{ backgroundColor: '#262626', borderRadius: '12px', padding: '1.25rem', border: '1px solid #333' }}>
                  {/* Screenshot Placeholder */}
                  {project.image ? (
  <img 
    src={project.image} 
    alt={project.title}
    style={{
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem',
      display: 'block'
    }}
  />
) : (
  <div style={{
    backgroundColor: '#383d48',
    borderRadius: '8px',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    fontSize: '0.75rem',
    letterSpacing: '1px',
    fontWeight: 'bold',
    marginBottom: '1rem'
  }}>
    SCREENSHOT – PROJECT {pIndex + 1}
  </div>
)}
                  <h4 style={{ margin: '0 0 0.4rem 0', color: '#ffffff', fontSize: '1rem', fontWeight: 'bold' }}>{project.title}</h4>
                  <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.85rem', lineHeight: '1.4' }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}