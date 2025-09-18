"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../App.css";
import { LoginResponse } from "../../../../../network/public/project_api/email_password_login/EmailPasswordLogin.interface";
import "../../../../styles/ThemeClasses.css";
// const loginImg = "../../../../public/assets/login.png";
const logo = "../../../../public/assets/MobifieLogo.svg";
import PasswordLogin from "../../../../utils/api/PasswordLogin";
import { useauth } from "../../../../context/auth_context/AuthContext";
import { useloader } from "../../../../context/loader_context/LoaderContext";
// import { url } from "inspector";

// import { useTheme } from "../../../../context/AppContext";

const EmailPasswordSignIn = () => {
  // const {theme , onThemeChange} = useTheme()
  const { setLoader } = useloader();
  const { onRoleChange } = useauth();
  const [showPassword, setShowPassword] = useState(false);
  // const [showOtp, setShowOtp] = useState(false);
  // const [disable, setDisable] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [apiResponse, setApiResponse] = useState<LoginResponse>();

  const togglePassword = () => setShowPassword((prev) => !prev);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  // const {theme, onThemeChange } = useTheme();
  const navigate = useNavigate();
  // const [submitting, setSubmitting] = useState(false);

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });
  const [apiError, setApiError] = useState("");
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email": {
        // if (!value.trim()) return "Email is required";
        if ((!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))&&value.trim()) {
          return "Invalid email address";
        }
        return "";
      }

      case "password": {
        // if (!value.trim()) return "Password is required";
        return "";
      }

      default:
        return "";
    }
  };
  const SubmitvalidateField = (name: string, value: string) => {
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
        const err = SubmitvalidateField(key, formData[key as keyof typeof formData]);
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

    console.log(formData);
    if (validate()) {
      setLoader(true);
      PasswordLogin(setApiResponse, formData, setApiError, setLoader);
    }
  };
  useEffect(() => {
    if (apiResponse) {
      // console.log(apiResponse);?
      // setAuthResponse(apiResponse)
      onRoleChange(apiResponse.token);
      navigate("/project", { replace: true });
    }
  }, [apiResponse]);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="w-1/4 flex justify-center min-h-screen mt-[16rem] px-4 sm:px-8 bg-white">
      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-[60px] sm:w-[80px] "
      />

      <div className="w-full max-w-md ">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mt-0 sm:mt-0 mb-2">
          Log in to continue
        </h1>
        <p className="text-center text-sm mb-6 text-gray-500 px-2 sm:px-0">
          Access your business dashboard and track performance in one place.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="error-wrapper">
            <div className="flex items-center border-2 border-gray-300 rounded-md bg-white">
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
                type="text"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                className="w-full p-2 outline-none bg-none text-black"
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
                    e.preventDefault();
                  }
                }}
              />
            </div>
            {touched.email && errors.email && (
              <div className="text-red-600 text-xs mt-1 error-tooltip">
                {errors.email}
              </div>
            )}
          </div>

          {/* Password Input */}
          <div className="error-wrapper pt-1">
            <div className="flex items-center border-2 border-gray-300 rounded-md bg-white">
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
                    d="M17 10H7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14v2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10V7a4 4 0 118 0v3"
                  />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
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
                    e.preventDefault();
                  }
                }}
              />
              <button
                type="button"
                onClick={togglePassword}
                className="px-2 text-gray-500 bg-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
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
                      d="M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m6 0a3 3 0 01-6 0m6 0a9.97 9.97 0 01-1.125 6.825M12 5c-4.478 0-8.268 2.943-9.542 7A9.965 9.965 0 0012 19c4.478 0 8.268-2.943 9.542-7A9.964 9.964 0 0012 5zM19 19L5 5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {touched.password && errors.password && (
              <div className="text-red-600 text-xs mt-1 error-tooltip">
                {errors.password}
              </div>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end items-center">
            <a
              href="/forget-password"
              className="text-sm text-gray-700 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md transition hover:opacity-90"
          >
            Login
          </button>

          {/* Error */}
          {apiError && (
            <div className="flex justify-center items-center text-red-600 text-sm">
              {apiError}
            </div>
          )}

          {/* Login with OTP */}
          <div className="flex justify-center items-center">
            <a
              onClick={() => navigate("/login-with-otp", { replace: true })}
              className="text-sm text-gray-700 cursor-pointer hover:underline"
            >
              Login with OTP
            </a>
          </div>
        </form>
      </div>
    </div>

    // </div>
  );
};

export default EmailPasswordSignIn;
