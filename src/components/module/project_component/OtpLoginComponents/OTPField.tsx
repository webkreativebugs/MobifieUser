"use client";
import { useEffect, useState } from "react";
import ValidateOtp from "../../../../utils/api/ValidateOTP";
import { useauth } from "../../../../context/auth_context/AuthContext";
import ResendOtp from "../../../../utils/api/ResentOTP";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import Toast from "../../../common_component/Toast";
import { useNavigate } from "react-router-dom";
// import { customAuthorizationConfig } from "../../../../../network/FetchRequest";
const OTPField = ({apiRequestData}:any) => {
  const navigate = useNavigate()
  const {setLoader} = useloader()
  const length = 6;
  // Initial OTP state with empty strings (length of OTP)
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [showToast, setShowToast] = useState(false);
  const [otpData, setOtpData] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [Resntdisable, setResentDisable] = useState(true);
  const [error, setError] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [apiError,setApiError] = useState("")
  const { onRoleChange } = useauth();

  // Handle input change for each individual OTP block
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let value = e.target.value;

    // Only allow digits
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Optional: keep only the first digit if user pastes more than one digit
    if (value.length > 1) {
      value = value.charAt(0);
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpData(newOtp.join(""));

    // Move to next input field automatically if there's a value
    if (value && index < length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // Handle backspace to move to the previous input field
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
   
    if (otpData.length !== length) {
      setError("Please enter the complete OTP.");

      // setLoader(false)

      return;
    }

    try {
      setLoader(true)
       ValidateOtp({ otp: otpData }, setApiResponse,setLoader ,setApiError);
       
      // await getOtpToken({ 'otp': otpData }, handleOtpValidationResponse);
    } catch (error) {
      // setSubmitting(false);
      setLoader(false)
      setError("Error in submitting OTP.");
    }
  };
  useEffect(() => {
    if (timeLeft <= 0) {
      setResentDisable(false);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (apiResponse) {
      console.log(apiResponse);
      onRoleChange(apiResponse);
      navigate("/projects" , {replace:true})
    }
  }, [apiResponse]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="p-4 w-full max-w-[420px] rounded-[20px]">
        {/* <h5 className="mb-3 font-bold text-center">Enter OTP</h5> */}
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-5">
          <div className="flex justify-center gap-2 mb-3">
            {otp.map((val, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="tel"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                autoFocus={index === 0}
                className="w-12 h-12 text-center font-bold text-xl rounded-[10px] border text-black focus:outline-none"
              />
            ))}
          </div>

          {error && (
            <div className="text-red-600 py-1 text-center mb-2 text-sm">
              {error}
            </div>
          )}

          <button
         
            type="submit"
           className="w-full mt-1  p-2 theme-button  rounded-md  transition disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
            style={{ background: "var(--MONGO_COLOR)", border: "none" }}
          >
            { "Submit OTP"}
          </button>
        { apiError&&
                   <div className="flex justify-center items-center text-red-600 text-sm h-0 mt-4  ">
                    {apiError}
                   </div>
                }
        </form>
         
        <div className="mt-4">
         
          <div className="text-xs text-gray-500 text-center">
            {Resntdisable ? (
              <div className="flex justify-center items-center gap-1">
                <span>Resend OTP in:</span>
                <span className="font-bold">{timeLeft}s</span>
              </div>
            ) : (
              <button
               
                type="button"
                
                className=" underline transition-all "
                onClick={() =>{ ResendOtp(apiRequestData , setShowToast); setTimeLeft(30);setResentDisable(true)}}
                style={{ fontWeight: 400,color:"blue" }}
              >
                Resend OTP
              </button>
            )}
            <Toast
            msg={"OTP sent sucessfully"}
            show ={showToast}
            onClose={()=>setShowToast(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPField;
