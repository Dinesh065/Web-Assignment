import React from "react";
import Image from "next/image";

const ProjectCards = ({ src, alt, width, src2, alt2, width2, design }) => {
    return (
        <div className="flex flex-col">
            <div className="relative w-[445px] h-[489px] flex-shrink-0 rounded-[12px] bg-[#FFEBDB] overflow-hidden">
                <div className="absolute top-0 left-[105px] z-20">
                    <Image
                        src={src}
                        alt={alt}
                        width={parseInt(width)}
                        height={489} 
                    />
                </div>
                <div className="absolute top-[100px] left-[39px] z-10">
                    <Image
                        src={src2}
                        alt={alt2}
                        width={parseInt(width2)}
                        height={400}  
                    />
                </div>
            </div>
            <div className="mt-[37px]">
                <h2 className="text-[#FD6F00] font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
                    Web Design
                </h2>
                <p className="text-[#000000] font-poppins text-[24px] font-bold leading-normal tracking-[0.72px] mt-[10px]">
                    {design}
                </p>
            </div>
        </div>
    );
};

export default ProjectCards;
