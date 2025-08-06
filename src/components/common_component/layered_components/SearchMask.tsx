interface PROPS{
    value:string,
    handler :(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void
}

const SearchMask = ({value,handler}:PROPS) => {
  return (
    <div className=" relative w-3/5 text-black">
              <input
                type="text"
                placeholder="Search..."
                value={value}
                name="search"
                onChange={handler}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-300 shadow-sm"
              />
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
        </div>
  )
}

export default SearchMask
