import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
// import ApiRequestForms from "../../../components/module/project_component/ConfigComponents/app/ApiRequestForm"
import { ApiConfig } from "../../../data/CustomizeData/ClientConfiguration"
import ApiConfigInputField from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField"
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
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

  // const [numOfForms , setNumOfForms]=useState([0]);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiConfig((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  // const addForm = () => {
  //   setNumOfForms((prev) => [...prev, prev.length]); // add next index
  // };
  // const deleteForm=(id:number)=>{
  //   setNumOfForms((prev) => prev.filter((formId) => formId !== id));
  // }
  return (
    <AppConfigMask name={CustomizeDashboardTypeEnums.APP} displayName={ConfigTypeEnums.API} display="flex">
   
   
        <form className="w-full grid grid-cols-2 gap-5  mb-2 bg-white p-9 shadow-md  rounded-md  " >
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
