import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Courses from './components/Courses';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ConnectPage from './components/ConnectPage';
import AOS from 'aos';
import { useEffect } from 'react';

// New 👇
import ScrollToTop from './components/ScrollToTop';

// Import all service pages
import Workshop from './pages/Workshop';
import ValueAddedProgram from './pages/ValueAddedProgram';
import Internship from './pages/Internship';
import DroneLabSetup from './pages/DroneLabSetup';
import VideoCourses from './pages/VideoCourses';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Add this here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ConnectPage />} />
        
        {/* Services Overview Page */}
        <Route path="/services" element={<Services />} />

        {/* Individual Service Pages */}
        <Route path="/services/workshops" element={<Workshop />} />
        <Route path="/services/value-added-program" element={<ValueAddedProgram />} />
        <Route path="/services/internship" element={<Internship />} />
        <Route path="/services/drone-lab-setup" element={<DroneLabSetup />} />
        <Route path="/services/video-courses" element={<VideoCourses />} />
      </Routes>
    </Router>
  );
}

export default App;