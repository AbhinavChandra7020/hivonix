import React from 'react';
import ServicePage from '../components/ServicePage';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import droneWorkshopImg from '../assets/workshop.jpg'; 

const Workshop: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Optional background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-900 opacity-20 blur-3xl animate-pulseGlow"></div>
      </div>

      <ServicePage
        title="Drone Workshop Programs"
        sections={[
          {
            title: "Offline Drone Workshops",
            description: "Conducted at schools, colleges, and training centers for 1–3 days.",
            points: [
              "Introduction to Drones & UAVs",
              "Hands-on Drone Assembly & Testing",
              "Basics of Flight Mechanics & Navigation",
              "Live Flying Demonstration",
              "Certification of Participation",
            ],
            pricingTable: [
              { type: "Basic Workshop (1 Day)", price: "₹1,500 per student" },
              { type: "Standard Workshop (2 Days)", price: "₹2,500 per student" },
              { type: "Advanced Workshop (3 Days)", price: "₹3,500 per student" },
            ],
            image: droneWorkshopImg, // ✅ image added
          },
        ]}
      >
        <div className="mt-12">
          <ContactForm />
        </div>
      </ServicePage>

      <Footer />
    </div>
  );
};

export default Workshop;
