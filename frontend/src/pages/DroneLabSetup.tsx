import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import FeatureBox from '../components/FeatureBox';
import ServiceBox from '../components/ServiceBox';
import professionalLab from '../assets/prof-drone-lab.png'

const DroneLabSetup: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const labFeatures = [
    "Drone kits & tools",
    "Software & hardware integration",
    "Training for faculty",
    "Course materials & curriculum support"
  ];

  const droneLabs = [
    {
      type: "Basic Setup",
      capacity: "Up to 10 Students",
      // price: "₹5,00,000",
      description: "Essential drone equipment, software, and faculty training for smaller institutions.",
      url: "/contact"
    },
    {
      type: "Standard Setup",
      capacity: "Up to 25 Students",
      // price: "₹9,00,000",
      description: "Comprehensive drone lab with expanded capacity and advanced equipment.",
      url: "/contact"
    },
    {
      type: "Advanced Setup",
      capacity: "50+ Students",
      // price: "₹15,00,000",
      description: "Premium drone lab solution for larger institutions with cutting-edge technology.",
      url: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-900 opacity-20 blur-3xl animate-pulseGlow"></div>
      </div>

      <main className="container mx-auto px-4 md:px-12 mt-8 relative z-10">
        {/* Title */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Drone Lab Setup</h1>
          <p className="text-xl text-white text-opacity-80 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Establish cutting-edge drone labs for educational excellence and future-ready institutions.
          </p>
        </section>

        {/* Features */}
        <FeatureBox
          title="Lab Features"
          features={labFeatures}
          image={professionalLab}
        />

        {/* Lab Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {droneLabs.map((lab, index) => (
            <ServiceBox
              key={index}
              title={lab.type}
              subtitle={lab.capacity}
              description={lab.description}
              // price={lab.price}
              buttonText="Request Quote"
              serviceUrl={lab.url}
            />
          ))}
        </div>

        {/* Contact Section */}
        <section className="mt-24 mb-16">
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DroneLabSetup;
