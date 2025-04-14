import React from 'react';
import ServicePage from '../components/ServicePage';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import droneWorkshopImg from '../assets/workshop.jpg';
import bhosla1 from '../assets/bhosla-1.jpg' 
import { Link } from 'react-router-dom';

// Workshop data with actual images and content
const visitedWorkshops = [
  {
    id: 1,
    title: "Drone Workshop at Bhosla Military College",
    description: "Inspiring the Skybound Minds! A glimpse from our drone workshop at Bhosla Military College (Girls), where future innovators took flight with curiosity, confidence, and cutting-edge tech.",
    image: bhosla1
  },
  // {
  //   id: 2,
  //   title: "Advanced Drone Lab Session",
  //   description: "Hands-on experience with professional-grade drone equipment and programming interfaces.",
  //   image: "../assets/prof-drone-lab.png",
  // },
  // {
  //   id: 3,
  //   title: "Agricultural Drone Applications",
  //   description: "Exploring how drone technology is revolutionizing modern farming and agricultural practices.",
  //   image: "../assets/agri-drone.png",
  // }
];

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
            image: droneWorkshopImg,
          },
        ]}
      />

      {/* Past Workshops Section with Side-by-Side Layout */}
      <div className="max-w-6xl mx-auto my-16 px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Past Workshops</h2>
        
        <div className="space-y-24">
          {/* Workshop 1 - Bhosla Military College */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={visitedWorkshops[0].image} 
                  alt={visitedWorkshops[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-white mb-4">{visitedWorkshops[0].title}</h3>
              <p className="text-zinc-300 mb-6">{visitedWorkshops[0].description}</p>
              <Link 
                to="/BhoslaWorkshop"
                className="inline-block bg-blue-700 hover:bg-blue-600 text-white py-3 px-8 rounded-lg transition font-medium"
              >
                Explore
              </Link>
            </div>
          </div>

          {/* Workshop 2 - Advanced Drone Lab - COMMENTED OUT
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={visitedWorkshops[1].image} 
                  alt={visitedWorkshops[1].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-white mb-4">{visitedWorkshops[1].title}</h3>
              <p className="text-zinc-300 mb-6">{visitedWorkshops[1].description}</p>
              <Link 
                to={`/workshops/${visitedWorkshops[1].id}`}
                className="inline-block bg-blue-700 hover:bg-blue-600 text-white py-3 px-8 rounded-lg transition font-medium"
              >
                Explore
              </Link>
            </div>
          </div>
          */}

          {/* Workshop 3 - Agricultural Drone - COMMENTED OUT
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={visitedWorkshops[2].image} 
                  alt={visitedWorkshops[2].title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-white mb-4">{visitedWorkshops[2].title}</h3>
              <p className="text-zinc-300 mb-6">{visitedWorkshops[2].description}</p>
              <Link 
                to={`/workshops/${visitedWorkshops[2].id}`}
                className="inline-block bg-blue-700 hover:bg-blue-600 text-white py-3 px-8 rounded-lg transition font-medium"
              >
                Explore
              </Link>
            </div>
          </div>
          */}
        </div>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default Workshop;