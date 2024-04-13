import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] sticky left-0 right-0 top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#00000021] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/profile.png"
            alt="logo"
            width={80}
            height={80}
            className="cursor-pointer w-12 h-12 rounded-full hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Pascal Seth
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between max-lg:hidden md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row  gap-5">
            <a target="_blank" href="https://www.instagram.com/pascal_.seth/">
            <Image
              src="/instagram.svg"
              alt=""
              width={30}
              height={30}
            /></a>
              <a target="_blank" href="https://web.facebook.com/Pascalelikemadotse">
            <Image
              src="/facebook.svg"
              alt=""
              width={30}
              height={30}
            /></a>
             <a target="_blank" href="https://www.linkedin.com/in/pascal-seth-955331254/?lipi=urn%3Ali%3Apage%3Anotifications_index_index%3Bbf9b458c-6583-4501-ae08-f51184cf680d">
            <Image
              src="/linkedin.png"
              alt=""
              width={30}
              height={30}
            /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
