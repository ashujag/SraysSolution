import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ServiceCard = ({ title, image, description }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg leading-tight">
          {title}
        </h3>
      </div>

      <div className="p-5">
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-black-600 font-semibold text-sm hover:text-red-700 transition-colors duration-300 group/button"
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover/button:-translate-y-0.5" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-y-0.5" />
          )}
        </button>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 rounded-xl transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
