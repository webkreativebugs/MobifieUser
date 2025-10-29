import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
  setSubmitPOpup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ConfigDetails {
  title: string;
  description: string;
  createddate: number;
  createdby: string;
}

function SubmitConfiguration({ setSubmitPOpup, setIsSubmitActive }: Props) {
  const [configDetails, setConfigDetails] = useState<ConfigDetails>({
    title: "",
    description: "",
    createddate: Date.now(),
    createdby: "anubhav",
  });

  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setConfigDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    let tempErrors: { title?: string; description?: string } = {};
    if (!configDetails.title.trim()) tempErrors.title = "Title is required";
    if (!configDetails.description.trim())
      tempErrors.description = "Description is required";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) return;

    // Save to localStorage
    const existingData = localStorage.getItem("configDetails");
    const currentArray = existingData ? JSON.parse(existingData) : [];
    const updatedArray = [...currentArray, configDetails];
    localStorage.setItem("configDetails", JSON.stringify(updatedArray));

    console.log("✅ Config saved successfully!");
    console.log("📦 Updated Config Details:", updatedArray);

    // Close popup after successful submit
    setSubmitPOpup(false);
    setIsSubmitActive(false);
  };

  return (
    <>
      <button
        onClick={() => setSubmitPOpup(false)}
        className="absolute top-4 right-4 text-2xl text-red-500 hover:text-red-600 transition-colors"
      >
        <RxCross2 />
      </button>

      <h1 className="text-2xl font-bold text-gray-900 mb-4">Submit Changes</h1>
      <p className="text-gray-600 mb-6">
        Note: Once you submit, you won’t be able to retrieve your previous
        changes.
      </p>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={configDetails.title}
          onChange={handleChange}
          placeholder="Enter config title"
          className={`w-full border ${
            errors.title ? "border-red-500" : "border-gray-300"
          } rounded-lg px-3 text-black py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Description Input */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={configDetails.description}
          onChange={handleChange}
          placeholder="Enter config description"
          className={`w-full border ${
            errors.description ? "border-red-500" : "border-gray-300"
          } text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={handleSubmit}
          className="px-5 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 shadow-md transition-all"
        >
          Submit
        </button>
        <button
          onClick={() => setSubmitPOpup(false)}
          className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-all"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default SubmitConfiguration;
