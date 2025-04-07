import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import FeatureBox from './FeatureBox';
import ServiceBox from './ServiceBox';
import workshopImage from '../assets/drone-workshop.png';
import droneLab from '../assets/drone-lab.png'
import vap from '../assets/vap.jpg'

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Pricing data from the document
  const droneWorkshops = [
    { type: "Basic Workshop (1 Day)",description: "Introduction to drones, basic flight mechanics, and hands-on flying demonstration.", url: "/services/workshops"},
    { type: "Standard Workshop (2 Days)", description: "Extended drone training with assembly practice and advanced navigation techniques.", url: "/services/workshops"},
    { type: "Advanced Workshop (3 Days)", description: "Comprehensive drone mastery with in-depth technical training and specialized applications.", url: "/services/workshops"}
  ];

  const valueAddedPrograms = [
    { type: "Standard VAP (1 Week)", description: "Intensive training covering drone basics, assembly, coding, autonomous navigation, and industry applications.", url: "/services/value-added-program"}
  ];

  const internshipPrograms = [
    { type: "Short-Term (1 Month)", description: "In-depth drone engineering with AI & robotics integration and real-world project work.", url: "/services/internship"}
  ];

  const droneLabs = [
    { type: "Basic Setup", capacity: "Up to 10 Students", description: "Essential drone equipment, software, and faculty training for smaller institutions.", url: "/services/drone-lab-setup" },
    { type: "Standard Setup", capacity: "Up to 25 Students", description: "Comprehensive drone lab with expanded capacity and advanced equipment.", url: "/services/drone-lab-setup"},
    { type: "Advanced Setup", capacity: "50+ Students", description: "Premium drone lab solution for larger institutions with cutting-edge technology.", url: "/services/drone-lab-setup"}
  ];

  // Use for later
  {/* const videoCourses = [
    { category: "Free Courses", courses: [
      { name: "Introduction to Drones & UAVs", url: "/courses/free/intro-drones" },
      { name: "Drone Safety & Regulations", url: "/courses/free/safety-regulations" },
      { name: "Fundamentals of Drone Aerodynamics", url: "/courses/free/aerodynamics" }
    ]},
    { category: "Beginner-Level Courses", courses: [
      { name: "Drone Components & Assembly", url: "/courses/beginner/components-assembly" },
      { name: "Basics of Drone Programming", url: "/courses/beginner/programming-basics" },
      { name: "Beginner's Guide to FPV Drones", url: "/courses/beginner/fpv-guide" },
      { name: "DIY Drone: Hands-On Build & Fly", url: "/courses/beginner/diy-drone" }
    ]},
    { category: "Intermediate-Level Courses", courses: [
      { name: "Advanced Drone Programming", url: "/courses/intermediate/advanced-programming" },
      { name: "Drone Calibration & Troubleshooting", url: "/courses/intermediate/calibration" },
      { name: "AI & Computer Vision for Drones", url: "/courses/intermediate/ai-vision" },
      { name: "Mapping & Surveying with Drones", url: "/courses/intermediate/mapping-surveying" }
    ]},
    { category: "Certification/Professional Programs", courses: [
      { name: "Drone Pilot Training & Licensing", url: "/courses/professional/pilot-licensing" },
      { name: "Industrial Drone Applications", url: "/courses/professional/industrial-applications" },
      { name: "Full Stack Drone Engineering", url: "/courses/professional/full-stack" }
    ]}
  ]; */}

  const bulkDiscounts = [
    { size: "10 - 25 Students", discount: "10% Off" },
    { size: "26 - 50 Students", discount: "15% Off" },
    { size: "51 - 100 Students", discount: "20% Off" },
    { size: "100+ Students", discount: "Custom Pricing" }
  ];

  // Keeping the original workshop features as strings
  const workshopFeatures = [
    "Introduction to Drones & UAVs",
    "Hands-on Drone Assembly & Testing",
    "Basics of Flight Mechanics & Navigation",
    "Live Flying Demonstration",
    "Certification of Participation"
  ];

  const vapFeatures = [
    "Drone Basics & Aerodynamics",
    "Hands-on Drone Assembly",
    "Coding & Programming for Drone Flight",
    "Autonomous Navigation & AI Integration",
    "Industry Applications & Future Prospects"
  ];

  const labFeatures = [
    "Drone kits & tools",
    "Software & hardware integration",
    "Training for faculty",
    "Course materials & curriculum support"
  ];

  {/* USE FOR LATER

    const CourseCard: React.FC<{ name: string, price?: string, url: string }> = ({ name, price, url }) => (
    <div className="bg-black p-4 rounded-lg border border-blue-900 hover:border-blue-700 transition duration-300">
      <h4 className="text-lg font-medium text-white">{name}</h4>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xl font-bold text-white">{price}</span>
        <a href={url} className="text-blue-500 hover:text-blue-400">Details →</a>
      </div>
    </div>
  ); 
  */}

  const PriceTable: React.FC<{ title: string, items: any[], columns: string[] }> = 
    ({ title, items, columns }) => (
    <div className="mt-12" data-aos="fade-up">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-900">
              {columns.map((column, idx) => (
                <th key={idx} className="p-3 text-left text-white border border-blue-800">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="border-b border-blue-900">
                {Object.keys(item).map((key, keyIdx) => (
                  <td key={keyIdx} className="p-3 border border-blue-900 text-white">{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-900 opacity-20 blur-3xl"></div>
      </div>

      <main className="container mx-auto px-4 md:px-12 mt-8 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Our Services</h1>
          <p className="text-xl text-white text-opacity-80 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive drone training solutions for individuals, educational institutions, and enterprises.
          </p>
        </section>

        {/* Featured Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center" data-aos="fade-up">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceBox 
              title="Drone Workshops" 
              description="Hands-on drone assembly, testing, and flying experiences tailored for students." 
              buttonText="Get Details"
              serviceUrl="/services/workshops"
            />
            <ServiceBox 
              title="Value Added Programs" 
              description="Intensive week-long training covering drone basics, coding, and industry applications." 
              buttonText="Get Details"
              serviceUrl="/services/value-added-program"
              highlight={true}
            />
            <ServiceBox 
              title="Video Courses" 
              description="Self-paced learning options from free introductory content to professional certification." 
              buttonText="Get Details"
              serviceUrl="/courses"
            />
          </div>
        </section>

        {/* Drone Workshops */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center" data-aos="fade-up">Drone Workshops</h2>
          <FeatureBox 
            title="Workshop Features" 
            features={workshopFeatures} 
            image={workshopImage}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {droneWorkshops.map((workshop, index) => (
              <ServiceBox 
                key={index}
                title={workshop.type} 
                description={workshop.description} 
                buttonText="Get Details"
                serviceUrl={workshop.url}
              />
            ))}
          </div>
        </section>

        {/* Value Added Programs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center" data-aos="fade-up">Value Added Programs</h2>
          <FeatureBox 
            title="Program Features" 
            features={vapFeatures} 
            image={vap}
          />
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueAddedPrograms.map((program, index) => (
              <ServiceBox 
                key={index}
                title={program.type} 
                description={program.description} 
                buttonText="Get Details"
                serviceUrl={program.url}
                highlight={true}
              />
            ))}
            {internshipPrograms.map((program, index) => (
              <ServiceBox 
                key={index}
                title={`Internship Program (${program.type})`} 
                description={program.description} 
                buttonText="Get Details"
                serviceUrl={program.url}
              />
            ))}
          </div>
        </section>

        {/* Bulk Discounts */}
        <PriceTable 
          title="Bulk Enrollment & Group Discounts" 
          items={bulkDiscounts} 
          columns={["Batch Size", "Discount"]} 
        />

        {/* Drone Lab Setup */}
        <section className="mb-20 pt-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center" data-aos="fade-up">Drone Lab Setup for Institutions</h2>
          <FeatureBox 
            title="Lab Features" 
            features={labFeatures} 
            image={droneLab} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {droneLabs.map((lab, index) => (
              <ServiceBox
                key={index}
                title={lab.type}
                subtitle={lab.capacity}
                description={lab.description}
                buttonText="Request Quote"
                serviceUrl={lab.url}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Animation Keyframes (reused from Homepage) */}
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

export default Services;
