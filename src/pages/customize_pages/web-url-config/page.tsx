import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums, CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
import ApiConfigInputField from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField" 
import { WebViewNavigationURL } from "../../../data/CustomizeData/ClientConfiguration"
import { useState } from "react"

type ConfigFormKeys =
  | 'edit_profile'
  | 'orders'
  | 'address'
  | 'about_us'
  | 'faq_page'
  | 'terms_and_conditions'
  | 'privacy_policy'
  | 'returns_policy'
  | 'contact_us';

interface WebViewNavigationItem {
  title: string;
  url: string;
  key: ConfigFormKeys;
}

const Page = () => {
  const [configFormData, setConfigFormData] = useState<Record<ConfigFormKeys, string>>({
    edit_profile: "",
    orders: "",
    address: "",
    about_us: "",
    faq_page: "",
    terms_and_conditions: "",
    privacy_policy: "",
    returns_policy: "",
    contact_us: ""
  });

  const [checkboxForm, setCheckboxForm] = useState<Record<ConfigFormKeys, boolean>>({
    edit_profile: true,
    orders: true,
    address: true,
    about_us: true,
    faq_page: true,
    terms_and_conditions: true,
    privacy_policy: true,
    returns_policy: true,
    contact_us: true,
  });

  const [errors, setErrors] = useState<Record<ConfigFormKeys, string>>({
    edit_profile: "",
    orders: "",
    address: "",
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

  const validate = () => {
    let valid = true;
    const newErrors: Record<ConfigFormKeys, string> = {
      edit_profile: "",
      orders: "",
      address: "",
      about_us: "",
      faq_page: "",
      terms_and_conditions: "",
      privacy_policy: "",
      returns_policy: "",
      contact_us: ""
    };

    (WebViewNavigationURL as WebViewNavigationItem[]).forEach((item) => {
      if (checkboxForm[item.key]) {
        const value = configFormData[item.key];
        if (!value.trim()) {
          newErrors[item.key] = `${item.title} is required`;
          valid = false;
        } else if (!/^https:\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
          newErrors[item.key] = `Invalid URL for ${item.title}`;
          valid = false;
        }
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Form data:", configFormData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <AppConfigMask display="" name={CustomizeDashboardTypeEnums.APP} displayName={ConfigTypeEnums.WEB}>
      <form
        className="w-full grid grid-cols-2 gap-5 pb-9 rounded-md bg-white p-6 pt-9 shadow-md"
        onSubmit={handleSubmit}
      >
        {(WebViewNavigationURL as WebViewNavigationItem[]).map((item) => (
          <div key={item.key} className="flex flex-col">
            <div className="flex">
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
            {errors[item.key] && (
              <span className="text-red-500 text-sm ml-9 mt-0 pt-0">{errors[item.key]}</span>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="col-span-2 mt-6 button w-1/12 py-3 rounded-md"
        >
          Submit
        </button>
      </form>
    </AppConfigMask>
  );
};

export default Page;
