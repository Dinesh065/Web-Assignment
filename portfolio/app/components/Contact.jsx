import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="absolute flex flex-col w-[1925px] h-[552px] justify-center items-center flex-shrink-0 left-[-5px] right-[0px] top-[5098px] bottom-[0px] mt-[-200px]">
            <div className="ml-[140px]">
                <Logo />
            </div>
            <div className="flex flex-row mt-[69px]">
                <NavLink href="/Home">Home</NavLink>
                <NavLink href="/About Me">About Me</NavLink>
                <NavLink href="/Services">Services</NavLink>
                <NavLink href="/Projects">Projects</NavLink>
                <NavLink href="/Testimonals">Testimonals</NavLink>
                <NavLink href="/Contact">Contact</NavLink>
            </div>
            <div className="mt-[80.52px] ml-[190px]">
                <SocialLinks />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact;