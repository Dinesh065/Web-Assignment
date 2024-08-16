import React from "react";

const ProjectButtons = ({ width, height, text_color,bg, content }) => {
    return (
        <div
            className="text-center font-poppins text-[24px] font-normal leading-none tracking-[0.72px] inline-flex items-start rounded-[12px] border-[0.4px] border-[#545454]"
            style={{
                width: width,
                height: height,
                color: text_color,
                padding: '10px 20px',
                gap: '10px',
                backgroundColor: bg,
            }}
        >
            {content}
        </div>
    );
};

export default ProjectButtons;
