import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ContactForm from './ContactForm';
import Footer from './Footer';

const Connect: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-900 opacity-30 blur-3xl animate-pulseGlow"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 md:px-12 mt-8">
        <section className="text-center mb-8" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-white mb-2">Connect with Us</h1>
          <p className="text-white text-opacity-80 font-medium max-w-2xl mx-auto">
            Join us and stay in touch with our events, updates, and breakthroughs in the drone-tech world.
          </p>
        </section>

        <section data-aos="fade-up" className="mb-16">
          <ContactForm />
        </section>
      </main>

      <Footer />

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

export default Connect;
