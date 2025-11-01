// import AppConfigMask from "../../../project_component/ConfigComponents/app/AppConfigMask";
// import { ConfigTypeEnums } from "../../../../../../enum/DashboardLinks";
// import ApiRequestForms from "../../../components/module/project_component/ConfigComponents/app/ApiRequestForm"
import {
  ApiConfigAuth,
  ApiConfigRequest,
} from "../../../../../data/CustomizeData/ApiConfig";
import ApiConfigInputField from "../../../project_component/ConfigComponents/app/ApiConfigInputField";
// import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { useState } from "react";
// import { MdAccessTime } from "react-icons/md";

// import { MdAccessTime } from "react-icons/md";

const ApiConfig = ({ isDisable }: { isDisable: boolean }) => {
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

  // const addForm = () => {
  //   setNumOfForms((prev) => [...prev, prev.length]); // add next index
  // };
  // const deleteForm=(id:number)=>{
  //   setNumOfForms((prev) => prev.filter((formId) => formId !== id));
  // }
  return (
    // <AppConfigMask name={CustomizeDashboardTypeEnums.APP} displayName={ConfigTypeEnums.API} display="flex">

    <form className="grid grid-cols-1 w-full  gap-5">
      <div className="bg-primary p-5 rounded-lg shadow-md mb-2">
        <h1 className="text-2xl font-semibold border-b-gray-200 border-b  pb-6">
          Authentication
        </h1>
        <div className=" p-5 rounded-lg">
          {ApiConfigAuth.map((item) => (
            <ApiConfigInputField
              title={item.title}
              placeholder={item.placeholder as string}
              name={item.key}
              value={apiConfig[item.key]}
              onChange={handleChange}
              disabled={isDisable}
              required={false}
              type={item.type}
              options={item.options}
            />
          ))}
        </div>
      </div>
      <div className="bg-primary p-5 rounded-lg shadow-md  ">
        <h1 className="text-2xl font-semibold border-b-gray-200 border-b  pb-6">
          Request
        </h1>
        <div className=" p-5 rounded-lg">
          {ApiConfigRequest.map((item) => (
            <ApiConfigInputField
              title={item.title}
              placeholder={item.placeholder as string}
              name={item.key}
              value={apiConfig[item.key]}
              onChange={handleChange}
              disabled={isDisable}
              required={false}
              type={item.type}

              // options={item.options}
            />
          ))}
        </div>
      </div>
    </form>

    // </AppConfigMask>
  );
};

export default ApiConfig;
