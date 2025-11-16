// import AppConfigMask from "../../../project_component/ConfigComponents/app/AppConfigMask"
// import { ConfigTypeEnums, CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks"
import ApiConfigInputField from "../../../project_component/ConfigComponents/app/ApiConfigInputField"
import { ShopifyConfig } from "../../../../../data/CustomizeData/ApiConfig"
import { useState } from "react"

interface ConfigFormData {
  [key: string]: string;
}

const ClientConfig = ({disable=false}) => {
  const [formData, setFormData] = useState<ConfigFormData>(
    ShopifyConfig.reduce((acc, item) => ({ ...acc, [item.key]: "" }), {})
  );

  const [errors, setErrors] = useState(
    ShopifyConfig.reduce((acc, field) => {
      acc[field.key] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  const [touched, setTouched] = useState(
    ShopifyConfig.reduce((acc, field) => {
      acc[field.key] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const validateField = (name: string, value: string) => {
    if (!value.trim()) return "This field is required";

    switch (name) {
      case "API_URL":
      case "API_URL_ADMIN":
        if (
          !/^https:\/\/[a-zA-Z0-9.-]+\.myshopify\.com\/(api|admin)\/[0-9]{4}-[0-9]{2}\/graphql\.json$/.test(
            value
          )
        ) {
          return "Invalid Shopify API URL format";
        }
        break;

      case "X_SHOPIFY_STOREFRONT_ACCESS_TOKEN":
        if (!/^[a-fA-F0-9]{32}$/.test(value)) {
          return "Invalid Storefront token (must be 32 hex characters)";
        }
        break;

      case "X_SHOPIFY_ACCESS_TOKEN":
        if (!/^shpat_[a-fA-F0-9]{32}$/.test(value)) {
          return "Invalid Admin token (must start with shpat_ and be 32 hex chars)";
        }
        break;

      default:
        break;
    }
    return "";
  };

  const validate = (data: Record<string, string>) => {
    let valid = true;
    const newErrors: Record<string, string> = {};

    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      newErrors[key] = error;
      if (error) valid = false;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(data).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {} as Record<string, boolean>)
    );

    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      console.log("✅ Valid form data:", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("❌ Errors:", errors);
    }
  };
  // ✅ Copy button handler
  const handleCopy = () => {
    const code = ShopifyConfig.map(
      (item) => `export const ${item.key}: string = '${formData[item.key]}';`
    ).join("\n");

    navigator.clipboard.writeText(code);
    alert("Config copied to clipboard ✅");
  };

  return (
    <>
      {/* <AppConfigMask
      name={CustomizeDashboardTypeEnums.APP}
      displayName={ConfigTypeEnums.CLIENT}
      display="flex"
      direction="column"
    > */}
      <form
        className=" bg-primary  p-10 shadow-md grid gap-5 mb-5 pt-9 pb-9  rounded-md"
        onSubmit={handleSubmit}
      >
        {ShopifyConfig.map((data, index) => (
          <div key={index} className="flex flex-col gap-1">
            <ApiConfigInputField
              title={data.label}
              placeholder={data.label}
              name={data.key}
              onChange={handleChange}
              value={formData[data.key]}
              type="text"
              onBlur={handleBlur}
              AreaDisable={disable}
            />
            {errors[data.key] && (
              <p className="text-red-500 text-sm">{errors[data.key]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="button w-1/12 p-2  rounded-md bg-blue-600 text-white hover:bg-blue-500"
        >
          Submit
        </button>
      </form>

      {/* ✅ Output Section */}
      <div className="relative bg-gray-900 text-green-400 rounded-md p-4 font-mono text-sm shadow-inner">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-3 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-600"
        >
          Copy
        </button>
        <pre>
          {ShopifyConfig.map(
            (item) =>
              `export const ${item.key}: string = '${formData[item.key]}';`
          ).join("\n")}
        </pre>
      </div>
      {/* </AppConfigMask> */}
      {/* {popup && (
        <CustomizePopUp setPOpUp={setPOpUp}>
          <div>dfgdfgfd</div>
        </CustomizePopUp>
      )} */}
    </>
  );
};

export default ClientConfig;
