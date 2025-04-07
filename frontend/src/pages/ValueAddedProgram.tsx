import React from 'react';
import ServicePage from '../components/ServicePage';
import Footer from '../components/Footer';

const ValueAddedProgram: React.FC = () => {
  return (
    <>
      <ServicePage
        title="Value Added Program (VAP)"
        sections={[
          {
            title: "Standard Value Added Program (1 Week)",
            description:
              "A structured and immersive program designed to enhance technical skills and industry readiness.",
            points: [
              "Drone Basics & Aerodynamics",
              "Hands-on Drone Assembly",
              "Coding & Programming for Drone Flight",
              "Autonomous Navigation & AI Integration",
              "Industry Applications & Future Prospects",
            ],
            pricingTable: [
              {
                type: "Standard VAP (1 Week)",
                price: "₹5,000 – ₹8,000 per student (varies by institution & customization)",
              },
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
};

export default ValueAddedProgram;
