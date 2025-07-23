import "../../../../src/app.css";
import { Link } from "react-router-dom";
// import InputField from "../../../../components/module/project_component/OtpLoginComponents/InputField";
const loginImg = "../../../../public/assets/login.png";
const logo = "../../../../public/assets/MobifieLogo.svg";
// import OTPField from "../../../../components/module/project_component/OtpLoginComponents/OTPField";
import { useState } from "react";

const ForgotPassword = () => {
  const [apiResponse, setApiResponse] = useState();
  const [showNum, setShowNum] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [disable, setDisable] = useState(false);

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
    e.preventDefault();

    // const parameter =showNum?formData.mobile:formData.email
    if (validate()) console.log(formData);

    setSubmitting(true);
    setDisable(true);
    // {
    //   showNum
    //     ? globalOtp(
    //         setApiResponse,
    //         { mobile: formData.mobile, country_code: formData.country_code },
    //         setSubmitting
    //       )
    //     : globalOtp(setApiResponse, { email: formData.email }, setSubmitting);
    // }
  };

  // useEffect(() => {
  //   console.log(apiResponse);
  //   if (apiResponse) {
  //     setSubmitting(false);
  //     setShowOtp(true);
  //     showNum
  //       ? setApiRequestData({ mobile: formData.mobile })
  //       : setApiRequestData({ email: formData.email });
  //   }
  // }, [apiResponse]);

  // function handleFieldChange() {
  //   setShowNum(!showNum);
  // }

  // useEffect(() => {
  //   setFormData((prev) => ({ ...prev, mobile: "", email: "" }));
  //   setErrors((prev) => ({ ...prev, mobile: "", email: "" }));
  // }, [showNum]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="flex flex-col md:flex-row lg:h-[650px] w-11/12 md:w-7/12 lg:w-7/12 shadow-lg rounded-md overflow-hidden p-4">
          {/* Left side: Form */}

          <div className="flex flex-col  items-center justify-center  md:w-1/2  relative  ">
            <img src={logo} className="absolute top-0 left-0 w-[80px]" />
            <div className="w-full max-w-xs ">
              <h1 className="text-center text-3xl font-bold  mb-2">
                Forget Password
              </h1>
              <p className="text-center text-sm mb-6 text-gray-500">
                Enter your email to receive reset instructions
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
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
                    <div className="text-red-500 text-xs mt-0 mb-2 error-tooltip ">
                      {" "}
                      {errors.email}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  // onClick={() => }
                  className="w-full  mt-5 m-0  theme-button  rounded-md  transition disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
                <div className="flex justify-center items-center">
                  I know my Password?{" "}
                  <Link
                    to="/login-with-password"
                    className="flex items-center text-sm primary-text-color cursor-pointer "
                  >
                    SignIN{" "}
                  </Link>
                </div>
              </form>
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

export default ForgotPassword;

// "use client";

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../../components/common_component/Logo";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     try {
//       // TODO: Replace with your actual password reset API call
//       const response = await fetch("/api/reset-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setSuccess(true);
//       } else {
//         setError("Failed to send reset email. Please try again.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBackToLogin = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl transform transition-all hover:scale-[1.01]">
//         {/* Logo */}
//         <div className="text-center">
//           <Logo />
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">
//             Forget Password
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Enter your email to receive reset instructions
//           </p>
//         </div>

//         {success ? (
//           <div className="text-center space-y-4">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
//               <svg
//                 className="w-8 h-8 text-[#79B93C]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium text-gray-900">
//               Check your email
//             </h3>
//             <p className="text-sm text-gray-600">
//               We've sent password reset instructions to your email address.
//             </p>
//             <button
//               onClick={handleBackToLogin}
//               className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#79B93C] hover:bg-[#6aa533] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#79B93C] transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
//             >
//               Back to Login
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//             <div className="space-y-4">
//               {/* Email Input */}
//               <div className="group">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 group-focus-within:text-[#79B93C] transition-colors"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-1 relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#79B93C] focus:border-[#79B93C] transition-all duration-200 ease-in-out"
//                     placeholder="Enter your email"
//                   />
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                     <svg
//                       className="h-5 w-5 text-gray-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-100">
//                 {error}
//               </div>
//             )}

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#79B93C] hover:bg-[#6aa533] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#79B93C] transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
//               >
//                 {isLoading ? (
//                   <div className="flex items-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Sending...
//                   </div>
//                 ) : (
//                   "Send Reset Instructions"
//                 )}
//               </button>
//             </div>

//             {/* Back to Login Link */}
//             <div className="text-center">
//               <button
//                 type="button"
//                 onClick={handleBackToLogin}
//                 className="text-sm font-medium text-[#79B93C] hover:text-[#6aa533] focus:outline-none focus:underline transition-colors"
//               >
//                 Back to Login
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

//<form onSubmit={handleSubmit} className="mt-8 space-y-6">
//             <div className="space-y-4">
//               {/* Email Input */}
//               <div className="group">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 group-focus-within:text-[#79B93C] transition-colors"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-1 relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#79B93C] focus:border-[#79B93C] transition-all duration-200 ease-in-out"
//                     placeholder="Enter your email"
//                   />
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                     <svg
//                       className="h-5 w-5 text-gray-400"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-100">
//                 {error}
//               </div>
//             )}

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#79B93C] hover:bg-[#6aa533] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#79B93C] transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
//               >
//                 {isLoading ? (
//                   <div className="flex items-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Sending...
//                   </div>
//                 ) : (
//                   "Send Reset Instructions"
//                 )}
//               </button>
//             </div>

//             {/* Back to Login Link */}
//             <div className="text-center">
//               <button
//                 type="button"
//                 onClick={handleBackToLogin}
//                 className="text-sm font-medium text-[#79B93C] hover:text-[#6aa533] focus:outline-none focus:underline transition-colors"
//               >
//                 Back to Login
//               </button>
//             </div>
//           </form>
