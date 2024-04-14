import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://github.com/PascalSeth" className="text-[15px] ml-[6px]">Github</a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <a href="https://www.instagram.com/pascal_.seth/" className="text-[15px] ml-[6px]">Instagram</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://twitter.com/pascal_seth" className="text-[15px] ml-[6px]">Twitter</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <a href="https://www.linkedin.com/in/pascal-seth-955331254/?lipi=urn%3Ali%3Apage%3Anotifications_index_index%3Bbf9b458c-6583-4501-ae08-f51184cf680d" className="text-[15px] ml-[6px]">Linkedin</a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">pascalelikem@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Pascalseth Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer