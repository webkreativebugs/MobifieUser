import { YouConfigDefaultValue } from "../../../../../data/CustomizeData/YouConfigComponents";
// import { MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import { SetStateAction,Dispatch } from "react";
import { LeftSelectedComponents } from "../../../../../../enum/YouConfig.enum";
import { IconType } from "react-icons";
type YouConfigKeys = keyof typeof YouConfigDefaultValue;

interface PROPS {
  name: YouConfigKeys; 
  leftSelected:Set<string>;
  rightSelected: string;
  selectedArrow:IconType
  // setLeftSelected:Dispatch<SetStateAction<Set<LeftSelectedComponents>>> 
  // setRightSelected:Dispatch<SetStateAction<RightSelectedComponents>>;
}

const CustomComponents = ({ name ,leftSelected,selectedArrow}: PROPS) => {

  const { icon: Icon, text, subtext } = YouConfigDefaultValue[name];
// const ArrowIcon = selectedArrow; 
  return (
    <button
      type="button"
      className="flex items-center justify-between w-4/5 p-4 border rounded-lg shadow-sm bg-gray-50 transition"
    >
      {/* Left side: Icon + Text */}
      <div className="flex items-center gap-3">
        {leftSelected.has(LeftSelectedComponents.ICON)&& <Icon className="w-6 h-6 text-gray-600 " />}
       
        <div className="flex flex-col items-start">
          {leftSelected.has(LeftSelectedComponents.TEXT)&& <p className="text-base font-semibold text-gray-800">{text}</p>}
          {leftSelected.has(LeftSelectedComponents.SUBTEXT)&&<span className="text-sm text-gray-500">{subtext}</span>}
        </div>
      </div>

      {/* Right arrow */}
       {/* <ArrowIcon className="w-8 h-8 text-gray-700" />  */}
     {/* { rightSelected===RightSelectedComponents.RIGHT&&<MdKeyboardArrowRight className="w-5 h-5 text-gray-400" />}
     { rightSelected===RightSelectedComponents.DOWN&&<MdKeyboardArrowDown className="w-5 h-5 text-gray-400" />}
     { rightSelected===RightSelectedComponents.UP&&<MdKeyboardArrowUp className="w-5 h-5 text-gray-400" />} */}
    </button>
  );
};

export default CustomComponents;
