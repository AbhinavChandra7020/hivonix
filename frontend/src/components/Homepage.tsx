import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import hivonixLogo from '../assets/Hivonix.png';
import vap from '../assets/vap.jpg';
import droneVideo from '../assets/drone-vid.mp4';
import workshopImage from '../assets/drone-workshop.png';
// import internshipImage from '../assets/internship-program.png';
import droneParts from '../assets/drone-parts.png';
import agriDrone from '../assets/agri-drone.png';

import ServicesSection from './ServicesSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

type ObjectiveItemProps = {
  title: string;
  description: string;
  index?: number;
};

type ServiceItemProps = {
  title: string;
  description: string;
  imageSrc?: string;
  isReversed?: boolean;
};

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const objectiveItems: ObjectiveItemProps[] = [
    {
      title: "Drone Flight Mastery",
      description: "Learn essential piloting skills and advanced flight techniques for various drone models.",
    },
    {
      title: "Technical Proficiency",
      description: "Understand drone components, maintenance procedures, and troubleshooting methods.",
    },
    {
      title: "Industry Applications",
      description: "Explore how drones revolutionize industries from agriculture to cinematography.",
    },
  ];

  const serviceItems: ServiceItemProps[] = [
    {
      title: "Drone Workshops",
      description: "Hands-on sessions covering drone basics, assembly, flight mechanics, and live demonstrations. Includes participation certification.",
      imageSrc: workshopImage,
      isReversed: false
    },
    {
      title: "Value Added Program (VAP)",
      description: "One-week intensive program covering drone aerodynamics, programming, autonomous flight, and AI applications.",
      imageSrc: vap,
      isReversed: true
    },
    // {
    //   title: "Internship Program",
    //   description: "In-depth training on drone engineering, robotics integration, and real-world projects with certification and industry exposure.",
    //   imageSrc: internshipImage,
    //   isReversed: false
    // },
  ];

  const ObjectiveCard: React.FC<ObjectiveItemProps> = ({ title, description, index = 0 }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleTimeUpdate = () => {
      const video = videoRef.current;
      if (video && video.currentTime > 30) {
        video.currentTime = 0;
      }
    };

    return (
      <div
        className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition duration-100 border border-blue-900"
        data-aos="fade-up"
      >
        <div className="bg-blue-900 h-48 w-full rounded-md mb-4 flex items-center justify-center text-white overflow-hidden">
          {index === 0 ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={droneVideo}
              muted
              autoPlay
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
            >
              Your browser does not support the video tag.
            </video>
          ) : index === 1 ? (
            <img
              src={droneParts}
              alt="Technical Proficiency"
              className="w-full h-full object-cover"
            />
          ) : index === 2 ? (
            <img
              src={agriDrone}
              alt="Industry Applications"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white text-opacity-50 text-sm">Drone Image Placeholder</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-opacity-80">{description}</p>
      </div>
    );
  };

  const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, imageSrc, isReversed }) => (
    <div
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center mb-12`}
      data-aos="fade-up"
    >
      <div className="w-full md:w-1/3">
        <div className="aspect-square bg-blue-900 rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-md"></div>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <span className="text-white text-opacity-50">Image</span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white text-opacity-80">{description}</p>
      </div>
    </div>
  );

  const handleGetStarted = () => navigate('/courses');
  const handleLearnMore = () => navigate('/about');

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      <main className="container mx-auto px-4 md:px-12 mt-8">
        <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="w-[700px] h-[700px] rounded-full bg-blue-900 opacity-30 blur-3xl animate-pulseGlow"></div>
          </div>
          <div className="relative z-10 w-64 md:w-80 mb-6 animate-fadeInUp">
            <img src={hivonixLogo} alt="Hivonix Logo" className="w-full" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 z-10 animate-fadeInUp">
            Innovate. Elevate. Dominate.
          </h1>
          <div className="flex gap-4 mt-8 z-10 animate-fadeInUp">
            <button
              onClick={handleGetStarted}
              className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
            >
              Get Started
            </button>
            <button
              onClick={handleLearnMore}
              className="border-2 border-blue-900 text-white hover:bg-blue-950 font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
            >
              Learn More
            </button>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center" data-aos="fade-up">
            Our Services
          </h2>
          <div className="space-y-12">
            {serviceItems.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                isReversed={service.isReversed}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate('/services')}
              className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 flex items-center gap-2"
            >
              Explore →
            </button>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center" data-aos="fade-up">Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectiveItems.map((objective, index) => (
              <ObjectiveCard key={index} title={objective.title} description={objective.description} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-24 mb-16">
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

export default Homepage;
