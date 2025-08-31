interface PROPS {
  title: string;
  placeholder: string;
  type?: string; // input type (text, email, password, etc.)
  name: string; 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  options?: string[];
  disabled?:boolean
}

const ApiConfigInputField = ({
  title,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  options,
  disabled=false
}: PROPS) => {
  return (
    <div className="flex flex-col w-full mb-4">
      {
        type!=="select"?
      <>
      <label
        htmlFor={name}
        className="mb-2 text-md font-medium text-gray-700"
      >
        {title} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
      />
      </>
      :
      <>
       <label
        htmlFor={name}
        className="mb-2 text-md font-medium text-gray-700"
      >{title} {required && <span className="text-red-500">*</span>}</label>
      <select name={name}  className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition">
        {
          (options ?? []).map((item) => (
            <option key={item} value={item} className="rounded-md" >
              {item}
            </option>
          ))
        }
      </select>
      </>
    }
    </div>
  );
};

export default ApiConfigInputField;
