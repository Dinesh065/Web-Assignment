import React from "react";

const UserProfileImage_2 = () => {
    return (
        <div className="relative flex justify-center items-center w-[680.765px] h-[693.122px]">
            <div
                className="w-[545.812px] h-[545.812px] mt-[118px] rounded-full overflow-visible bg-center bg-cover bg-no-repeat "
                style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FF8233 100%)',
                }}
            >
                <div
                    className="absolute inset-0 rounded-full p-[8px]"
                    style={{
                        backgroundImage: "url('/images/UserImage2.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: 545.812,
                        height: 545.812,
                        marginTop: 128,
                        marginLeft: 67,
                        marginRight: 67.4,
                        marginBottom: 18.12,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default UserProfileImage_2;