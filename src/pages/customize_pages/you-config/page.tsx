import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask";
import { ConfigTypeEnums, CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import { useState } from "react";
import { YouClientConfiguration } from "../../../data/CustomizeData/ClientConfiguration";
import CustomComponents from "../../../components/module/project_component/ConfigComponents/app/CustomComponents";
import CustomizedPopup from "../../../components/module/project_component/ConfigComponents/app/CustomizedPopup";
import { RightSelectedComponents ,LeftSelectedComponents} from "../../../../enum/YouConfig.enum";
import { Arrows } from "../../../data/CustomizeData/YouConfigComponents";
import { IconType } from "react-icons";
// import { useEffect } from "react";
// import {YouConfigType} from "../../../../enum/YouConfig.enum"

const Page = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [leftChecked, setLeftChecked] = useState<Record<string, boolean>>({});
  const [rightChecked, setRightChecked] = useState<Record<string, boolean>>({});
  // const [leftCheckbox,setLeftCheckbox]=useState({icon:true,text:true,arrow:false})
  // const [rightCheckbox,setRightCheckbox]=useState({icon:false,arrow:true,text:false})
  const [popped,setPopped]=useState<boolean>(false)
  const [rightSelected, setRightSelected] = useState(RightSelectedComponents.RIGHT);
  const [leftSelected,setLeftSelected ]=useState<Set<LeftSelectedComponents>>(new Set(Object.values(LeftSelectedComponents)));   
  const [selectedArrow,setSelectedArrow]=useState<IconType>(Arrows[RightSelectedComponents.RIGHT][0])
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

  function onClose()
  {
    setPopped(false)
  }
  
  return (
    <>
    <AppConfigMask
  name={CustomizeDashboardTypeEnums.APP}
  displayName={ConfigTypeEnums.YOU}
  display=""
>
  <div className="flex flex-col gap-6 bg-white p-6 pt-8 ">
    {YouClientConfiguration.map((item) => {
      const isSelected = selectedKeys.has(item.key);

      return (
        <div
          key={item.key}
          className="border-b border-slate-200 pb-4 last:border-none"
        >
          {/* Row */}
          <div className="flex items-center justify-between gap-6">
            {/* Checkbox + Label */}
            <label className="flex items-center gap-3 cursor-pointer w-1/5 font-semibold text-gray-700">
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
              <div className="flex w-2/3 justify-between rounded-md h-20 items-center p-4 pt-1 pb-1 ">
                <CustomComponents 
                name={item.key}
                leftSelected={leftSelected}
                rightSelected={rightSelected}
                selectedArrow={selectedArrow}

                />
                <button className="px-4 py-2 ml-2 shadow-md  text-white text-sm rounded-md self-center  button transition"
               onClick={()=> setPopped(true)}
                >
                  Customize
                </button>
              </div>
                <CustomizedPopup 
                popped={popped} 
                onClose={onClose}
                name={item.key}
                leftSelected={leftSelected}
                rightSelected={rightSelected}
                setLeftSelected={setLeftSelected}
                setRightSelected={setRightSelected}
                selectedArrow={selectedArrow}
                setSelectedArrow={setSelectedArrow}
                  />
              </>
            )}
          
          </div>
        </div>
      );
    })}
  </div>

  {/* ✅ Debug Output Section */}
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
            componentName: item.componentName,
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
            componentName: item.componentName,
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
</AppConfigMask>
</>

  );
};

export default Page;
