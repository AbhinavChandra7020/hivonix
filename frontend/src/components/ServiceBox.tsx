import React from 'react';

interface ServiceBoxProps {
  title: string;
  subtitle?: string;
  description: string;
  price?: string;
  buttonText?: string;
  serviceUrl?: string;
  highlight?: boolean;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ 
  title, 
  subtitle, 
  description, 
  price, 
  buttonText = "Request Quote", 
  serviceUrl = "#", 
  highlight = false 
}) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md border transition duration-300 ${
        highlight ? 'bg-blue-900 border-blue-700' : 'bg-black border-blue-900 hover:border-blue-700'
      }`}
      data-aos="fade-up"
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      {subtitle && <div className="text-blue-500 font-medium mb-2">{subtitle}</div>}
      <p className="text-white text-opacity-80 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-white">{price}</span>
        <a 
          href={serviceUrl}
          className={`py-2 px-4 rounded-full shadow-md transition duration-300 inline-block ${
            highlight ? 'bg-white text-blue-900 hover:bg-gray-200' : 'bg-blue-900 text-white hover:bg-blue-800'
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ServiceBox;