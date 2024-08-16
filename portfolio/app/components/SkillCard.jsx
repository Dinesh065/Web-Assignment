import React from "react";
import Image from "next/image";

const SkillCard = () => {
    return <>
        <div className="flex flex-row space-x-[31px] w-[1413px] h-[584px]">
            <div className=" mt-[-1820px] ml-[-249px] absolute top-[2056px] left-[250px] right-[1340px] bottom-[3198px] flex flex-col w-[330px] h-[346px] flex-shrink-0">
                <Image
                    src="/images/UIUXImg.svg"
                    alt="UI UX"
                    width={70.003}
                    height={70.004}
                    className="flex-shrink-0 fill-[#FD6F00] stroke-w-[0.5px] stroke-[#FD6F00] mt-[57px] ml-[18px]"
                />
                <h2 className="text-black text-center font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px] mt-[26px]" style={{ marginLeft: '-200px' }}>UI/UX</h2>
                <p className="w-[290px] h-[120px] flex-shrink-0 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px] mt-[26px] ml-[18px]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>

            <div className="absolute top-[2056px] left-[611px] right-[979px] bottom-[3198px] flex flex-col w-[330px] h-[346px] flex-shrink-0" style={{ marginTop: '-1820px', marginLeft: '-245px' }}>
                <Image
                    src="/images/WebDesignImg.svg"
                    alt="Web Design"
                    width={72}
                    height={82}
                    className="flex-shrink-0 fill-[#FD6F00] stroke-w-[0.5px] stroke-[#FD6F00] mt-[57px] ml-[18px]"
                />
                <h2 className="text-black text-center font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px] mt-[26px" style={{ marginLeft: '-110px', marginTop: '13px' }}>Web Design</h2>
                <p className="w-[290px] h-[120px] flex-shrink-0 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px] mt-[26px] ml-[18px]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>

            <div className=" absolute top-[2056px] left-[972px] right-[618px] bottom-[3198px] flex flex-col w-[330px] h-[346px] flex-shrink-0" style={{ marginTop: '-1820px', marginLeft: '-235px' }}>
                <Image
                    src="/images/AppDesignImg.svg"
                    alt="App Design"
                    width={47}
                    height={82.467}
                    className="flex-shrink-0 fill-[#FD6F00] stroke-w-[0.5px] stroke-[#FD6F00] mt-[57px] ml-[18px]"
                />
                <h2 className="text-black text-center font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px] mt-[26px]" style={{ marginLeft: '-115px', marginTop: '13px' }}>App Design</h2>
                <p className="w-[290px] h-[120px] flex-shrink-0 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px] mt-[26px] ml-[18px]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>

            <div className="absolute top-[2056px] left-[1333px] right-[257px] bottom-[3198px] flex flex-col w-[330px] h-[346px] flex-shrink-0" style={{ marginTop: '-1820px', marginLeft: '-250px' }}>
                <Image
                    src="/images/GraphicDesignImg.svg"
                    alt="GraphicDesign"
                    width={82.001}
                    height={70.002}
                    className="flex-shrink-0 fill-[#FD6F00] stroke-w-[0.5px] stroke-[#FD6F00] mt-[57px] ml-[18px]"
                />
                <h2 className="text-black text-center font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px] mt-[26px]" style={{ marginLeft: '-60px' }}>Graphic Design</h2>
                <p className="w-[290px] h-[120px] flex-shrink-0 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px] mt-[26px] ml-[18px]">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>
        </div>

    </>
}

export default SkillCard;