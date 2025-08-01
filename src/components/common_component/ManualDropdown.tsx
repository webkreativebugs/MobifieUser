import{ useState, useRef, useEffect } from "react";
import countriesData from "../../data/countries.json";

const ManualDropdown = ({ formData, setFormData }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [touched, setTouched] = useState({
  //   mobile: false,
  //   state_code: false,
  // });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: any) => {
    setFormData({ ...formData, country_code: value });
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        stateRef.current &&
        !stateRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-1/3" ref={dropdownRef}>
      <div
        className={`w-full px-1 py-2  border-r-2 bg-white flex justify-center items-center cursor-pointer ${"border-gray-300"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800">{formData.country_code || "+91"}</span>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute w-28 z-50 bg-white mt-2 border hide-scrollbar rounded-md max-h-64 overflow-y-auto shadow-lg">
          {countriesData.map((state, index) => (
            <li
              key={index}
              onClick={() => handleSelect(state.mobile_code)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <span>{state.mobile_code}</span> - {state.country.abbreviation}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManualDropdown;
