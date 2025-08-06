interface PROPS{
    handler :(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void
    optionsArray: string[],
    value:string
}

const FilterMask = ({handler,optionsArray,value}:PROPS) => {
  return (
           <select
              value={value}
              name="type"
              onChange={handler}
              className="w-2/5 h-10 p-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-300 shadow-sm cursor-pointer bg-white"
            >
                {
             optionsArray.map((value, idx) => (
               <option className={`rounded-md`} key={idx} value={value}>
                 {value}
               </option>
             ))
            }
            </select>
  )
}

export default FilterMask
