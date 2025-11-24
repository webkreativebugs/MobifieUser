// import AppConfigMask from "../../../project_component/ConfigComponents/app/AppConfigMask";
// import { ConfigTypeEnums, CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { useState } from "react";
import { YouClientConfiguration } from "../../../../../data/CustomizeData/ApiConfig";
import CustomComponents from "../../../project_component/ConfigComponents/app/CustomComponents";
import CustomizedPopup from "../../../project_component/ConfigComponents/app/CustomizedPopup";
import { YouConfigType } from "../../../../../../enum/YouConfig.enum";
import menuConfig from "../../../../../data/CustomizeData/YouCards.json";
import { FaEdit } from "react-icons/fa";
// import CustomizePopUp from "../common/CustomizePopUp";
// import { IconType } from "react-icons";
// import { useEffect } from "react";
// import {YouConfigType} from "../../../../enum/YouConfig.enum"
// type YouConfigKeys = keyof typeof YouClientConfiguration;
const YouConfig = ({ disable = false }) => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [leftChecked, setLeftChecked] = useState<Record<string, boolean>>({});
  const [rightChecked, setRightChecked] = useState<Record<string, boolean>>({});
  const [popped, setPopped] = useState<boolean>(false);
  const [popData, setPopData] = useState<YouConfigType>(YouConfigType.PROFILE);
  const [customData, setCustomData] = useState({
    [YouConfigType.PROFILE]: menuConfig[YouConfigType.PROFILE].default.html,
    [YouConfigType.ORDER]: menuConfig[YouConfigType.ORDER].default.html,
    [YouConfigType.ADDRESS]: menuConfig[YouConfigType.ADDRESS].default.html,
    [YouConfigType.SETTING]: menuConfig[YouConfigType.SETTING].default.html,
    variant: "default",
  });
  const toggleSelection = (key: string) => {
    const updated = new Set(selectedKeys);
    if (updated.has(key)) {
      updated.delete(key);
      // reset left/right when deselecting
      setLeftChecked((prev) => ({ ...prev, [key]: false }));
      setRightChecked((prev) => ({ ...prev, [key]: false }));
    } else {
      updated.add(key);
    }
    setSelectedKeys(updated);
  };

  // const toggleLeft = (key: string) => {
  //   setLeftChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  // };

  // const toggleRight = (key: string) => {
  //   setRightChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  // };

  function onClose() {
    setPopped(false);
  }

  return (
    <>
      {/* <AppConfigMask
  name={CustomizeDashboardTypeEnums.APP}
  displayName={ConfigTypeEnums.YOU}
  display="flex"
  direction="column"
> */}
      <div className="flex flex-col gap-6 bg-primary  shadow-md p-10  ">
        {YouClientConfiguration.map((item) => {
          const isSelected = selectedKeys.has(item.key);

          return (
            <div
              key={item.key}
              className="border-b border-slate-200 pb-4 last:border-none"
              aria-disabled={disable}
            >
              {/* Row */}
              <div className="flex gap-6">
                {/* Checkbox + Label */}
                <label className="flex items-center gap-3 cursor-pointer w-1/4 font-semibold text-gray-700">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    className="w-5 h-5 accent-gray-600"
                    onChange={() => toggleSelection(item.key)}
                  />
                  {item.icon && <item.icon className="text-gray-600" />}
                  <span className="text-lg">{item.title}</span>
                </label>

                {/* Config Panel */}
                {isSelected && (
                  <>
                    <div
                      className={`flex w-full justify-end   rounded-md  p-4 pt-1 pb-1 `}
                    >
                      <CustomComponents data={customData[item.key]} />
                      <button
                        disabled={disable}
                        className="px-4  py-2 ml-5 flex text-xl  w-fit   transition"
                        onClick={() => {
                          setPopped(true);
                          setPopData(item.key);
                        }}
                      >
                        <FaEdit />
                      </button>
                    </div>
                    <CustomizedPopup
                      popped={popped}
                      onClose={onClose}
                      name={popData}
                      setCustomData={setCustomData}
                      customData={customData}
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-gray-800">Debug State</h3>
          <button
            className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-500 transition"
            onClick={() => {
              const exportData = YouClientConfiguration.filter((item) =>
                selectedKeys.has(item.key)
              ).map((item) => ({
                key: item.key,
                icon: item.icon,
                navigationData: "{}",
                title: item.title,

                ...(leftChecked[item.key] && {
                  leftIcon: "KBIconName.Edit",
                  leftIconSet: "KBIconSet.MaterialIcons",
                }),
                ...(rightChecked[item.key] && {
                  rightIcon: "KBIconName.ArrowForward",
                  rightIconSet: "KBIconSet.MaterialIcons",
                }),
              }));

              navigator.clipboard.writeText(
                JSON.stringify(exportData, null, 2)
              );
            }}
          >
            Copy
          </button>
        </div>

        <div className="relative bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm shadow-inner overflow-x-auto">
          <pre>
            {JSON.stringify(
              YouClientConfiguration.filter((item) =>
                selectedKeys.has(item.key)
              ).map((item) => ({
                key: item.key,
                icon: item.icon,
                navigationData: "{}",
                title: item.title,

                ...(leftChecked[item.key] && {
                  leftIcon: "KBIconName.Edit",
                  leftIconSet: "KBIconSet.MaterialIcons",
                }),
                ...(rightChecked[item.key] && {
                  rightIcon: "KBIconName.ArrowForward",
                  rightIconSet: "KBIconSet.MaterialIcons",
                }),
              })),
              null,
              2
            )}
          </pre>
        </div>
      </section>
      {/* </AppConfigMask> */}
      {/* ✅ Debug Output Section */}
      {/* {popup && (
        <CustomizePopUp setPOpUp={setPOpUp}>
          <div>dfgdfgfd</div>
        </CustomizePopUp>
      )} {/* {popup && (
        <CustomizePopUp setPOpUp={setPOpUp}>
          <div>dfgdfgfd</div>
        </CustomizePopUp>
      )} */}
    </>
  );
};

export default YouConfig;
