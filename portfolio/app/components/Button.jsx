import React from "react";

const Button = ({ children, onClick }) => {
    return (
        <button
            className="w-[188px] h-[52px] flex-shrink-0 rounded-[5px] bg-[#FD6F00] text-white font-semibold"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;