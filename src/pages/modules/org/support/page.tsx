import React, { useState } from "react";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
import { useNavigate } from "react-router-dom";
import Report from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/Report";
import { CiSearch } from "react-icons/ci";
import Search from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/Search";

function page() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been submitted. We'll get back to you soon!");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <DashboardMask name={DashboardTypeEnums.SUPPORT}>
      <HeadingMask name={"Support Portal"}>
        <div> this is a Support page</div>
      </HeadingMask>

      <div className="flex  w-full gap-4 px-2 h-screen mt-8">
        {/* Support Section Header */}

        <Search searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className="w-1/3 h-1/2 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Help
          </h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              📩 <span className="font-medium">Email:</span>{" "}
              support@besthirez.com
            </li>
            <li>
              📞 <span className="font-medium">Phone:</span> +91 98765 43210
            </li>
            <li>
              💬 <span className="font-medium">Chat:</span> Available 9 AM – 6
              PM
            </li>
          </ul>

          <div className="mt-6 border-t pt-4">
            <h5 className="font-semibold text-gray-800 mb-2 text-sm">
              Popular Topics:
            </h5>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>🔹 How to manage your account</li>
              <li>🔹 Resetting your password</li>
              <li>🔹 Updating billing information</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardMask>
  );
}

export default page;
