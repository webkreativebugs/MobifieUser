9// import CustomComponents from "./CustomComponents";
// import { YouConfigDefaultValue } from "../../../../../data/CustomizeData/YouConfigComponents";
import menuConfig from "../../../../../data/CustomizeData/YouCards.json"
import { RxCross1 } from "react-icons/rx";
// type YouConfigKeys = keyof typeof YouConfigDefaultValue;
import { YouConfigType } from "../../../../../../enum/YouConfig.enum";
import { Dispatch,SetStateAction, useState } from "react";
// import { X } from "react-icons"; 
interface CUSTOMDATA{
  [YouConfigType.PROFILE]:string,
  [YouConfigType.ORDER]:string,
  [YouConfigType.ADDRESS]:string,
  [YouConfigType.SETTING]:string,
  variant:string
}
interface CustomizedPopupProps {
  popped: boolean;
  onClose: () => void;
  name:YouConfigType;
  setCustomData:Dispatch<SetStateAction<CUSTOMDATA>> 
  customData:CUSTOMDATA
}



const CustomizedPopup = ({ popped, onClose, name,setCustomData,customData}: CustomizedPopupProps) => {
  if (!popped) return null;
  const [selected,setSelected]=useState<{name:string,data:string,variant:string}>({
    name:name,
    data:menuConfig[name].default.html,
    variant:customData.variant
  })
  const sectionData = menuConfig[name];
console.log("name=>",name);

const handleSelect=(data:string,variantName:string)=>{
  setSelected(prev=>({
    ...prev,
    name:name,
    data:data,
    variant:variantName
  }))
}

  function handleClick()
  {
   setCustomData(prev => ({
  ...prev,
  [selected.name]: selected.data,
  variant:selected.variant
}));
onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className="relative z-10 w-1/2 h-9/10 p-6 bg-primary rounded-xl shadow-lg overflow-scroll hide-scrollbar ">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl focus:ring-2 focus:ring-black"

          onClick={onClose}
        >
         <RxCross1/>
        </button>
        <div className=" h-full ">
          <h1 className="text-4xl font-light flex justify-center  mb-5">Pick your choice</h1>
   <div className="grid grid-cols-1 hover:translate-x-0 gap-5 p-5 mr-5 mt-5">
  {Object.entries(sectionData).map(([variantName, config]) => (
    <button
      id={variantName}
      key={config.id}
      onClick={()=>handleSelect(config.html,variantName)}
      className={ `p-3 ${variantName===selected.variant&&"selected rounded-md"}`}
      dangerouslySetInnerHTML={{ __html: config.html }}
    />
  ))}
</div>

         <div className="flex  justify-start mt-3">
         <button
          className="button rounded-md px-5 ml-7 py-2"
          onClick={handleClick} >
            Publish Changes
          </button>

        </div>
         </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomizedPopup;

