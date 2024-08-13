import React from "react";
import Link from "next/link";

const NavLink = ({href, children}) => {
    return (
        <Link className="text-black flex items-start gap-[10px] p-[10px_14px] text-[21px] font-normal leading-normal tracking-[0.63px] font-poppins ml-[17px]" href={href}>
            {children}
        </Link>
    )
}

export default NavLink;