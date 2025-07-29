import "../../../../App.css";
import InputField from "../../../../components/module/project_component/OtpLoginComponents/InputField";
const loginImg = "../../../../public/assets/login.png";
const logo = "../../../../public/assets/MobifieLogo.svg";
import OTPField from "../../../../components/module/project_component/OtpLoginComponents/OTPField";
import { useState } from "react";

const OtpSignin = () => {
  // const {theme ,onThemeChange} = useTheme()
  const [showOtp, setShowOtp] = useState(false);
  const [apiRequestData, setApiRequestData] = useState({});
  return (
    <>
      <div className="flex justify-center items-center min-h-screen custom-container ">
        <div className="flex flex-col md:flex-row lg:h-[650px] w-11/12 md:w-7/12 lg:w-7/12 card shadow-card rounded-md overflow-hidden p-4">
          {/* Left side: Form */}

          <div className="flex flex-col  items-center justify-center  md:w-1/2  relative  ">
            <img src={logo} className="absolute top-0 left-0 w-[80px]" />
            <div className="w-full max-w-xs ">
              <h1 className="text-center text-3xl font-bold  mb-2">
                Log in to continue
              </h1>
              <p className="text-center text-sm mb-6 text-gray-500">
                Access your business dashboard and track performance in one
                place.
              </p>

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

          {/* Right side: Image / color */}
          <div className="relative hidden md:w-1/2 card md:flex justify-center items-center p-6 border-2 overflow-hidden rounded-md">
           

            {/* Main Content */}
            <div className="w-full relative z-10">
              <h1 className=" text-3xl mb-2">
                Effortlessly manage your team and operations
              </h1>
              <p className="text-xs mb-6">
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
