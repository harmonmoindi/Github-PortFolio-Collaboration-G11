import React from 'react';
import { FaGithub, FaLink, FaEnvelope } from 'react-icons/fa';

const teamProfiles = [
  {
    name: "Barbara Oktoi",
    role: "Software Engineer",
    bio: "Open to connecting — always happy to talk React and frontend craft.",
    github: "https://github.com/barbaraoktoi",
    email: "mailto:barbara@example.com",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg",
    avatarBg: "#f4a261"
  },
  {
    name: "Harmon Moindi",
    role: "Software Engineer",
    bio: "Building in public — reach out about full-stack work or collabs.",
    github: "https://github.com/harmonmoindi",
    email: "mailto:harmon@example.com",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg"
  },
  {
    name: "Frank Mwaura",
    role: "Software Engineer",
    bio: "Let's connect — always up for a conversation about Python or JS.",
    github: "https://github.com/frankmwaura",
    email: "mailto:frank@example.com",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg"
  },
  {
    name: "Oketch Nathan",
    role: "Software Engineer",
    bio: "Say hello — interested in frontend/backend collab opportunities.",
    github: "https://github.com/oketchnathan",
    email: "mailto:oketch@example.com",
    avatarImg: "https://static.vecteezy.com/system/resources/thumbnails/074/527/716/small/minimalist-silhouette-human-user-profile-avatar-placeholder-shape-icon-vector.jpg"
  }
];

export default function Profile() {
  return (
    <section id="profile" style={{ paddingTop: '2rem' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2.5rem', color: '#ffffff' }}>
        <span style={{ color: '#d97706', marginRight: '0.75rem', fontSize: '1.5rem' }}>03</span>
        Profile
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {teamProfiles.map((member, index) => (
          <div key={index} style={{ backgroundColor: '#262626', borderRadius: '12px', padding: '2rem 1.5rem', textAlign: 'center', border: '1px solid #333' }}>
            {/* Color Avatar */}
            {member.avatarImg ? (
  <img 
    src={member.avatarImg} 
    alt={member.name}
    style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto 1.25rem auto',
      display: 'block'
    }}
  />
) : (
  <div style={{
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: member.avatarBg,
    margin: '0 auto 1.25rem auto'
  }} />
)}
            <h3 style={{ margin: '0 0 0.3rem 0', fontSize: '1.1rem', color: '#ffffff', fontWeight: 'bold' }}>{member.name}</h3>
            <p style={{ margin: '0 0 1rem 0', color: '#d97706', fontSize: '0.85rem', fontWeight: 'bold' }}>{member.role}</p>
            <p style={{ margin: '0 0 1.5rem 0', color: '#9ca3af', fontSize: '0.85rem', lineHeight: '1.4' }}>{member.bio}</p>

            {/* Social Icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem' }}>
              <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}><FaGithub size={16} /></a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}><FaLink size={16} /></a>
              <a href={member.email} style={{ color: '#9ca3af' }}><FaEnvelope size={16} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}