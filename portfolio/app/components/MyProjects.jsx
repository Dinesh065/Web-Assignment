import React from "react";
import ProjectButtons from "./ProjectButtons";
import ProjectCards from "./ProjectCards";

const MyProjects = () => {
    return (
        <div className="absolute left-[250px] flex-col right-[247px] top-[2541px] bottom-[2039px] flex w-[1423px] h-[1020px] flex-shrink-0">
            <h1 className="text-[#1E1E1E] font-poppins text-[65px] font-semibold leading-normal tracking-wide ml-[510px]">My Projects</h1>
            <p className="mt-[22px] ml-[249px] mr-[253px] w-[921px] h-[78px] flex-shrink-0 text-[#000] text-center font-poppins text-[21px] font-normal leading-normal tracking-wide">Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>

            <div className="flex flex-row gap-[17px] ml-[234px] mt-[59px]">
                <ProjectButtons width="70px" height="56px" text_color="#000" bg="#FFFFFF" content="All" />
                <ProjectButtons width="108px" height="56px" text_color="#000" bg="#FFFFFF" content="UI/UX" />
                <ProjectButtons width="190px" height="56px" text_color="#FFFFFF" bg="#FD6F00" content="Web Design" />
                <ProjectButtons width="184px" height="56px" text_color="#000" bg="#FFFFFF" content="App Design" />
                <ProjectButtons width="234px" height="56px" text_color="#000" bg="#FFFFFF" content="Graphic Design" />
            </div>

            <div className="flex flex-row gap-[44px] mt-[106px]">
                <ProjectCards src="/images/ALP1.png" alt="ALP" width="274px" src2="/images/ALP2.png" alt2="ALP" width2="274" design="AirCalling Landing Page Design"/>
                <ProjectCards src="/images/BLP1.png" alt="BLP" width="274px" src2="/images/BLP2.png" alt2="BLP" width2="274" design="Business Landing Page Design"/>
                <ProjectCards src="/images/EWP1.png" alt="EWP" width="274px" src2="/images/EWP2.png" alt2="EWP" width2="274" design="Ecom Web Page Design"/>
            </div>
        </div>
    )
}

export default MyProjects;