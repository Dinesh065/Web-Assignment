import React from "react";
import Skillbar from "./Skillbar";

const AboutSection = () => {
    return (
        <div className="content-container">
            <h2 className="text-black font-poppins text-[65px] font-semibold leading-none tracking-[1.95px] ml-[33px] mt-[55px]">About Me</h2>
            <p className="w-[756px] h-[101px] flex-shrink-0 text-black font-poppins text-[21px] font-normal leading-normal tracking-[0.63px] ml-[33px] mt-[15px]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

            <Skillbar
                margin_top="15px"
                skillName="UX"
                outer_w="687px"
                margin_t="18px"
                left="1383px"
                top="328px"
                right="55px"
                bottom="315px"
                mr="0px"
                ml="0px"
            />
            <Skillbar 
                margin_top="16px" 
                skillName="Website Design" 
                outer_w="657px" 
                margin_t="25px" 
                left="1351px" 
                top="419px" 
                right="87px" 
                bottom="229px" 
                mr="0px" 
                ml="0px" 
            />
            <Skillbar 
                margin_top="25px" 
                skillName="App Design" 
                outer_w="721px" 
                margin_t="18px" 
                left="1415px" 
                top="510px" 
                right="23px" 
                bottom="133px" 
                mr="-100px" 
                ml="1px" 
            />
            <Skillbar 
                margin_top="25px" 
                skillName="Graphic Design" 
                outer_w="687px" 
                margin_t="18px" 
                left="1383px" 
                top="601px" 
                right="55px" 
                bottom="42px" 
                mr="0px" 
                ml="0px" 
            />
        </div>
    )
}

export default AboutSection;