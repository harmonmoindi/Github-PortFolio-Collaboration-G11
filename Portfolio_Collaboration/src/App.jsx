import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import Profile from './Components/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Sets Projects as default home page */}
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}