import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import globalOtp from "../../../../utils/api/SendOtpLogin";
// import { apiResponse } from "../../../../utils/SendOtpLogin";
interface InputFieldProps {
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField = ({ setShowOtp }: InputFieldProps) => {
  const [apiResponse, setApiResponse] = useState();
  const [showNum, setShowNum] = useState(true);
  const [formData, setFormData] = useState({
    // email: "",
    mobile: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const [touched, setTouched] = useState({
    email: false,
    mobile: false,
  });
  const [errors, setErrors] = useState({
    mobile: "",
    email: "",
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email": {
        if (!value.trim()) return "Mobile is required";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Invalid email address";
        }
        return "";
      }

      case "mobile": {
        if (!value.trim()) return "Mobile number is required";
        if (!/^[0-9]{10}$/.test(value))
          return "Mobile number must be 10 digits";
        if (/^([0-9])\1{9}$/.test(value))
          return "Mobile number cannot be all the same digit";
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
    globalOtp(setApiResponse, formData);

    setSubmitting(true);
  };

  useEffect(() => {
    console.log(apiResponse);
    if (apiResponse) {
      setSubmitting(false);
      setShowOtp(true);
    }
  }, [apiResponse]);
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {showNum ? (
        <div className="error-wrapper">
          {/* <label className="text-sm">Email</label> */}
          <div className="flex items-center border-gray-300 border-2 rounded-md mt-1 bg-white">
            <span className="px-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.828 2.828a1 1 0 010 1.414l-1.415 1.415a1 1 0 000 1.414l5.657 5.657a1 1 0 001.414 0l1.415-1.415a1 1 0 011.414 0l2.828 2.828a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Enter your mobile"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-2 outline-none text-black"
              name="mobile"
              //   onKeyDown={handleKeyDown}
            />
          </div>
          {touched.email && errors.email && (
            <div className="text-red-500 text-xs mt-0 error-tooltip ">
              {" "}
              {errors.email}
            </div>
          )}
        </div>
      ) : (
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
                  d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.21.804 5.879 2.137M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Enter your mobile"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-2 outline-none text-black"
              name="mobile"
              //   onKeyDown={handleKeyDown}
            />
          </div>
          {touched.mobile && errors.mobile && (
            <div className="text-red-500 text-xs mt-0 error-tooltip ">
              {" "}
              {errors.mobile}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-end items-center">
        {/* <a
          onClick={() => setShowNum(!showNum)}
          className="text-sm text-end primary-text-color hover:underline cursor-pointer link-hover  "
        >
          {!showNum ? "OTP on mobile?" : "OTP on email?"}
        </a> */}
      </div>

      <button
        type="submit"
        className="w-full   p-2 theme-button  rounded-md  transition"
      >
        {!submitting ? "Send OTP" : "Sending..."}
      </button>
      <div className="flex justify-center items-center">
        <Link
          to="/login-with-password"
          className="flex items-center text-sm primary-text-color cursor-pointer hover:underline  link-hover"
        >
          Login with Password{" "}
        </Link>
      </div>
    </form>
  );
};

export default InputField;
