import { Dispatch, useState, SetStateAction, useRef, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { FilterFields } from "../../data/Filter.data";

interface FilterOptions {
  [key: string]: string[];
}

interface FilterKeyword {
  selectedFilters: FilterOptions;
  setSelectedFilters: Dispatch<SetStateAction<FilterOptions>>;
  FilteringField: string;
}

export default function Filter({
  selectedFilters,
  setSelectedFilters,
  FilteringField,
}: FilterKeyword) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    FilterFields[FilteringField as keyof typeof FilterFields][0]
  );

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // const filters: FilterOptions = {
  //   Status: ["Open", "Closed", "Pending", "In Progress", "Reopen"],
  //   Priority: ["Critical", "High", "Medium", "Low"],
  //   Department: ["Support Team", "Manager", "Engineering", "Executive"],
  // };

  // ✅ Add/Remove filter options
  const handleCheckboxChange = (category: string, option: string) => {
    setSelectedFilters((prev) => {
      const currentOptions = prev[category] || [];
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((o) => o !== option)
        : [...currentOptions, option];

      return { ...prev, [category]: updatedOptions };
    });
  };

  // ✅ Clear selected category filters
  const clearCategory = () => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      delete updated[selectedCategory];
      return updated;
    });
  };

  // ✅ Clear all filters
  const clearAll = () => {
    setSelectedFilters({});
  };

  // ✅ Apply (close the dropdown)
  const applyFilters = () => {
    console.log("Applied Filters:", selectedFilters);
    setIsOpen(false);
  };

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer px-10 py-2 bg-gray-100 text-black rounded-lg shadow-md mt-6 hover:bg-gray-200 transition"
      >
        <div className="flex items-center gap-2 font-bold text-gray-500">
          Filter <FiFilter />
        </div>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-2 w-[400px] rounded-xl bg-white border border-gray-200 shadow-lg p-4 z-10"
        >
          <div className="flex">
            {/* Categories */}
            <div className="w-1/2 border-r border-gray-200 pr-3">
              <h4 className="font-semibold text-gray-700 mb-2">Category</h4>
              {FilterFields[FilteringField as keyof typeof FilterFields].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-md mb-1 transition ${
                      selectedCategory === cat
                        ? "bg-[#7ed957] text-black font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            {/* Options */}
            <div className="w-1/2 pl-4">
              <h4 className="font-semibold text-gray-700 mb-2">
                {selectedCategory} Options
              </h4>
              <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                {FilterFields[
                  selectedCategory as keyof typeof FilterFields
                ]?.map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#7ed957]"
                      checked={
                        selectedFilters[selectedCategory]?.includes(option) ||
                        false
                      }
                      onChange={() =>
                        handleCheckboxChange(selectedCategory, option)
                      }
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-5 flex justify-between items-center border-t pt-3">
            <div className="w-2/3">
              {Object.keys(selectedFilters).length > 0 && (
                <div className="flex gap-2">
                  <button
                    onClick={clearAll}
                    className="px-5 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                  >
                    Clear All
                  </button>

                  <button
                    onClick={clearCategory}
                    className="px-5 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={applyFilters}
              className="px-5 py-1 bg-[#7ed957] text-black rounded-md hover:bg-green-500 transition"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
