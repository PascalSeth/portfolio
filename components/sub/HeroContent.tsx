"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row max-lg:flex-col items-center justify-center px-10 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl max-lg:text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r max-lg:text-4xl from-purple-500 to-cyan-500">
              {" "}
              the most efficient{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
        
As a seasoned Full Stack Software Engineer, I bring a wealth of experience in crafting innovative solutions across diverse domains encompassing Website, Mobile, and Software development. With proficiency in cutting-edge technologies such as React, Next.js, Firebase, Node.js, and Redux, I've successfully delivered robust and scalable applications that meet the dynamic needs of modern businesses. My passion for creating seamless user experiences is reflected in my portfolio of projects, showcasing my expertise in leveraging these technologies to drive tangible results. Explore my projects and skills to witness firsthand the quality and depth of my work in the realm of software engineering.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center flex-col items-center p-5 overflow-hidden"
      >
        <Image
          src="/mainIcons.svg"
          alt="work icons"
          height={650}
          className="w-full h-full"
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
