import React from "react";
import SocialLinks from "./SocialLinks";
import Mumair_Header from "./Mumair_Header";
import UserProfileImage from "./UserProfileImage";

const Mumair = () => {
    return (
        <div className="relative w-[1400px] h-[686.475px] flex-shrink:0 left-[250px] right-[270px] top-[248px] bottom-[4665.52] bg-[#fff]">
            <div className="upper-section flex flex-row">
                <Mumair_Header/>
                <UserProfileImage/>
            </div>
                <SocialLinks/>
        </div>
    )
}

export default Mumair;