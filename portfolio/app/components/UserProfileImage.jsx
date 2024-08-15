import React from "react";

const UserProfileImage = () => {
    return (
        <div className="relative flex justify-center items-center w-[538px] h-[617.24px] mt-[18.5px] mr-[36.49px] ml-[148px]">
        <div
            className="w-[485.868px] h-[485.868px] mt-[110px] ml-[16px] rounded-full overflow-visible bg-center bg-cover bg-no-repeat "
            style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FF8233 100%)',
            }}
        >
            <div
                className="absolute inset-0 rounded-full p-[8px]"
                style={{
                    backgroundImage: "url('/images/UserImage.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: 485.868,
                    height: 485.868,
                    marginTop: 115.37,
                    marginLeft: 14.64,
                    marginRight: 36.49,
                }}
            ></div>
        </div>
    </div>
    )
}
export default UserProfileImage;