import { useEffect, useState } from "react";
import Navbar from "../../../../components/common_component/Navbar";
import { Link } from "react-router-dom";
import { useMainScreenData } from "../../../../context/ui_context/mainScreenContext";
import { useDraftScreen } from "../../../../context/ui_context/DraftScreenContext";
import { useSaveChanges } from "../../../../context/ui_context/SaveChanges";
import Toast from "../../../../components/common_component/Toast";

function page() {
  const { setMainScreenData } = useMainScreenData();
  const { drafts, setDrafts, removeDraft } = useDraftScreen();
  const [saveChange, setSaveChange] = useState(false);
  const [displayToast, setDisplayToast] = useState(false);
  const { isActive, setIsActive } = useSaveChanges();
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

  //submit final changes
  const handleSaveChanges = () => {
    if (!drafts || drafts.length === 0) {
      console.warn("No drafts available to save.");
      return;
    }

    setMainScreenData((prev) => {
      const updated = prev.map((item) => {
        const matchedDraft = drafts.find(
          (draft) => draft.screenName === item.screenName
        );

        if (matchedDraft) {
          return {
            ...item,
            current_config: matchedDraft.draftScreen,
          };
        }

        return item;
      });

      setDrafts(() => []);

      console.log(
        "✅ Updated mainScreenData with all drafts:",
        updated,
        drafts
      );
      return updated;
    });

    setIsActive(false);
    // setIsSubmitActive(true);
  };

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
        {drafts.length > 0 && (
          <button
            onClick={() => {
              setDisplayToast(true);
              setSaveChange(true);
              handleSaveChanges();
            }}
            className="px-6 py-2 rounded-lg border text-white bg-black  hover:text-primary transition-all mr-2"
          >
            Submit
          </button>
        )}
      </div>
      <Toast
        msg="Changes are submitted"
        show={displayToast}
        onClose={() => setDisplayToast(false)}
        duration={300}
      />
    </div>
  );
}

export default page;
