import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type ServiceItem = {
  title: string;
  description: string;
};

const ServicesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services: ServiceItem[] = [
    {
      title: 'Drone Workshops',
      description: 'Hands-on sessions covering drone basics, assembly, flight mechanics, and live demonstrations. Includes participation certification.',
    },
    {
      title: 'Value Added Program (VAP)',
      description: 'One-week intensive program covering drone aerodynamics, programming, autonomous flight, and AI applications.',
    },
    {
      title: 'Internship Program',
      description: 'In-depth training on drone engineering, robotics integration, and real-world projects with certification and industry exposure.',
    },
    {
      title: 'Bulk Enrollment & Group Training',
      description: 'Special training packages and discounts for educational institutions and organizations with large groups.',
    },
    {
      title: 'Drone Lab Setup',
      description: 'Customized drone labs for colleges and universities including equipment, software, faculty training, and curriculum support.',
    },
    {
      title: 'Video Courses',
      description: 'Structured online content from beginner to professional levels. Includes topics like drone safety, AI integration, and industrial applications.',
    },
  ];

  return (
    <section className="mt-24 px-6">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h2>
      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isOdd ? 'md:flex-row-reverse' : ''
              } items-start justify-between gap-6 md:gap-10`}
              data-aos={isOdd ? 'fade-left' : 'fade-right'}
            >
              {/* Square Placeholder Box for Image */}
              <div className="w-40 h-40 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 text-sm shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-shadow duration-500 hover:shadow-[0_0_45px_rgba(255,255,255,0.9)]">
                Image
              </div>

              {/* Text Content */}
              <div
                className={`w-full md:w-2/3 ${
                  isOdd ? 'md:pr-8 text-right' : 'md:pl-8 text-left'
                }`}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white text-opacity-80">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
