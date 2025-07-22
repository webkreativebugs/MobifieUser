import "../../../../App.css";
import { useTheme } from "../../../../context/AppContext";
import Navbar from "../../../../components/common_component/Navbar";
import InputField from "../../../../components/module/project_component/OtpLoginComponents/InputField";
const loginImg = "../../../../public/assets/login.png";
const logo = "../../../../public/assets/MobifieLogo.svg";
import OTPField from "../../../../components/module/project_component/OtpLoginComponents/OTPField";
import { useState } from "react";

const OtpSignin = () => {
  const { theme, onThemeChange } = useTheme();
  const [showOtp, setShowOtp] = useState(false);
  return (
    <>
      <Navbar theme={theme} onThemeChange={onThemeChange} />
      <div className="flex justify-center items-center min-h-screen app-container">
        <div className="flex flex-col md:flex-row lg:h-[650px] w-11/12 md:w-7/12 lg:w-7/12 shadow-lg rounded-md overflow-hidden p-4">
          {/* Left side: Form */}

          <div className="flex flex-col  items-center justify-center  md:w-1/2  relative  ">
            <img src={logo} className="absolute top-0 left-0 w-[80px]" />
            <div className="w-full max-w-xs ">
              <h1 className="text-center text-3xl font-semibold mb-2">
                Welcome Back
              </h1>
              {showOtp ? <OTPField /> : <InputField setShowOtp={setShowOtp} />}
            </div>
          </div>

          {/* Right side: Image / color */}
          <div className="relative hidden md:w-1/2 card md:flex justify-center items-center p-6 border-2 overflow-hidden rounded-md">
            {/* Background Shapes */}
            <div className="absolute -top-75 -left-100 w-60 h-60 bg-green-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-lime-400 rounded-full opacity-20 blur-xl rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#79B93C] rounded-full opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

            {/* Main Content */}
            <div className="w-full relative z-10">
              <h1 className="text-white text-3xl mb-2">
                Effortlessly manage your team and operations
              </h1>
              <p className="text-white text-xs mb-6">
                Login to access your dashboard and manage your team
              </p>
              <div className="max-h-[300px] flex justify-center">
                <img src={loginImg} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpSignin;
