import { useState } from "react";
// import { FaFlagUsa } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { currencies } from "../../../../../data/CustomizeData/ApiConfig";
import ReactCountryFlag from "react-country-flag";
import { Dispatch, SetStateAction } from "react";
 interface SELECT{
        code:string,
        name:string,
        icon: React.ReactNode,
        symbol:string
}
interface PROPS{
    selected:SELECT,
    setSelected:Dispatch<SetStateAction<SELECT>>
}

export default function CurrencySelector({selected,setSelected}:PROPS) {
 

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  //   const currencies = [
  //     { code: "AED", name: "United Arab Emirates Dirham" },
  //     { code: "AFN", name: "Afghan Afghani" },
  //     { code: "ALL", name: "Albanian Lek" },
  //     { code: "AMD", name: "Armenian Dram" },
  //     { code: "ANG", name: "Netherlands Antillean Guilder" },
  //   ];

  const filteredCurrencies = currencies.filter((c) =>
    `${c.code} - ${c.name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full font-sans relative">
      <p  className=" text-md  font-bold mb-2 text-lg  text-gray-700">
        Select a Currency
      </p>

      {/* Selected Currency Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border rounded-lg px-3 py-2 bg-white shadow-sm hover:border-gray-400"
      >
        <div className="flex items-center  gap-2">
          {selected.icon}
          <span className="font-medium">{selected.code}</span> - {selected.name} {`(${selected.symbol})`}
        </div>
        <IoIosArrowDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-50">
          <input
            type="text"
            placeholder="Search Currency"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-b p-2 outline-none text-sm"
          />

          <div className="max-h-48 overflow-y-auto">
            {filteredCurrencies.map((currency) => (
              <div
                key={currency.code}
                className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected({
                    code: currency.code,
                    name: currency.name,
                    symbol:currency.symbol,
                    icon: 
                      <ReactCountryFlag
                        countryCode={currency.code.slice(0, 2)} // first two letters → country ISO code
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                        }}
                        title={currency.code}
                      />,
                     
                     // You can change icons based on country
                  });
                  setOpen(false);
                }}
              >
                 <ReactCountryFlag
                 countryCode={currency.code.slice(0, 2)} // first two letters → country ISO code
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          marginRight:"20px"
                        }}
                        title={currency.code}
                      /> {currency.code} - {currency.name} {currency.symbol}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
