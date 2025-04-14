import React from 'react';
import { motion } from 'framer-motion';
import bhosla1 from '../assets/bhosla-1.jpg';
import bhosla2 from '../assets/bhosla-2.jpg';
import bhosla3 from '../assets/bhosla-3.jpg';
import Footer from '../components/Footer';

const BhoslaWorkshop: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-900 opacity-20 blur-3xl animate-pulseGlow"></div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-800">
            Drone Workshop at Bhosla Military College
          </h1>
        </motion.div>

        {/* Image Gallery - 3 images at the top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <div className="rounded-xl overflow-hidden">
            <img 
              src={bhosla1} 
              alt="Bhosla Military College Workshop" 
              className="w-full h-64 object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src={bhosla2} 
              alt="Students learning drone assembly" 
              className="w-full h-64 object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src={bhosla3} 
              alt="Drone demonstration at workshop" 
              className="w-full h-64 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-blue-900"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Empowering Young Innovators – Drone Workshop at Bhosla Military College (Girls), Nashik
          </h2>
          
          <div className="space-y-4 text-zinc-300">
            <p>
              Hivonix proudly conducted an engaging and hands-on drone technology workshop at Bhosla Military College (Girls), Nashik. The event witnessed enthusiastic participation from young cadets eager to explore the world of drones and aerial robotics.
            </p>
            <p>
              Our expert team provided live demonstrations, explained the fundamentals of UAVs, and guided students through the practical aspects of drone assembly, flight mechanics, and safety protocols. The energy, curiosity, and confidence shown by the students were truly inspiring.
            </p>
            <p>
              This workshop not only introduced them to cutting-edge drone technology but also sparked a deeper interest in STEM and innovation. At Hivonix, we are committed to empowering the next generation of tech leaders by making advanced technologies accessible and exciting.
            </p>
            <p>
              We thank Bhosla Military College (Girls) for their warm hospitality and look forward to many more such collaborations that encourage learning, creativity, and technological growth.
            </p>
          </div>
        </motion.div>

        {/* Workshop Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-zinc-900 p-8 rounded-2xl shadow-lg border border-blue-900"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Workshop Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-blue-800 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Hands-on Learning</h3>
                <p className="text-zinc-400">Students assembled and configured drones under expert guidance</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-800 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Live Demonstrations</h3>
                <p className="text-zinc-400">Flight demonstrations showcasing various drone capabilities</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-800 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Technical Knowledge</h3>
                <p className="text-zinc-400">Understanding drone components, mechanics, and flight principles</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-800 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Interactive Sessions</h3>
                <p className="text-zinc-400">Engaging Q&A and problem-solving activities with students</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />

      {/* Glow animation */}
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% {
              opacity: 0.25;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.1);
            }
          }

          .animate-pulseGlow {
            animation: pulseGlow 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BhoslaWorkshop;