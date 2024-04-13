import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-270  absolute top-[-360px] opacity-10 h-screen w-full left-0 z-[1] object-cover "
      >
        <source src="/starlights.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
