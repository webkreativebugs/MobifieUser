import { Dispatch, SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";

interface Query {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

function Search({ searchQuery, setSearchQuery }: Query) {
  return (
    <div className="mt-6 flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#7ed957] focus-within:border-transparent shadow-sm">
      <IoSearch className="text-gray-500 text-xl" />

      <input
        id="simple"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}

export default Search;
