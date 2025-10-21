import { ArrowUpRight } from "lucide-react";

interface NewsCardProps {
  author: string;
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

function NewsCard({
  author,
  title,
  description,
  date,
  image,
  link,
}: NewsCardProps) {
  return (
    <div className="group relative bg-white overflow-hidden transition-all duration-500 ease-out hover:scale-105 cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="px-2">
        <p className="text-sm text-gray-500 mb-3">By {author}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">{description}</p>
        <p className="text-sm text-gray-400 mb-4">{date}</p>

        {/* Read More Section */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-medium group"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-700">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              Learn more
            </span>
          </a>
        ) : (
          <div className="flex items-center gap-2 text-blue-600 font-medium">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-700">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              Learn more
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
