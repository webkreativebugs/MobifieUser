import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import updateSupport from "../../../../../../utils/api/supportticketApi/updateTicket";

import {
  UpdateSupportTicketRequest,
  UpdateSupportTicketResponse,
  UpdateSupportTicketCallback,
} from "../../../../../../../network/public/project_api/updateSupportTicket/UpdateSupportTicket.interface";
import { useloader } from "../../../../../../context/loader_context/LoaderContext";

interface SupportTicket {
  customer_id: string;

  description: string;

  escalation_level: string;

  priority: string;

  project_id: string;

  status: string;

  subject: string;

  _id: string;
}

interface ReportProps {
  setPOpUp: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTost: React.Dispatch<React.SetStateAction<boolean>>;
  supportTicketData: SupportTicket;
}

const status = {
  OPEN: "open",
  REOPEN: "re_open",
  IN_PROGRESS: "in_progress",
  RESOLVED: "resolved",
  CLOSED: "closed",
  ESCALATED: "escalated",
  WAITING_FOR_CUSTOMER: "waiting_for_customer",
  REJECTED: "rejected",
};
export const escalation_level = {
  SUPPORT_TEAM: "level_1",
  MANAGER: "level_2",
  ENGINEERING: "level_3",
  EXECUTIVE: "executive",
} as const;

export const priority = {
  CRITICAL: "s1",
  HIGH: "s2",
  MEDIUM: "s3",
  LOW: "s4",
} as const;

function UpdateSupportTicket({
  setPOpUp,
  setIsTost,
  supportTicketData,
}: ReportProps) {
  const { setLoader } = useloader();
  const [apiResponse, setApiResponse] = useState<UpdateSupportTicketResponse>();
  const [apiError, setApiError] = useState<Error>();
  const [formData, setFormData] = useState({
    escalation_level: supportTicketData.escalation_level || "",
    priority: supportTicketData.priority || "",
    status: supportTicketData.status || "",
  });
  console.log(supportTicketData);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.escalation_level && formData.priority && formData.status) {
      setIsTost(true);
      setPOpUp(false);
      console.log("Updated Data:", formData);

      updateSupport(setApiResponse, formData, setApiError, setLoader);
    } else {
      alert("Please select all fields before submitting.");
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-1/2 h-1/3 bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-semibold text-gray-800">
          Update Support Ticket
        </h4>
        <button
          onClick={() => setPOpUp(false)}
          className="text-gray-500 hover:text-red-500 text-2xl transition"
        >
          <RxCross2 />
        </button>
      </div>

      {/* --- Form --- */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Escalation Level */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Escalation Level
          </label>
          <select
            name="escalation_level"
            value={formData.escalation_level}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value={formData.escalation_level}>
              {formData.escalation_level.replace("_", " ")}
            </option>
            {Object.entries(escalation_level)
              .filter(([_, value]) => value !== formData.escalation_level)
              .map(([key, value]) => (
                <option key={key} value={value}>
                  {value.replace("_", " ")}
                </option>
              ))}
          </select>
        </div>

        {/* Priority */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value={formData.priority}>
              {formData.priority.replace("_", " ")}
            </option>
            {Object.entries(priority)
              .filter(([_, value]) => value !== formData.priority)
              .map(([key, value]) => (
                <option key={key} value={value}>
                  {value.replace("_", " ")}
                </option>
              ))}
          </select>
        </div>

        {/* Status (Full Width) */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value={formData.status}>
              {formData.status.replace("_", " ")}
            </option>
            {Object.entries(status)
              .filter(([_, value]) => value !== formData.status)
              .map(([key, value]) => (
                <option key={key} value={value}>
                  {value.replace("_", " ")}
                </option>
              ))}
          </select>
        </div>

        {/* Submit Button */}
        {(formData.escalation_level !== supportTicketData.escalation_level ||
          formData.priority !== supportTicketData.priority ||
          formData.status !== supportTicketData.status) && (
          <div className="md:col-span-2 flex justify-end pt-4">
            <button
              type="submit"
              className="bg-black text-white font-medium px-8 py-2.5 rounded-lg shadow-md  transition-all duration-200"
            >
              Update Ticket
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default UpdateSupportTicket;
