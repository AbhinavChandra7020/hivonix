import React from 'react';
import ServicePage from '../components/ServicePage';
import Footer from '../components/Footer';

const Internship: React.FC = () => {
  return (
    <>
      <ServicePage
        title="Drone Internship Program"
        sections={[
          {
            title: "Short-Term Internship (1 Month)",
            description: "Ideal for college students seeking hands-on experience and real-world drone project exposure.",
            points: [
              "Drone Design & Engineering",
              "Programming for Autonomous Flight",
              "AI & Robotics Integration",
              "Real-Time Projects & Documentation",
              "Mentorship & Industry Insights",
            ],
            pricingTable: [
              { type: "Short-Term Internship (1 Month)", price: "₹3,000 per student" },
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
};

export default Internship;
