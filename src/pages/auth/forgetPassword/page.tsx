import "../../../App.css";
import { Link } from "react-router-dom";
// import InputField from "../../../../components/module/project_component/OtpLoginComponents/InputField";
const loginImg = "../../../../public/assets/login.png";
const logo = "../../../../public/assets/MobifieLogo.svg";
// import OTPField from "../../../../components/module/project_component/OtpLoginComponents/OTPField";
import ForgetPass from "../../../../src/utils/api/ForgetPassword";
// import Toast from "../../../components/common_component/Toast";
// import Toast from "../../../components/common_component/Toast";

import { useloader } from "../../../context/loader_context/LoaderContext";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { setLoader } = useloader();
  // const nevigate = useNavigate();
  // const nevigate = useNavigate();
  // const [showToast, setShowToast] = useState(false);

  const [apiResponse, setApiResponse] = useState();
  // const [showNum, setShowNum] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
  });
  // const [submitting, setSubmitting] = useState(false);
  // const [disable, setDisable] = useState(false);
  // const [disable, setDisable] = useState(false);

  const [touched, setTouched] = useState({
    email: false,
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const [apiError, setApiError] = useState("");
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email": {
        if (!value.trim()) return "Email is required";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Invalid email address";
        }
        return "";
      }

      default:
        return "";
    }
  };

  // useEffect(() => {
  //   if (apiResponse) {
  //     setShowToast(true);
  //     console.log("hrthr");
  //     setTimeout(() => {
  //       nevigate("/login-with-password");
  //     }, 2000);
  //   }
  // }, [apiResponse]);

  const validate = () => {
    let valid = false; // initially assume invalid
    const newErrors: { [key: string]: string } = {};

    Object.keys(formData).forEach((key) => {
      if (key in errors) {
        const value = formData[key as keyof typeof formData];
        const err = validateField(key, value);
        newErrors[key] = err;

        // If the field is non-empty and has no error → set valid to true
        if (value && !err) {
          valid = true;
        }
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
    setTouched((prev) => {
      const allTouched = { ...prev };
      Object.keys(errors).forEach((k) => {
        allTouched[k as keyof typeof allTouched] = true;
      });
      return allTouched;
    });

    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === " ") {
      e.preventDefault();
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (touched[name as keyof typeof touched]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoader(true);
    e.preventDefault();

    console.log(formData);
    if (validate()) {
      ForgetPass(formData, setApiResponse, setApiError, setLoader);
      // setDisable(true);
      // setDisable(true);
    }
  };

  return (
    <>
      <div className="w-1/4">
        {/* <Navbar theme={theme} onThemeChange={onThemeChange} /> */}
        <div className="flex justify-center   min-h-screen    ">
          {/* <div
          className={`flex flex-col md:flex-row lg:h-[650px] w-11/12 md:w-7/12 lg:w-7/12 shadow-muted rounded-md overflow-hidden p-4 card`}
        > */}
          {/* Left side: Form */}

          <div className="flex    justify-center    ">
            <img src={logo} className="absolute top-0 left-0 w-[80px]" />
            {!apiResponse ? (
              <>
                {" "}
                <div className="w-full max-w-xs mt-[14rem] ">
                  <h1 className="text-center text-3xl font-bold  mb-2">
                    Forget Password
                  </h1>
                  <p className="text-center text-sm mb-6 text-gray-500">
                    Enter your email to receive reset instructions
                  </p>

                  <form
                    className="space-y-5  w-[320px]"
                    onSubmit={handleSubmit}
                  >
                    <div className="error-wrapper">
                      {/* <label className="text-sm">Email</label> */}
                      <div className="flex items-center border-gray-300 border-2 rounded-md mt-1 bg-white">
                        <span className="px-2 text-gray-500">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          // value={formData.email}
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full p-2 outline-none text-black"
                          onKeyDown={(e) => {
                            const allowedControlKeys = [
                              "Backspace",
                              "Delete",
                              "ArrowLeft",
                              "ArrowRight",
                              "Tab",
                            ];

                            const allowedEmailChars = /^[a-zA-Z0-9@._%+-]$/;

                            if (
                              !allowedEmailChars.test(e.key) &&
                              !allowedControlKeys.includes(e.key)
                            ) {
                              e.preventDefault(); // Block any character not allowed in an email
                            }
                          }}
                        />
                      </div>
                      {touched.email && errors.email && (
                        <div className="text-red-500 text-xs mt-0 mb-5  error-tooltip ">
                          {" "}
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        type="submit"
                        // onClick={() => }
                        className="w-full  mt-2   theme-button  rounded-md  transition disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                      >
                        Submit
                      </button>

                      <p className="text-red-500 mt-3 text-center">
                        {" "}
                        {apiError}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="pr-1 ">I know my Password?</p>
                      <Link
                        to="/login-with-password"
                        className="flex items-center text-sm primary-text-color cursor-pointer "
                      >
                        LogIn{" "}
                      </Link>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className=" w-11/12 px-4 mt-[-30px] text-center flex flex-col items-center">
                {" "}
                <h1 className="text-center text-[#32cd32] text-4xl    mb-2">
                  Password has been sent to your Email !
                </h1>
                <Link
                  to="/login-with-password"
                  className="flex items-center text-xl text-center primary-text-color cursor-pointer mt-3"
                >
                  Back to LogIn{" "}
                </Link>
              </div>
            )}
          </div>

          {/* Right side: Image / color */}
          {/* <div className="relative hidden md:w-1/2 card md:flex justify-center items-center p-6 border-2 overflow-hidden rounded-md">
           
            <div className="absolute -top-75 -left-100 w-60 h-60 bg-green-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-lime-400 rounded-full opacity-20 blur-xl rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#79B93C] rounded-full opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

          
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
