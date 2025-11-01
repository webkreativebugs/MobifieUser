import { tablinks } from "../../../../../data/TabLinks";
import { DefaultVAlues } from "../../../../../constant/APiConfigConstants/ApiConstant";
// import { Link } from "react-router-dom";

import { useorg } from "../../../../../context/org_context/OrganizationContext";
import { Dispatch } from "react";
import { Link } from "react-router-dom";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";

const TabLinks = ({
  selectedScreen,
  setSelectedScreen,
}: {
  selectedScreen: string;
  setSelectedScreen: Dispatch<React.SetStateAction<string>>;
}) => {
  const { isDisable, setIsDisable } = useSaveChanges();
  console.log(isDisable);

  const { orgDetails } = useorg();
  const mappedData = [
    { key: DefaultVAlues.API, name: "Api" },
    { key: DefaultVAlues.CLIENT, name: "Client" },
    { key: DefaultVAlues.DEFAULT, name: "Default" },
    { key: DefaultVAlues.WEB, name: "Web" },
    { key: DefaultVAlues.YOU, name: "You" },
  ];
  return (
    <div className={`bg-primary p-5 pb-0 mb-0 rounded-lg ${isDisable}`}>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-2xl font-semibold mb-2 ">
            {orgDetails?.data.name}
          </p>
          <p className="text-sm text-gray-500 mb-5">
            {"Saved at: 12 Aug 25, 04:31 pm"}
          </p>
        </div>
      </div>

      <hr />
      <div className="mt-5 mb-0 flex border-b border-gray-200">
        {mappedData.map((item, key) => {
          const isActive = selectedScreen === item.key;
          return (
            <button
              // to={item.link}
              onClick={() => {
                setSelectedScreen(item.key);
              }}
              key={key}
              className={`mr-5 w-[5rem]  text-lg font-medium transition-colors `}
            >
              <p
                className={`py-5 flex justify-center w-7/12 ${
                  isActive
                    ? "border-b-2 border-gray-900 text-black-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabLinks;
