import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface ReportProps {
  setPOpUp: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTost: React.Dispatch<React.SetStateAction<boolean>>;
}

function Report({ setPOpUp, setIsTost }: ReportProps) {
  const [form, setForm] = useState({
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const trimmedValue = value.replace(/^\s+/, "");

    if (trimmedValue !== "") {
      setError((prev) => ({ ...prev, [name]: "" }));
    }

    setForm({ ...form, [name]: trimmedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedSubject = form.subject.trim();
    const trimmedMessage = form.message.trim();

    let hasError = false;

    if (trimmedSubject === "") {
      setError((prev) => ({ ...prev, subject: "Please enter Subject" }));
      hasError = true;
    }

    if (trimmedMessage === "") {
      setError((prev) => ({ ...prev, message: "Please enter Message" }));
      hasError = true;
    }

    if (hasError) return;

    setForm({ subject: "", message: "" });
    setPOpUp(false);
    setIsTost(true);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-1/2 bg-white  rounded-2xl shadow-md border border-gray-200 p-6 "
    >
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Submit a Support Request
      </h4>
      <button
        onClick={() => setPOpUp(false)}
        className="absolute top-1 right-1 text-xl text-red-500"
      >
        <RxCross2 />
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="What’s your issue or request about?
"
          />
          <p className="text-red-400 text-xs mt-0 px-2">{error.subject}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
            placeholder="Please describe your issue in detail…
"
          />
          <p className="text-red-400 mt-0 text-xs px-2">{error.message}</p>
        </div>

        <button
          type="submit"
          className="bg-black text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Report;
