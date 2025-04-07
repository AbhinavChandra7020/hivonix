import React from 'react';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 md:px-12 relative overflow-hidden">
      
      {/* Background glow effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-900 opacity-30 blur-3xl animate-pulseGlow"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12 pb-24">
        <h1 className="text-4xl md:text-5xl text-center font-semibold text-blue-900">
          About Us
        </h1>

        <p className="text-lg text-white text-opacity-80 leading-relaxed">
          Skycircuit Innovations Pvt. Ltd. is a tech-forward company committed to transforming the future through
          cutting-edge advancements in defense, education, and unmanned aerial systems. With a strong presence in training,
          research, and hands-on innovation, Skycircuit is on a mission to build tomorrow’s leaders in technology. As part of
          this vision, initiatives like Antimatrix explore emerging possibilities in advanced drone systems and defense technologies,
          while also providing students with practical experience in drone development and flight training.
        </p>

        <p className="text-lg text-white text-opacity-80 leading-relaxed">
          Hivonix is a dedicated division under Skycircuit, focused on revolutionizing drone education.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-700">
            What we do at Hivonix:
          </h2>

          <p className="text-white text-opacity-90">
            Drone-Focused Learning: We offer hands-on workshops, internship programs, and value-added courses designed for both
            school and college students.
          </p>

          <p className="text-white text-opacity-90">
            Build. Code. Fly.: Students don’t just learn—they build their own drones, program them, calibrate them, and take them
            to the skies.
          </p>

          <p className="text-white text-opacity-90">
            Skill-First Approach: Our training is designed to bridge the gap between theory and industry needs, preparing students
            for real-world innovation.
          </p>

          <p className="text-white text-opacity-90">
            Campus Labs: We help institutions set up dedicated drone and aviation labs that become hubs for creativity and learning.
          </p>

          <p className="text-white text-opacity-90">
            Learning that Elevates: Whether it’s a beginner taking flight or a tech enthusiast diving deep into UAV systems,
            Hivonix empowers every learner to Innovate. Elevate. Dominate.
          </p>
        </div>

        <p className="text-lg text-white text-opacity-80 leading-relaxed">
          We’re not just building drones—we’re building futures.
        </p>
      </div>

      {/* Footer with spacing */}
      <div className="mt-24 relative z-10">
        <Footer />
      </div>

      {/* Background animation keyframes */}
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% {
              opacity: 0.2;
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

export default AboutUs;
