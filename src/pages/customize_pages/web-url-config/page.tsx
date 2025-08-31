import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums,CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
import ApiConfigInputField from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField" 
import { WebViewNavigationURL } from "../../../data/CustomizeData/ClientConfiguration"
import { useState } from "react"
// import { truncate } from "fs"
type ConfigFormKeys ='edit_profile'|'orders'|'address'| 'about_us' | 'faq_page' | 'terms_and_conditions' | 'privacy_policy' | 'returns_policy' | 'contact_us';

interface WebViewNavigationItem {
  title: string;
  url: string;
  key: ConfigFormKeys;
}

const page = () => {
  const [configFormData, setConfigFormData] = useState<Record<ConfigFormKeys, string>>({
   edit_profile:"",
    orders:"",
    address:"",
    about_us: "",
    faq_page: "",
    terms_and_conditions: "",
    privacy_policy: "",
    returns_policy: "",
    contact_us: ""
  });
    const [checkboxForm, setCheckboxForm] = useState<Record<ConfigFormKeys, boolean>>({
    edit_profile:true,
    orders:true,
    address:true,
    about_us:true,
    faq_page:true,
    terms_and_conditions:true,
    privacy_policy:true,
    returns_policy:true,
    contact_us:true,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfigFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <AppConfigMask name={CustomizeDashboardTypeEnums.APP} displayName={ConfigTypeEnums.WEB}>
      <>
        <form className="w-full grid grid-cols-2 gap-5 pb-[10rem]  rounded-md">
          {(WebViewNavigationURL as WebViewNavigationItem[]).map((item) => (
            <div className="flex ">
            <input
              type="checkbox"
              id={item.key}
              name={item.key}
              checked={checkboxForm[item.key]}
              onChange={() =>
                setCheckboxForm((prev) => ({
                  ...prev,
                  [item.key]: !prev[item.key],
                }))
              }
              className="w-4 mr-5 mt-2 flex justify-center items-center"
            />
            <ApiConfigInputField
              disabled={!checkboxForm[item.key]}
              title={item.title}
              placeholder={item.url}
              name={item.key}
              value={configFormData[item.key]}
              onChange={handleChange}
              required={false}
            />
            </div>
          ))}
        </form>
      </>
    </AppConfigMask>
  );
}

export default page
