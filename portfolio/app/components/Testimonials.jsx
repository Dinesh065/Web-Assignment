import React from "react";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="absolute w-[1920px] h-[733px] flex-shrink-0 flex flex-col justify-center items-center top-[3700px] bottom-[1167px]">
            <h1 className="absolute text-[#000] font-poppins text-[65px] font-semibold leading-normal tracking-[1.95px] mt-[-668px] left-[733px] mr-[741px]">
                Testimonials
            </h1>
            <p className="absolute w-[932px] h-[101px] flex-shrink-0 text-[#000] text-center font-poppins text-[21px] font-normal leading-normal tracking-[0.63px] left-[490px] right-[498px] mt-[-450px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>

            <div className="flex flex-row items-center w-[1087px] h-[344px] flex-shrink-0 rounded-[14px] bg-[#F8F8F8]" style={{ marginTop: '100px', marginRight: '29px' }}>
                <div className="relative flex justify-center items-center w-[235px] h-[235px] ml-[48px]">
                    <div
                        className="absolute inset-0 rounded-full p-[8px]"
                        style={{
                            backgroundImage: "url('/images/UserImage3.svg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: 235,
                            height: 235,
                        }}
                    ></div>
                </div>

                <div className="ml-[30px]">
                    <p className="text-[#FD6F00] text-justify font-poppins text-[32px] font-bold leading-normal tracking-[0.64px]" style={{ marginBottom: '-26px', marginLeft: '-18px', marginTop: '-20px' }}>"</p>
                    <p className="w-[698px] h-[146px] flex-shrink-0 text-[#424242] text-justify font-poppins text-[21px] font-normal leading-normal tracking-[0.42px]">
                        Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                    </p>
                    <p className="text-[#FD6F00] text-justify font-poppins text-[32px] font-bold leading-normal tracking-[0.64px" style={{ marginTop: '-39px', marginLeft: '80px' }}>"</p>
                    <h2 className="text-[#000000] text-justify font-poppins text-[24px] font-medium leading-normal tracking-[0.48px]" style={{ marginTop: '-8px' }}>Name</h2>
                    <p className="text-[#000000] text-justify font-poppins text-[19px] font-normal leading-normal tracking-[0.38px]">CEO</p>
                </div>
            </div>

            <Image
                src="/images/dot.svg"
                alt="Scroll image"
                width={255}
                height={16}
                className="flex-shrink-0 mt-[87px]"
            />


        </div>
    )
}
export default Testimonials;