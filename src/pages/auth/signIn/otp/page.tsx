import "../../../../App.css";
import InputField from "../../../../components/module/project_component/OtpLoginComponents/InputField";
// const loginImg = "../../../../public/assets/login.png";
const logo = "../../../../public/assets/MobifieLogo.svg";
import OTPField from "../../../../components/module/project_component/OtpLoginComponents/OTPField";
import { useState } from "react";

const OtpSignin = () => {
  // const {theme ,onThemeChange} = useTheme()
  const [showOtp, setShowOtp] = useState(false);
  const [apiRequestData, setApiRequestData] = useState({});
  return (
    <>
      <div className="w-1/4 flex justify-center min-h-screen mt-[16rem] px-4 sm:px-8 bg-white">
        {/* Logo top-left */}
        <img
          src={logo}
          alt="Logo"
          className="absolute top-4 left-4 w-[60px] sm:w-[80px]"
        />

        {/* Login form wrapper */}
        <div className="w-full max-w-sm ">
          <h1 className="text-center text-2xl sm:text-3xl font-bold  mb-2">
            Log in to continue
          </h1>
          <p className="text-center text-sm mb-6 text-gray-500 px-2 sm:px-0">
            Access your business dashboard and track performance in one place.
          </p>

          {/* Conditional render for form fields */}
          {showOtp ? (
            <OTPField apiRequestData={apiRequestData} />
          ) : (
            <InputField
              setShowOtp={setShowOtp}
              setApiRequestData={setApiRequestData}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OtpSignin;
