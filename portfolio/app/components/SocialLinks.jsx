import React from "react";
import Image from "next/image";

const SocialLinks = () => {
    return (
        <div className="lower-section flex flex-row justify-end mr-[177px] mt-[15px]">
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
                className="mr-[23.03px]"
            />
            <Image
                src="/images/LinkedIn.svg"
                alt="LinkedIn image"
                width={32.475}
                height={32.475}
                flex-shrink={0}
            />
        </div>
    );
}

export default SocialLinks;