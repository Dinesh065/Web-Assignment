import React from "react";
import SkillCard from "./SkillCard";

const Services = () => {
    return (
        <div className="absolute flex w-[1413px] h-[584px] justify-center items-center flex-shrink-0 left-[250px] right-[257px] top-[1818px] bottom-[3198px]">
            <h1 className="absolute text-black text-center font-poppins text-[65px] font-semibold leading-normal tracking-[1.95px] mb-[500px]">
                Services
            </h1>
            <p className="w-[932px] h-[101px] flex-shrink-0 text-black text-center font-poppins text-[21px] font-normal leading-normal tracking-[0.63px] mt-[-185px] mb-[100px] ml-[243px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <SkillCard />
        </div>
    )
}

export default Services;