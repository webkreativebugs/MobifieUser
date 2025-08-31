import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums,CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
import ApiConfigInputField from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField"
import { ShopifyConfig } from "../../../data/CustomizeData/ClientConfiguration"
import { useState } from "react"
interface ConfigFormData {
  [key: string]: string
}
const page = () => {
    const [formData, setFormData] = useState<ConfigFormData>(
    ShopifyConfig.reduce(
      (acc, item) => ({ ...acc, [item.key]:""}),
      {}
    )
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev: ConfigFormData) => ({
      ...prev,
      [name]: value,
    }))
  }

interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

function handleSubmit(e: HandleSubmitEvent): void
{
    e.preventDefault();  
    console.log(formData);
}
  const handleCopy = () => {
    const code = ShopifyConfig.map(
      (item) => `export const ${item.key}: string = '${formData[item.key]}';`
    ).join("\n")

    navigator.clipboard.writeText(code)
    alert("Config copied to clipboard ✅")
  }


  return (
     <AppConfigMask name={CustomizeDashboardTypeEnums.APP} displayName={ConfigTypeEnums.CLIENT}>
        <form className="w-full grid  gap-5 pb-[10rem] rounded-md" onSubmit={handleSubmit} >
       {ShopifyConfig.map((data,key)=>(
        <ApiConfigInputField
        key={key}
        title={data.label}
        placeholder={data.label}
        name={data.key}
        onChange={handleChange}
        value={formData.key}
        type="text"


        />
       ))

       }
       <button className="button w-1/12 p-2 rounded-md" >Submit</button>
        </form>
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
    
    </AppConfigMask>
  )
}

export default page
