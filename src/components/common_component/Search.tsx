import { Dispatch, SetStateAction } from "react";

interface Query {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

function Search({ searchQuery, setSearchQuery }: Query) {
  return (
    <div className="mt-6">
      <input
        id="simple"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search...."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
      />
    </div>
  );
}

export default Search;
