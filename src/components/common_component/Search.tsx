import React from "react";

function Search() {
  return (
    <div className="mt-6">
      <input
        id="simple"
        type="text"
        placeholder="Search...."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
      />
    </div>
  );
}

export default Search;
