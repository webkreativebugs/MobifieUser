import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  CreateSupportTicketRequest,
  CreateSupportTicketResponse,
} from "../../../../../../../network/public/project_api/supportTicketApi/CreateSupportTicket.interface";
import { useloader } from "../../../../../../context/loader_context/LoaderContext";

import createSupport from "../../../../../../utils/api/supportticketApi/CreateNewSupportTicket";
// import CustomizePopUp from "../../common/CustomizePopUp";

interface ReportProps {
  setPOpUp: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTost: React.Dispatch<React.SetStateAction<boolean>>;
}

function Report({ setPOpUp, setIsTost }: ReportProps) {
  const { setLoader } = useloader();
  const [apiResponse, setApiResponse] = useState<CreateSupportTicketResponse>();
  const [apiError, setApiError] = useState<Error>();
  const [responseloder, setResponseloder] = useState(false);
  console.log(apiError,responseloder);
  
  const [formData, setForm] = useState<CreateSupportTicketRequest>({
    project_id: "68e8b7d24af82ab3832039ed",
    customer_id: "679677c921e409b74ef66d6e",
    type: "customer_ticket",
    category: "signin",
    priority: "s3",
    status: "open",
    subject: "",
    description: "",
  });
  // const [form, setForm] = useState({
  //   subject: "",
  //   message: "",
  // });

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

    setForm({ ...formData, [name]: trimmedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.description.trim();

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

    console.log(formData);
    setResponseloder(true);

    createSupport(setApiResponse, formData, setApiError, setLoader);
    // if (apiResponse) {
    //   console.log(apiResponse);
    // }

    // setForm({ subject: "", message: "" });
    setPOpUp(false);
    setIsTost(true);
  };
  useEffect(() => {
    console.log(apiResponse);
    setResponseloder(false);
  }, [apiResponse]);

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
            value={formData.subject}
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
            name="description"
            value={formData.description}
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
      {/* {responseloder && (
        <CustomizePopUp setPOpUp={setResponseloder}>
          <div>this is the popup</div>
        </CustomizePopUp>
      )} */}
    </div>
  );
}

export default Report;
