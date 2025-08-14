import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
import CurrencySelector from "../../../components/module/project_component/ConfigComponents/app/CurrencySelector"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag";
// import { getEmojiByCurrencyCode } from 'country-currency-emoji-flags';
// import { currencies } from "../../../data/CustomizeData/ClientConfiguration";
 interface SELECT{
        code:string,
        name:string,
        icon: React.ReactNode
        symbol:string
}
const page = () => {
   const [selected, setSelected] = useState<SELECT>({
      code: "USD",
      name: "United States Dollar",
      symbol:"$",
      icon: <ReactCountryFlag
                          countryCode="US"
                          svg
                          style={{
                            width: "1.5em",
                            height: "1.5em",
                          }}
                          title="USA"
                        />
                     
                
    });
  return (
    <AppConfigMask displayName={ConfigTypeEnums.DEFAULT}>
        <div className="w-full grid grid-cols-2 gap-5 pb-[10rem] p-8 rounded-md" >
        <CurrencySelector
        selected={selected}
        setSelected={setSelected}
        />
        </div>
      
    </AppConfigMask>
  )
}

// const enhancedCurrencies = currencies.map(c => ({
//   ...c,
//   flag: getEmojiByCurrencyCode(c.code) || '🏳', // fallback
// }));

export default page
