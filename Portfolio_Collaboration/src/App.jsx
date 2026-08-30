import React from 'react';
import Projects from './Components/Projects';
import Profile from './Components/Profile';

export default function App() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', minHeight: '100vh', padding: '3rem 2rem', fontFamily: 'sans-serif' }}>
      <main style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Projects />
        <Profile />
      </main>
    </div>
  );
}