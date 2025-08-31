import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask";
import { ConfigTypeEnums, CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import { useState } from "react";
import { YouClientConfiguration } from "../../../data/CustomizeData/ClientConfiguration";

const Page = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [leftChecked, setLeftChecked] = useState<Record<string, boolean>>({});
  const [rightChecked, setRightChecked] = useState<Record<string, boolean>>({});

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

  const toggleLeft = (key: string) => {
    setLeftChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleRight = (key: string) => {
    setRightChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  
  
  return (
    <AppConfigMask name={CustomizeDashboardTypeEnums.APP} displayName={ConfigTypeEnums.YOU}>
      <div className=" flex flex-col gap-5  ">
        {YouClientConfiguration.map((item) => {
          const isSelected = selectedKeys.has(item.key);
          return (
            <div className="border-b-2  border-b-slate-200" >

            <div key={item.key} className=" flex   w-1/2 xl:w-1/5 justify-between py-4 space-x-4">

              {/* Main Checkbox */}
              <div>
              
              <label className="flex text-md font-bold mb-2 text-gray-700 items-center space-x-1 text-lg cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSelected}
                  className="text-black mr-5"
                  onChange={() => toggleSelection(item.key)}

                />
              <span>  {item.icon && <item.icon />}</span>  <span>{item.title}</span>
              </label>
            </div>
          <div>
              {/* Left Checkbox */}
              <label className="flex  text-md space-x-1 mb-0 pb-0 cursor-pointer">
                <input
                  type="checkbox"
                  disabled={!isSelected}
                  checked={!!leftChecked[item.key]}
                  onChange={() => toggleLeft(item.key)}
                
                />
                <span className={`${isSelected?"text-black":"text-gray-500"}`}>Left icon</span>
              </label>
              <div className=" flex w-1/2 pl-1.5">
             <div className="h-5 border-l-2 border-gray-400  "/>
             </div>
              {/* Right Checkbox */}
              <label className="flex items-center text-md space-x-1 cursor-pointer">
                <input
                  type="checkbox"
                  disabled={!isSelected}
                  checked={!!rightChecked[item.key]}
                  onChange={() => toggleRight(item.key)}
                />
                <span className={`${isSelected?"text-black":"text-gray-500"}`}>Right icon</span>
              </label>
              </div>
             
            </div>
            </div>
          );
        })}

        {/* Debug output */}
       
      </div>
 <div className="mt-6">
  <h3 className="font-bold mb-2">Debug State</h3>

  <div className="relative bg-gray-100 p-3 rounded-md">
    <pre className="text-sm overflow-x-auto">
    {JSON.stringify(
      YouClientConfiguration.filter((item) =>
        selectedKeys.has(item.key)
      ).map((item) => {
        return {
          key: item.key,
          icon: item.icon,
          navigationData: "{}",
          title: item.title,
          componentName: item.componentName,

          // ✅ only include these if checked
          ...(leftChecked[item.key] && {
            leftIcon: "KBIconName.Edit",
            leftIconSet: "KBIconSet.MaterialIcons",
          }),
          ...(rightChecked[item.key] && {
            rightIcon: "KBIconName.ArrowForward",
            rightIconSet: "KBIconSet.MaterialIcons",
          }),
        };
      }),
      null,
      2
    )}
    
    </pre>

   <button
  className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
  onClick={() => {
    const exportData = YouClientConfiguration.filter((item) =>
      selectedKeys.has(item.key)
    ).map((item) => {
      return {
        key: item.key,
        icon: item.icon,
        navigationData: "{}",
        title: item.title,
        componentName: item.componentName,

        // ✅ only include these if checked
        ...(leftChecked[item.key] && {
          leftIcon: "KBIconName.Edit",
          leftIconSet: "KBIconSet.MaterialIcons",
        }),
        ...(rightChecked[item.key] && {
          rightIcon: "KBIconName.ArrowForward",
          rightIconSet: "KBIconSet.MaterialIcons",
        }),
      };
    });

    navigator.clipboard.writeText(
      JSON.stringify(exportData, null, 2)
    );
  }}
>
  Copy
</button>
  </div>
</div>

    </AppConfigMask>
  );
};

export default Page;
