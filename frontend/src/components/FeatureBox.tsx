import React from 'react';

interface FeatureBoxProps {
  title: string;
  features: string[];
  image?: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, features, image }) => {
  return (
    <div className="bg-black bg-opacity-70 p-6 rounded-lg border border-blue-900 mb-8" data-aos="fade-up">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {image && (
          <div className="md:w-1/3 w-full rounded-lg overflow-hidden shadow-md">
            <img 
              src={image} 
              alt={`${title} illustration`} 
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        )}
        <div className={`${image ? 'md:w-2/3' : 'w-full'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
