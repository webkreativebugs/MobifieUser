import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
// import ApiRequestForms from "../../../components/module/project_component/ConfigComponents/app/ApiRequestForm"
import { ApiConfig } from "../../../data/CustomizeData/ClientConfiguration"
import ApiConfigInputField from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField"
import { useState } from "react"
const page = () => {
   
interface ApiConfigData {
  api_key: string;       // Authentication
  base_url: string;      // Base domain for the API
  endpoint: string;      // Specific path for the call
  method: string;        // HTTP method selection
  headers: string;       // Optional custom headers
  query_params: string;  // Optional query strings
  body: string;          // Optional POST/PUT body
  timeout: string;       // Optional timeout setting
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

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiConfig((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <AppConfigMask displayName={ConfigTypeEnums.API}>
    
        <form className="w-full grid grid-cols-2 gap-5 border-2 p-5 bg-white rounded-md  ">
                {(ApiConfig).map((item) => (
                  
                  <ApiConfigInputField
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
              </form>
    </AppConfigMask>
  )
}

export default page
