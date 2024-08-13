'use client'
import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Button from "./Button";

const Header = () => {

    const handleDownloadCV = () => {
        console.log("Download Button clicked");
    } 
    
    return (
        <div className="absolute flex w-[1420px] h-[67px] justify-center items-center flex-shrink-0 left-[250px] right-[250px] top-[61px] bottom-[5472px]">
            <Logo/>
            <NavLink href="/Home">Home</NavLink>
            <NavLink href="/About Me">About Me</NavLink>
            <NavLink href="/Services">Services</NavLink>
            <NavLink href="/Projects">Projects</NavLink>
            <NavLink href="/Testimonals">Testimonals</NavLink>
            <NavLink href="/Contact">Contact</NavLink>
            <Button onClick={handleDownloadCV}>Download CV</Button>
        </div>
    );
}

export default Header;