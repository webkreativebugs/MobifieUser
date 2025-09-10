// import { YouConfigDefaultValue } from "../../../../../data/CustomizeData/YouConfigComponents";
// import menuConfig from "../../../../../data/CustomizeData/YouCards.json"
// import { SetStateAction,Dispatch } from "react";
// import { LeftSelectedComponents } from "../../../../../../enum/YouConfig.enum";
// import { IconType } from "react-icons";
// type YouConfigKeys = keyof typeof YouConfigDefaultValue;

interface PROPS {
  data:string
  // setLeftSelected:Dispatch<SetStateAction<Set<LeftSelectedComponents>>> 
  // setRightSelected:Dispatch<SetStateAction<RightSelectedComponents>>;
}

const CustomComponents = ({data}:PROPS) => {

  // const { icon: Icon, text, subtext } = YouConfigDefaultValue[name];
// const ArrowIcon = selectedArrow; 
  return (
     <div
      className="w-9/12"
      dangerouslySetInnerHTML={{ __html:data }}
    />
  );
};

export default CustomComponents;
