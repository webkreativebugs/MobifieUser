// import AppConfigMask from "../../../project_component/ConfigComponents/app/AppConfigMask";
// import {
//   ConfigTypeEnums,
//   CustomizeDashboardTypeEnums,
// } from "../../../../../../enum/DashboardLinks";
import CurrencySelector from "../../../project_component/ConfigComponents/app/CurrencySelector";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
// import { getEmojiByCurrencyCode } from 'country-currency-emoji-flags';
// import { currencies } from "../../../data/CustomizeData/ClientConfiguration";
interface SELECT {
  code: string;
  name: string;
  icon: React.ReactNode;
  symbol: string;
}
const DefaultConfig = ({disable=false}) => {
  const [maxCartQuantity, setMaxCartQuantity] = useState("");
  const [selected, setSelected] = useState<SELECT>({
    code: "USD",
    name: "United States Dollar",
    symbol: "$",
    icon: (
      <ReactCountryFlag
        countryCode="US"
        svg
        style={{
          width: "1.5em",
          height: "1.5em",
        }}
        title="USA"
      />
    ),
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMaxCartQuantity(e.target.value);
  }
  return (
    // <AppConfigMask
    //   display="flex"
    //   name={CustomizeDashboardTypeEnums.APP}
    //   displayName={ConfigTypeEnums.BOTTOM}
    // >
      <div className="w-full grid grid-cols-2 gap-5 pb-[10rem] rounded-md bg-primary p-6 shadow-md">
        <CurrencySelector selected={selected} setSelected={setSelected} disable={disable} />
        <div>
          <label className="flex text-md font-bold mb-2 text-gray-700 items-center space-x-1 text-lg cursor-pointer">
            Cart Quanity
          </label>
          <input
            type="number"
            placeholder="Enter maximum cart quantity"
            value={maxCartQuantity}
            name="Cart"
            onChange={handleChange}
            disabled={disable}
            className="w-full flex items-center justify-between border rounded-lg px-3 py-2 bg-white shadow-sm hover:border-gray-400"
          />
        </div>
      </div>
    // </AppConfigMask>
  );
};

// const enhancedCurrencies = currencies.map(c => ({
//   ...c,
//   flag: getEmojiByCurrencyCode(c.code) || '🏳', // fallback
// }));

export default DefaultConfig;
