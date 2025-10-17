import React, { useState } from "react";
import ApiConfigInputField from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField";
import { ShopifyConfig } from "../../../data/CustomizeData/ApiConfig";
import {
  ApiConfigAuth,
  ApiConfigRequest,
} from "../../../data/CustomizeData/ApiConfig";
import Navbar from "../../../components/common_component/Navbar";
interface ConfigFormData {
  [key: string]: string;
}

function page() {
  const [formData, ] = useState<ConfigFormData>(
    ShopifyConfig.reduce((acc, item) => ({ ...acc, [item.key]: "" }), {})
  );

  interface ApiConfigData {
    api_key: string; // Authentication
    base_url: string; // Base domain for the API
    endpoint: string; // Specific path for the call
    method: string; // HTTP method selection
    headers: string; // Optional custom headers
    query_params: string; // Optional query strings
    body: string; // Optional POST/PUT body
    timeout: string; // Optional timeout setting
    [key: string]: string; // Index signature for dynamic access
  }

  const [apiConfig, setApiConfig] = useState<ApiConfigData>({
    api_key: "",
    base_url: "",
    endpoint: "",
    method: "GET", // default method
    headers: "",
    query_params: "",
    body: "",
    timeout: "",
  });

  // const [numOfForms , setNumOfForms]=useState([0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full h-screen overflow-y-scroll hide-scrollbar bg-gray-50">
      {/* Fixed Header */}
      <Navbar />

      {/* Scrollable Content */}
      <div className="px-80 mt-28 pb-20">
        <form className="grid grid-cols-1 w-full gap-5">
          {/* 🔐 Authentication */}
          <div className="bg-primary p-5 rounded-lg shadow-md mb-2">
            <h1 className="text-2xl font-semibold border-b-gray-200 border-b pb-6">
              Authentication
            </h1>
            <div className="p-5 rounded-lg">
              {ApiConfigAuth.map((item) => (
                <ApiConfigInputField
                  key={item.key}
                  title={item.title}
                  placeholder={item.placeholder as string}
                  name={item.key}
                  value={apiConfig[item.key]}
                  onChange={handleChange}
                  required={false}
                  type={item.type}
                  options={item.options}
                />
              ))}
            </div>
          </div>

          {/* 🌐 Request */}
          <div className="bg-primary p-5 rounded-lg shadow-md mb-2">
            <h1 className="text-2xl font-semibold border-b-gray-200 border-b pb-6">
              Request
            </h1>
            <div className="p-5 rounded-lg">
              {ApiConfigRequest.map((item) => (
                <ApiConfigInputField
                  key={item.key}
                  title={item.title}
                  placeholder={item.placeholder as string}
                  name={item.key}
                  value={apiConfig[item.key]}
                  onChange={handleChange}
                  required={false}
                  type={item.type}
                />
              ))}
            </div>
          </div>

          {/* 🧩 Client */}
          <div className="bg-primary p-5 rounded-lg shadow-md mb-10">
            <h1 className="text-2xl font-semibold border-b-gray-200 border-b pb-6">
              Client
            </h1>
            {ShopifyConfig.map((data, index) => (
              <div key={index} className="flex flex-col gap-1">
                <ApiConfigInputField
                  title={data.label}
                  placeholder={data.label}
                  name={data.key}
                  onChange={handleChange}
                  value={formData[data.key]}
                  type="text"
                />
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-2 gap-5 pb-[10rem] rounded-md bg-primary p-6 shadow-md">
            {/* <CurrencySelector selected={selected} setSelected={setSelected} /> */}
            <div>
              <label className="flex text-md font-bold mb-2 text-gray-700 items-center space-x-1 text-lg cursor-pointer">
                Cart Quanity
              </label>
              <input
                type="number"
                placeholder="Enter maximum cart quantity"
                // value={maxCartQuantity}
                name="Cart"
                onChange={handleChange}
                className="w-full flex items-center justify-between border rounded-lg px-3 py-2 bg-white shadow-sm hover:border-gray-400"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
