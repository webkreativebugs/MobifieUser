import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";

function FilterSortSearchRapper() {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState<string>("Select");

  const handleRemoveFilter = (category: string, option: string) => {
    setSelectedFilters((prev) => {
      const updatedOptions = prev[category].filter((o) => o !== option);

      // If the category becomes empty → delete the category
      if (updatedOptions.length === 0) {
        const updated = { ...prev };
        delete updated[category];
        return updated;
      }

      return { ...prev, [category]: updatedOptions };
    });
  };
  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex gap-4">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Filter
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <Sort sortQuery={sortQuery} setSortQuery={setSortQuery} />
      </div>
      <div>
        <div className=" flex  gap-2 mb-4 ">
          {Object.entries(selectedFilters).map(([category, options]) => (
            <div key={category} className="bg-white gap-2   ">
              <div className="flex flex-wrap gap-2">
                {(options as string[]).map((option) => (
                  <span
                    key={option}
                    className="flex items-center gap-0 px-3 py-1 bg-red-100 text-red-600 font-medium rounded-full text-sm shadow-sm hover:bg-red-200 transition"
                  >
                    {option}
                    <button
                      onClick={() => handleRemoveFilter(category, option)}
                      className="text-red-500 hover:text-red-700 font-bold ml-1"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSortSearchRapper;
