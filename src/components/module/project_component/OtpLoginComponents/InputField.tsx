import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import globalOtp from "../../../../utils/api/SendOtpLogin";
import ManualDropdown from "../../../common_component/ManualDropdown";
// import { apiResponse } from "../../../../utils/SendOtpLogin";
interface InputFieldProps {
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
  setApiRequestData: React.Dispatch<React.SetStateAction<Object>>;
}

const InputField = ({ setShowOtp, setApiRequestData }: InputFieldProps) => {
  const [apiResponse, setApiResponse] = useState();
  const [showNum, setShowNum] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    country_code: "+91",
  });
  const [submitting, setSubmitting] = useState(false);
  const [disable, setDisable] = useState(false);

  const [touched, setTouched] = useState({
    email: false,
    mobile: false,
  });
  const [errors, setErrors] = useState({
    mobile: "",
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
      case "mobile": {
        const trimmed = value.trim();

        if (!trimmed) return "Mobile number is required";
        if (/\s/.test(trimmed)) return "Mobile number cannot contain spaces";
        if (!/^[0-9]+$/.test(trimmed))
          return "Mobile number must contain only digits";
        if (trimmed.length !== 10)
          return "Mobile number must be exactly 10 digits";
        if (/^([0-9])\1{9}$/.test(trimmed))
          return "Mobile number cannot be all the same digit";
        if (!/^[6-9]/.test(trimmed))
          return "Mobile number must start with 6, 7, 8, or 9";

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
    {
      showNum
        ? globalOtp(
            setApiResponse,
            { mobile: formData.mobile, country_code: formData.country_code },
            setSubmitting
          )
        : globalOtp(setApiResponse, { email: formData.email }, setSubmitting);
    }
  };

  useEffect(() => {
    console.log(apiResponse);
    if (apiResponse) {
      setSubmitting(false);
      setShowOtp(true);
      showNum
        ? setApiRequestData({ mobile: formData.mobile })
        : setApiRequestData({ email: formData.email });
    }
  }, [apiResponse]);

  function handleFieldChange() {
    setShowNum(!showNum);
  }

  useEffect(() => {
    setFormData((prev) => ({ ...prev, mobile: "", email: "" }));
    setErrors((prev) => ({ ...prev, mobile: "", email: "" }));
  }, [showNum]);

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {showNum ? (
        <div className="error-wrapper">
          {/* <label className="text-sm">Email</label> */}
          <div className="flex items-center border-gray-300 border-2 rounded-md mt-1 bg-white">
            <ManualDropdown formData={formData} setFormData={setFormData} />
            {/* <span className="px-2 text-gray-500">
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
          </span> */}
            <input
              type="tel"
              placeholder="Enter your mobile"
              name="mobile"
              onChange={handleChange}
              value={formData.mobile}
              onBlur={handleBlur}
              className="w-full p-2  outline-none text-black"
              onKeyDown={(e) => {
                const allowedControlKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                ];
                if (
                  !/^[0-9]$/.test(e.key) &&
                  !allowedControlKeys.includes(e.key)
                ) {
                  e.preventDefault(); // Block non-numeric and space keys
                }
              }}
              disabled={disable}
            />
          </div>
          {touched.mobile && errors.mobile && (
            <div className="text-red-500 text-xs mt-0 error-tooltip ">
              {" "}
              {errors.mobile}
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
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
            <div className="text-red-500 text-xs mt-0 error-tooltip ">
              {" "}
              {errors.email}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-end items-center">
        <a
          onClick={handleFieldChange}
          className="text-sm text-end primary-text-color  link-hover cursor-pointer "
        >
          {!showNum ? "OTP on mobile?" : "OTP on email?"}
        </a>
      </div>

      <button
        type="submit"
        // onClick={() => }
        className="w-full  mt-4 m-0  theme-button  rounded-md  transition disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
        disabled={disable}
      >
        {!submitting ? "Send OTP" : "Sending..."}
      </button>
      <div className="flex justify-center items-center">
        <Link
          to="/login-with-password"
          className="flex items-center text-sm primary-text-color cursor-pointer "
        >
          Login with Password{" "}
        </Link>
      </div>
    </form>
  );
};

export default InputField;
