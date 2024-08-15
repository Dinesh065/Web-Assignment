import React from "react";
import Image from "next/image";
import UserProfileImage_2 from "./UserProfileImage_2";
import AboutSection from "./AboutSection";

const About = () => {
    return (
        <div className="absolute flex flex-row w-[1470px] h-[675px] flex-shrink-0 top-[1004px] left-[200px] right[250px] bottom-[3921px]">
            <UserProfileImage_2/>
            <AboutSection/>
        </div>
    )
}

export default About;