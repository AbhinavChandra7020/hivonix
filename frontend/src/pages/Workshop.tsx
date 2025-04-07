import React from 'react';
import ServicePage from '../components/ServicePage';
import Footer from '../components/Footer';

const Workshop: React.FC = () => {
  return (
    <>
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
          },
        ]}
      />
      <Footer />
    </>
  );
};

export default Workshop;
