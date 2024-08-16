import React from "react";
import ConnectButton from "./ConnectButton";

const ConnectTogether = () => {
    return (
        <div className="absolute w-[932px] h-[337px] flex flex-col justify-center items-center gap-[48px] flex-shrink-0 left-[535px] right-[453px] top-[4572px] mt-[-30px]">
            <h2 className="w-[724px] text-[#000] text-center font-poppins text-[65px] font-semibold leading-normal tracking-[1.95px] mt-[-281px]">
                Let's Design Together
            </h2>
            <p className="w-[932px] h-[101px] flex-shrink-0 text-[#000] text-center font-poppins text-[21px] font-normal leading-normal tracking-[0.63px] mt-[-30px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <div className="flex flex-row">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="text-[#797979] font-poppins text-[21px] font-normal leading-normal tracking-[0.63px] w-[627px] h-[75px] flex-shrink-0 rounded-[14px] border border-[#AFAFAF] bg-[#F8F8F8] px-[16px] py-[10px] ml-[25px]"
                />
                <ConnectButton/>
            </div>
        </div>
    )
}

export default ConnectTogether;
