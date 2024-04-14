import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full items-center  grid grid-cols-3 hover:cursor-pointer  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 px-10">
        <ProjectCard
          src="/projects/tranzbook.png"
          title="Tranzbook"
          description="Transportation services in Ghana"  
          link="https://tranzbook.vercel.app/"
          />
          <ProjectCard
          src="/projects/acer.png"
          title="Acer Landing Page"
          description="Transportation services in Ghana"
          link="https://pascalseth.github.io/acerlanding/#"        />
    
        <ProjectCard
          src="/projects/grandcanyon.png"
          title="Grand Canyon Landing Page"
          description="Grand Canyon Landing "
          link="https://pascalseth.github.io/grandcanyon/"
        />
         <ProjectCard
          src="/projects/travelAgent.png"
          title=" Travel Landing Page"
          description="Travel Agent Landing Page"
          link="https://landing-pg-three.vercel.app/"
        />

          <ProjectCard
          src="/projects/admin.png"
          title="Admin Dashboard"
          description="Admin Dashboard Landing Page"
          link="https://myclean-admin-dep.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
