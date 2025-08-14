import React, { useState } from "react";

interface HeaderField {
  key: string;
  value: string;
}

interface ApiFormData {
  id: number;
  headers: HeaderField[];
  newHeader: HeaderField;
}

const ApiRequestForms: React.FC = () => {
  const [forms, setForms] = useState<ApiFormData[]>([
    { id: 1, headers: [], newHeader: { key: "", value: "" } },
  ]);

  // Add new form
  const addForm = () => {
    setForms((prev) => [
      ...prev,
      { id: Date.now(), headers: [], newHeader: { key: "", value: "" } },
    ]);
  };

  // Update specific form fields
  const updateForm = (id: number, updatedData: Partial<ApiFormData>) => {
    setForms((prev) =>
      prev.map((form) => (form.id === id ? { ...form, ...updatedData } : form))
    );
  };

  // Add header to specific form
  const addHeaderToForm = (id: number) => {
    setForms((prev) =>
      prev.map((form) => {
        if (form.id === id && form.newHeader.key && form.newHeader.value) {
          return {
            ...form,
            headers: [...form.headers, form.newHeader],
            newHeader: { key: "", value: "" },
          };
        }
        return form;
      })
    );
  };

  return (
    <div className="w-full relative ">
      {/* Add Form Button */}
    

      {/* All Forms */}
   
        <div
          className="w-full font-sans "
        >
          <div className="flex justify-between">
          {/* <h2 className="text-lg font-bold">API Request Form</h2> */}
           <p  className="mb-4 text-lg font-medium text-gray-700">  API Request Form  </p>
             <div className="flex justify-end">
        <button
          onClick={addForm}
          className="bg-gray-600 text-white rounded-md flex items-center p-2 mb-2 text-md"
        >
          Increase 
        </button>
        </div>
      </div>

          {/* API URL */}
         {forms.map((form) => (
          <form className="bg-white  w-full grid grid-cols-2 gap-5 p-8 rounded-md "  key={form.id} >
          <div>
            <label className="block font-semibold mb-1">API URL</label>
            <input
              type="text"
              placeholder="https://api.example.com/data"
              className="border rounded p-2 w-full"
            />
          </div>

          {/* Method */}
          <div>
            <label className="block font-semibold mb-1">HTTP Method</label>
            <select className="border rounded p-2 w-full">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>
          </div>

          {/* Request Body */}
          <div>
            <label className="block font-semibold mb-1">Request Body (JSON)</label>
            <textarea
              placeholder='{"key": "value"}'
              rows={4}
              className="border rounded p-2 w-full"
            />
          </div>

          {/* Headers */}
          <div>
            <label className="block font-semibold mb-1">Headers</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Header Key"
                value={form.newHeader.key}
                onChange={(e) =>
                  updateForm(form.id, {
                    newHeader: { ...form.newHeader, key: e.target.value },
                  })
                }
                className="border rounded p-2 flex-1"
              />
              <input
                type="text"
                placeholder="Header Value"
                value={form.newHeader.value}
                onChange={(e) =>
                  updateForm(form.id, {
                    newHeader: { ...form.newHeader, value: e.target.value },
                  })
                }
                className="border rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={() => addHeaderToForm(form.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Add
              </button>
            </div>

            {/* Header List */}
            {form.headers.length > 0 && (
              <ul className="border rounded p-2 bg-gray-50 space-y-1">
                {form.headers.map((h, i) => (
                  <li key={i} className="flex justify-between">
                    <span className="font-mono">
                      {h.key}: {h.value}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button (No API Call) */}
          <button
            type="button"
            className="bg-green-500 text-white w-full py-2 rounded"
          >
            Submit
          </button>
          </form>
           ))}
        </div>
     
    </div>
  );
};

export default ApiRequestForms;
