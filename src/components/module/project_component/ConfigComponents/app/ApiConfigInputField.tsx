interface PROPS {
  title: string;
  placeholder: string;
  type?: string; // input type (text, email, password, etc.)
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  options?: string[];
  disabled?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  rounded?: boolean;
  AreaDisable:boolean
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
  disabled,
  AreaDisable=false,
  onBlur,
}: PROPS) => {
  return (
    <div className={`flex justify-between w-full mb-4 `}>
      {type !== "select" ? (
        <>
          <label
            htmlFor={name}
            className="mb-2 pb-2 text-md flex items-center mt-2 font-medium text-lg text-gray-700"
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
            disabled={disabled||AreaDisable}
            onBlur={onBlur}
            className={`border-b w-2/3 text-md border-b-gray-300  px-3 py-3 placeholder:text-gray-500  focus:outline-none bg-transparent   focus:border-b-gray-700 transition
                     ${disabled && "placeholder:text-gray-400"}`}
          />
        </>
      ) : (
        <>
          <label
            htmlFor={name}
            className="mb-2 text-md font-medium text-gray-700"
          >
            {title} {required && <span className="text-red-500">*</span>}
          </label>
          <select
            name={name}
            className="border-b border-b-gray-300  px-3 py-3 w-2/3  text-sm bg-transparent focus:outline-none  focus:border-gray-700 transition"
          >
            {(options ?? []).map((item) => (
              <option key={item} value={item} className="rounded-md">
                {item}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default ApiConfigInputField;
