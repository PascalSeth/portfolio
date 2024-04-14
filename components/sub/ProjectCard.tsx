import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string; // Optional prop for the external link
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const renderContent = () => {
    return (
      <div className="relative z-40 h-full  overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1  className="text-transparent text-2xl max-lg:text-base font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    );
  };

  // If a link is provided, render the ProjectCard inside an anchor tag
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {renderContent()}
      </a>
    );
  }

  // If no link is provided, simply render the ProjectCard content
  return renderContent();
};

export default ProjectCard;
