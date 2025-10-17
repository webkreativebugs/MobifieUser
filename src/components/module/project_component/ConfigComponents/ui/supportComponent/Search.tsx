import { SetStateAction, Dispatch } from "react";
import { CiSearch } from "react-icons/ci";

interface value {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

function Search({ searchValue, setSearchValue }: value) {
  console.log(searchValue);
  return (
    <div className="w-full flex items-center border h-14 shadow-md  px-4 rounded-lg">
      {/* Icon */}
      <CiSearch className="text-gray-500 mr-2" />

      {/* Input */}
      <input
        value={searchValue}
        className="flex-1 h-full outline-none"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
