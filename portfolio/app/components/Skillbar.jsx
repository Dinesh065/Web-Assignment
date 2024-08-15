import React from "react";
import Image from "next/image";

const Skillbar = ({ margin_top, skillName, outer_w, margin_t, left, top, right, bottom, mr, ml }) => {
    return (
        <>
            <p className="text-black font-poppins text-[24px] font-semibold leading-normal tracking-[0.72px]" style={{ marginTop: margin_top, marginLeft: '33px' }}>{skillName}</p>
            <div className="flex-shrink-0 bg-[#FD6F00] border-r-[6px] border-black"
                style={{
                    width: outer_w,
                    height: '12px',
                    marginTop: margin_t,
                    marginLeft: '33px'
                }}
            >
                <div
                    className="absolute flex-shrink-0 fill-[#EDECEC] stroke-[#FD6F00] stroke-[3px] drop-shadow-[0px_4px_7px_rgba(0,0,0,0.2)]"
                    style={{
                        left: left,
                        top: top,
                        right: right,
                        bottom: bottom,
                        marginTop: '-32px',
                        marginRight: mr,
                        marginLeft: ml,
                    }}
                >
                    <Image
                        src="/images/circle.svg"
                        alt="circle"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </>
    )
}

export default Skillbar;