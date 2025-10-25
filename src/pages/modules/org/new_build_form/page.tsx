import { useState } from "react";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";

function Page() {
  const [formData, setFormData] = useState({
    date: "",
    platform: "", // single selection only
    app: "",
    screen: "",
  });

  const [errors, setErrors] = useState({
    date: "",
    platform: "",
    app: "",
    screen: "",
  });

  // ✅ handle change safely (checkbox + select + input)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;

    // For checkboxes (platform)
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const { value, checked } = target;
      setFormData((prev) => ({
        ...prev,
        platform: checked ? value : "", // only one platform active
      }));
      setErrors((prev) => ({ ...prev, platform: "" }));
    } else {
      // For select or input fields
      const { id, value } = target;
      setFormData((prev) => ({ ...prev, [id]: value }));
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      date: "",
      platform: "",
      app: "",
      screen: "",
    };
    let valid = true;

    if (!formData.date) {
      newErrors.date = "Date is required.";
      valid = false;
    }
    if (!formData.platform) {
      newErrors.platform = "Select one platform.";
      valid = false;
    }
    if (!formData.app) {
      newErrors.app = "App selection is required.";
      valid = false;
    }
    if (!formData.screen) {
      newErrors.screen = "Screen selection is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("✅ Form Data Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        date: "",
        platform: "",
        app: "",
        screen: "",
      });
    }
  };

  return (
    <DashboardMask name={DashboardTypeEnums.BUILDS}>
      <HeadingMask name={"Create New Build"}>
        <div className="px-2"></div>
      </HeadingMask>

      <div className="w-11/12 mx-auto card-bg shadow-lg rounded-xl p-8 mt-16 border">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b-2 pb-4">
          Fill the form to create new build
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          {/* Date */}
          <div className="flex flex-col">
            <label htmlFor="date" className="font-semibold text-gray-700 mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition bg-white w-full"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* ✅ Platform (Single Checkbox Selection) */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Requested by Platform
            </label>
            <div className="flex items-center space-x-6">
              {["android", "ios", "both"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.platform === option}
                    onChange={handleChange}
                    className="w-5 h-5 accent-black cursor-pointer"
                  />
                  <span className="capitalize">{option}</span>
                </label>
              ))}
            </div>
            {errors.platform && (
              <p className="text-red-500 text-sm mt-1">{errors.platform}</p>
            )}
          </div>

          {/* App Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="app" className="font-semibold text-gray-700 mb-2">
              App
            </label>
            <select
              id="app"
              value={formData.app}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition bg-white w-full"
            >
              <option value="">Select App</option>
              <option value="app1">App Config 1</option>
              <option value="app2">App Config 2</option>
              <option value="app3">App Config 3</option>
            </select>
            {errors.app && (
              <p className="text-red-500 text-sm mt-1">{errors.app}</p>
            )}
          </div>

          {/* Screen Dropdown */}
          <div className="flex flex-col md:col-span-1">
            <label
              htmlFor="screen"
              className="font-semibold text-gray-700 mb-2 block"
            >
              Screen
            </label>
            <select
              id="screen"
              value={formData.screen}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition bg-white w-full"
            >
              <option value="">Select Screen</option>
              <option value="home">Home Screen</option>
              <option value="profile">Profile Screen</option>
              <option value="settings">Settings Screen</option>
            </select>
            {errors.screen && (
              <p className="text-red-500 text-sm mt-1">{errors.screen}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-6 md:col-span-2">
            <button
              type="submit"
              className="bg-black text-white px-20 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </DashboardMask>
  );
}

export default Page;
