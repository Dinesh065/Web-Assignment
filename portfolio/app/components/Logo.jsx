import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
    <div className="inline-flex pr-[2px] justify-center items-center gap-[20px] mr-[138px]">
        <Image
            src="/images/Subtract.svg"
            alt="subtract img"
            width={67}
            height={67}
        />
        <Link className="flex flex-row" href="/Mumair">
            <p className="text-[48px] font-bold leading-normal font-montserrat text-[var(--charcole-black,#1E1E1E)]">M</p>
            <p className="text-[48px] font-normal leading-normal font-montserrat text-[var(--light-black,#545454)]">umair</p>
        </Link>
    </div>
);

export default Logo;
