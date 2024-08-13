import React from "react";
import Button from "./Button";
import Image from "next/image";

const Mumair = () => {
    return (
        <div className="relative flex flex-row w-[1400px] h-[686.475px] flex-shrink:0 left-[250px] right-[270px] top-[248px] bottom-[4665.52] bg-[#ef3535]">
            <div>
                <div className="w-[714px] h-[292px] flex-shrink: 0 mt-[97px]">
                    <p className="text-black font-semibold text-[24px] leading-normal tracking-[0.72px] font-poppins ml-[7px]">Hi I am</p>
                    <p className="text-[#FD6F00] font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px] ml-[4px]">Muhammad Umair</p>
                    <h1 className="text-black font-poppins text-[100px] font-bold leading-[120px] tracking-[3px]">UI & UX</h1>
                    <h1 className="text-black font-poppins text-[100px] font-bold leading-[120px] tracking-[3px] ml-[230px]">Designer</h1>
                </div>
                <p className="w-[698px] h-[101px] flex-shrink-0 text-[#000] text-[21px] font-poppins font-normal leading-normal tracking-[0.63px] text-justify mt-[28px] ml-[7px]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className="w-[188px] h-[52px] flex-shrink-0 rounded-[5px] bg-[#FD6F00] text-white font-semibold mt-[22px] ml-[7px]">Hire Me</button>
            </div>
            <Image
                src="/images/UserImage.png"
                alt="User image"
                width={538}
                height={617.24}
                className="flex-shrink-0 ml-[148px]" />
            <Image
                src="/images/Facebook.svg"
                alt="Facebook image"
                width={32.475}
                height={32.475}
                flex-shrink={0}
                className="mr-[23.03px]"
            />
            <Image
                src="/images/Twitter.svg"
                alt="Twitter image"
                width={32.475}
                height={32.475}
                flex-shrink={0}
                className="mr-[23.03px]"
            />
            <Image
                src="/images/Instagram.svg"
                alt="Instagram image"
                width={32.475}
                height={32.475}
                flex-shrink={0}
                className="absolute mr-[23.03px] top-[902px] left-[1268px] right-[619.52] bottom-[4665.52px]"
            />
            <Image
                src="/images/LinkedIn.svg"
                alt="LinkedIn image"
                width={32.475}
                height={32.475}
                flex-shrink={0}
            />
        </div>
    )
}

export default Mumair;

// bg-[url('/images/UserImage.png')] bg-lightgray bg-center bg-cover bg-no-repeat