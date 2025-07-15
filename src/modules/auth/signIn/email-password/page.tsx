"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../App.css";
import { useTheme } from "../../../../context/AppContext";
import Navbar from "../../../../common/components/Navbar";
const loginImg = "../../../../public/assets/login.png";
const logo = "../../../../public/assets/MobifieLogo.svg";

const EmailPasswordSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [disable, setDisable] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { onThemeChange } = useTheme();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email": {
        if (!value.trim()) return "Email is required";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Invalid email address";
        }
        return "";
      }

      case "password": {
        if (!value.trim()) return "Password is required";
        if (value.length < 8)
          return "Password must be at least 8 characters long";
        if (!/[A-Z]/.test(value))
          return "Password must include at least one uppercase letter";
        if (!/[a-z]/.test(value))
          return "Password must include at least one lowercase letter";
        if (!/[0-9]/.test(value))
          return "Password must include at least one number";
        if (!/[!@#$%^&*]/.test(value))
          return "Password must include at least one special character (!@#$%^&*)";
        if (!/^[^\s]+$/.test(value)) return "There will be no gap in password";
        return "";
      }

      default:
        return "";
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      if (key in errors) {
        const err = validateField(key, formData[key as keyof typeof formData]);
        newErrors[key] = err;
        if (err) valid = false;
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
        if (value=== ' ') {
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

    console.log(formData);
    if (validate()) {
      setSubmitting(true);
    }
  };

  // setIsLoading(true);

  // try {
  //   const response = await fetch('/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   if (response.ok) {
  //     navigate('/');
  //   } else {
  //     setError('Invalid email or password');
  //   }
  // } catch (err) {
  //   setError('An error occurred. Please try again.');
  // } finally {
  //   setIsLoading(false);
  // }

  useEffect(() => {
    if (timeLeft <= 0) {
      setDisable(false);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      <Navbar onThemeChange={onThemeChange} />
      <div className="flex justify-center items-center min-h-screen app-container">
        <div className="flex flex-col md:flex-row lg:h-[650px] w-11/12 md:w-7/12 lg:w-7/12 shadow-lg rounded-md overflow-hidden p-4">
          {/* Left side: Form */}

          <div className="flex flex-col  items-center justify-center  md:w-1/2  relative  ">
            <img src={logo} className="absolute top-0 left-0 w-[80px]" />
            <div className="w-full max-w-xs ">
              <h1 className="text-center text-3xl font-semibold mb-2">
                Welcome Back
              </h1>
              <p className="text-center text-sm mb-6 text-gray-500">
                Enter your email and password to access your account
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="error-wrapper">
                  <label className="text-sm">Email</label>
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
                          d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.804 5.879 2.137M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full p-2 outline-none text-black"
                      name="email"
                    />
                  </div>
                  {touched.email && errors.email && (
                    <div className="text-danger small mt-0 error-tooltip ">
                      {" "}
                      {errors.email}
                    </div>
                  )}
                </div>
                {!showOtp && (
                  <div className="error-wrapper">
                    <label className="text-sm">Password</label>
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
                            d="M12 11c0-1.104-.895-2-2-2s-2 .896-2 2c0 1.105.895 2 2 2s2-.895 2-2zm0 0V7m0 4v4m6 4H6a2 2 0 01-2-2V7a2 2 0 012-2h2l1-1h6l1 1h2a2 2 0 012 2v10a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>

                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full p-2 outline-none text-black"
                        name="password"
                      />

                      {/* Eye Toggle Icon */}
                      <button
                        type="button"
                        onClick={togglePassword}
                        className="px-2 text-gray-500 focus:outline-none bg-white "
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          // Eye Open
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        ) : (
                          // Eye Off
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.056 10.056 0 012.263-3.592M6.6 6.6A9.964 9.964 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.965 9.965 0 01-1.241 2.272M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0l7 7m-7-7L5 5"
                            />
                          </svg>
                        )}
                      </button>
                    </div>

                    {touched.password && errors.password && (
                      <div className="text-danger text-sm mt-1 error-tooltip">
                        {errors.password}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex justify-end items-center">
                  <a
                    href="/forgetPassword"
                    className="text-sm text-end primary-text-color hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full   p-2 theme-button  rounded-md  transition"
                >
                  {!submitting
                    ? showOtp
                      ? "Send OTP"
                      : "Login"
                    : "Submitting..."}
                </button>
                <div className="flex justify-center items-center">
                  {!showOtp ? (
                    <a
                      className="flex items-center text-sm primary-text-color cursor-pointer"
                      onClick={() => {
                        setShowOtp(true);
                        setErrors((prev) => ({
                          ...prev,
                          email: "",
                          password: "",
                        }));
                        setTimeLeft(30);
                      }}
                    >
                      Login with OTP{" "}
                    </a>
                  ) : (
                    <a
                      className="flex items-center text-sm primary-text-color cursor-pointer"
                      onClick={() => {
                        setShowOtp(false);
                        setErrors((prev) => ({
                          ...prev,
                          email: "",
                          password: "",
                        }));
                        setTimeLeft(30);
                      }}
                    >
                      Login with Password{" "}
                    </a>
                  )}
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

export default EmailPasswordSignIn;
