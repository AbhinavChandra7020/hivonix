import React from 'react';
import ServicePage from '../components/ServicePage';

const VideoCourses = () => (
  <ServicePage
    title="Video Courses"
    sections={[
      {
        title: "Free Courses",
        description: "Accessible introductory content to build interest.",
        points: [
          "Introduction to Drones & UAVs",
          "Drone Safety & Regulations",
          "Fundamentals of Drone Aerodynamics",
        ],
        pricingTable: [
          { type: "Each Course", price: "₹0" },
        ],
      },
      {
        title: "Beginner-Level Courses",
        description: "Affordable courses with hands-on value.",
        points: [],
        pricingTable: [
          { type: "Drone Components & Assembly", price: "₹1,999" },
          { type: "Basics of Drone Programming", price: "₹2,999" },
          { type: "Beginner’s Guide to FPV Drones", price: "₹3,999" },
          { type: "DIY Drone: Build & Fly", price: "₹4,999" },
        ],
      },
      {
        title: "Intermediate-Level Courses",
        description: "Ideal for upskilling & practical use cases.",
        points: [],
        pricingTable: [
          { type: "Advanced Drone Programming", price: "₹5,999" },
          { type: "Drone Calibration & Troubleshooting", price: "₹6,999" },
          { type: "AI & Computer Vision for Drones", price: "₹9,999" },
          { type: "Mapping & Surveying with Drones", price: "₹10,999" },
        ],
      },
      {
        title: "Certification & Professional Programs",
        description: "Designed for careers in drone technology.",
        points: [],
        pricingTable: [
          { type: "Drone Pilot Training & Licensing", price: "₹25,000" },
          { type: "Industrial Drone Applications", price: "₹35,000" },
          { type: "Full Stack Drone Engineering", price: "₹50,000" },
        ],
      },
    ]}
  />
);

export default VideoCourses;
