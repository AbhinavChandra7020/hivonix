import React from "react";
import { motion } from "framer-motion";

interface PricingItem {
  type: string;
  price: string;
}

interface Section {
  title: string;
  description: string;
  points: string[];
  pricingTable?: PricingItem[];
}

interface ServicePageProps {
  title: string;
  sections: Section[];
}

const ServicePage: React.FC<ServicePageProps> = ({ title, sections }) => {
  return (
    <div className="min-h-screen px-4 py-20 text-white bg-black relative overflow-hidden">
      {/* Blue background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 animate-pulseGlow">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-800 opacity-25 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">{title}</h1>

        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-zinc-900 p-8 rounded-2xl shadow-lg border border-blue-900 mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">{section.title}</h2>
            <p className="mb-6 text-zinc-300">{section.description}</p>

            <ul className="list-disc list-inside space-y-2 mb-8 text-zinc-200">
              {section.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>

            {/* Pricing table - optional */}
            {/* {section.pricingTable && (
              <div className="overflow-hidden border border-blue-800 rounded-xl mt-6">
                <table className="w-full border-collapse overflow-hidden rounded-xl">
                  <thead>
                    <tr className="bg-blue-800 text-white text-left">
                      <th className="px-6 py-3 text-lg font-semibold rounded-tl-xl">
                        Type
                      </th>
                      <th className="px-6 py-3 text-lg font-semibold rounded-tr-xl">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.pricingTable.map((item, idx) => {
                      const isLast = idx === section.pricingTable.length - 1;
                      return (
                        <tr
                          key={idx}
                          className={`hover:bg-zinc-800 transition border-t border-blue-800 ${
                            isLast ? "last:rounded-b-xl" : ""
                          }`}
                        >
                          <td className={`px-6 py-4 ${isLast ? "rounded-bl-xl" : ""}`}>
                            {item.type}
                          </td>
                          <td className={`px-6 py-4 ${isLast ? "rounded-br-xl" : ""}`}>
                            {item.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )} */}
          </div>
        ))}
      </motion.div>

      {/* Glow animation */}
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% {
              opacity: 0.25;
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
        `}
      </style>
    </div>
  );
};

export default ServicePage;
