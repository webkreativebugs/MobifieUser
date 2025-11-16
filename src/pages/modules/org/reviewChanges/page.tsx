import { useEffect, useState } from "react";
import Navbar from "../../../../components/common_component/Navbar";
import { Link } from "react-router-dom";

function page() {
  const [saveChange, setSaveChange] = useState(false);
  useEffect(() => {
    localStorage.setItem("change", JSON.stringify(saveChange));
  });

  const [config, setConfig] = useState<
    {
      title: string;
      description: string;
      createddate: number;
      createdby: string;
    }[]
  >([]);

  useEffect(() => {
    const existingData = localStorage.getItem("configDetails");
    if (existingData) {
      const parsed = JSON.parse(existingData);
      setConfig(parsed);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full px-32 mt-24">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-2 relative overflow-hidden">
          {/* LEFT SIDE - APP CHANGES */}
          <div className="border-r border-gray-100 pr-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              App Changes
            </h1>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">1.</span>
                <span>App key changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">2.</span>
                <span>Project display name changes</span>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE - SCREEN CHANGES */}
        </div>
      </div>
      <div className="w-full px-32 mt-2">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-2 relative overflow-hidden">
          <div className="pl-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Screen Changes
            </h1>
            <div className="border-b overflow-hidden">
              {/* Header Row */}
              <div className="flex justify-between bg-gray-100 px-4 py-2 border-b">
                <h1 className="text-sm font-semibold text-gray-600 w-1/4">
                  SCREEN
                </h1>
                <h1 className="text-sm font-semibold text-gray-600 w-2/4">
                  DESCRIPTION
                </h1>
                <h1 className="text-sm font-semibold text-gray-600 w-1/4 text-right">
                  ACTION
                </h1>
              </div>

              {/* Data Rows */}
              {config.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-50 transition-all"
                >
                  <h1 className="text-gray-800 font-medium w-1/4">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 text-sm w-2/4">
                    {item.description}
                  </p>
                  <button
                    // onClick={() => handleView(item)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm w-1/4 text-right"
                  >
                    See More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-32 flex justify-end gap-2 mt-4">
        {" "}
        <Link
          //   onClick={() => setIsEdit(true)}
          className="px-6 py-2 rounded-lg  text-black border-2 hover:bg-white hover:text-primary transition-all "
          to="/project/edit-screen-config"
          //   state={{ type: ScreenType.MAIN }}
        >
          Edit Changes
        </Link>
        <button
          onClick={() => setSaveChange(true)}
          className="px-6 py-2 rounded-lg border text-white bg-black  hover:text-primary transition-all mr-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default page;
