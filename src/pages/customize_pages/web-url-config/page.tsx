import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
import ApiConfigInputField from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField" 
import { WebViewNavigationURL } from "../../../data/CustomizeData/ClientConfiguration"
import { useState } from "react"
type ConfigFormKeys = 'about_us' | 'faq_page' | 'terms_and_conditions' | 'privacy_policy' | 'returns_policy' | 'contact_us';

interface WebViewNavigationItem {
  title: string;
  url: string;
  key: ConfigFormKeys;
}

const page = () => {
  const [configFormData, setConfigFormData] = useState<Record<ConfigFormKeys, string>>({
    about_us: "",
    faq_page: "",
    terms_and_conditions: "",
    privacy_policy: "",
    returns_policy: "",
    contact_us: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfigFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <AppConfigMask displayName={ConfigTypeEnums.WEB}>
      <>
        <form className="w-full grid grid-cols-2 gap-5 pb-[10rem]  rounded-md">
          {(WebViewNavigationURL as WebViewNavigationItem[]).map((item) => (
            <ApiConfigInputField
              title={item.title}
              placeholder={item.url}
              name={item.key}
              value={configFormData[item.key]}
              onChange={handleChange}
              required={false}
            />
          ))}
        </form>
      </>
    </AppConfigMask>
  );
}

export default page
