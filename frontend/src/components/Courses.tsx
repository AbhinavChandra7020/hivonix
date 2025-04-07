import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/Footer';

const Courses: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16 relative flex flex-col justify-between overflow-hidden">
      <main className="flex-grow container mx-auto px-4 md:px-12 flex items-center justify-center text-center relative">
        {/* Animated Glow Behind Text */}
        <div className="absolute w-[300px] h-[300px] bg-blue-900 bg-opacity-20 rounded-full blur-3xl animate-pulseGlow z-0"></div>

        {/* Text Content On Top */}
        <div className="z-10" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl mb-6 text-blue-700 animate-fadeInUp">
            Courses Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-normal max-w-xl mx-auto animate-fadeInUp mb-14">
            We’re preparing something amazing! Our range of online and offline drone courses will be launching soon. Stay tuned.
          </p>

          {/* Message + Button */}
          <div className="mt-6 animate-fadeInUp">
            <p className="text-white text-opacity-70 mb-3 text-lg">
              In the meantime, check out our offerings
            </p>
            <button
              onClick={() => navigate('/services')}
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-lg py-3 px-10 rounded-full shadow-md transition duration-300 cursor-pointer"
            >
              Explore
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Animations */}
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

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Courses;
