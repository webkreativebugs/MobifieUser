import CustomComponents from "./CustomComponents";
import { YouConfigDefaultValue,Arrows } from "../../../../../data/CustomizeData/YouConfigComponents";
import { CheckboxesData } from "../../../../../data/CustomizeData/YouConfigComponents";
import { RxCross1 } from "react-icons/rx";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import { RightSelectedComponents,LeftSelectedComponents } from "../../../../../../enum/YouConfig.enum";
import { IconType } from "react-icons";
type YouConfigKeys = keyof typeof YouConfigDefaultValue;

// import { X } from "react-icons"; 
interface CustomizedPopupProps {
  popped: boolean;
  onClose: () => void;
  name:YouConfigKeys;
  leftSelected:Set<string>;
  rightSelected:string;
  setLeftSelected:Dispatch<SetStateAction<Set<LeftSelectedComponents>>> 
  setRightSelected:Dispatch<SetStateAction<RightSelectedComponents>>;
  selectedArrow:IconType
  setSelectedArrow:Dispatch<SetStateAction<IconType>>
}

const CustomizedPopup = ({ popped, onClose, name,leftSelected,rightSelected,setLeftSelected,setRightSelected ,selectedArrow,setSelectedArrow}: CustomizedPopupProps) => {
  if (!popped) return null;

  function handleRight(item:RightSelectedComponents){
  setRightSelected(item)
  setSelectedArrow(Arrows[item][0])
  }

  function handleLeft(item: LeftSelectedComponents) {
  setLeftSelected(prev => {
    const updated = new Set(prev);
    if (updated.has(item)) {
      updated.delete(item);
    } else {
      updated.add(item);
    }
    return updated;
  });
}


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className="relative z-10 w-1/2 h-1/2 p-6 bg-white rounded-xl shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
         <RxCross1/>
        </button>
        <div className=" h-full ">
        <div className="flex justify-center mt-5">
        <CustomComponents 
        name={name}
        leftSelected={leftSelected}
        rightSelected={rightSelected}
        selectedArrow={selectedArrow}
        />
        </div>
         <div className="flex justify-around mt-5">
          <div>
            <p className="text-xl font-semibold mb-2">Left</p>
       
            {CheckboxesData.Left.map((item)=>(
                <div className="checkbox-wrapper-4 ">
  <input className="inp-cbx" id={item} type="checkbox" checked={leftSelected.has(item)} onClick={()=>handleLeft(item)} />
  <label className="cbx" htmlFor={item}><span>
  <svg width="12px" height="10px">
    
  </svg></span><span>{item}</span></label>
  <svg className="inline-svg">
    <symbol id="check-4" viewBox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
  </svg>
</div>
            ))

            }
       
           </div>
           <div>
            <p className="text-xl font-semibold mb-2">Right</p>
         
            {CheckboxesData.Right.map((item)=>(
              <div className="checkbox-wrapper-4 ">
  <input className="inp-cbx" id={item} type="checkbox" checked={rightSelected===item} onClick={()=>handleRight(item)} />
  <label className="cbx" htmlFor={item}><span>
  <svg width="12px" height="10px">
    
  </svg></span><span>{item}</span></label>
  <svg className="inline-svg">
    <symbol id="check-4" viewBox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
  </svg>
</div>
            ))

            }
           </div>
        <div>
  <p className="text-xl font-semibold mb-2">Arrows</p>
  {Arrows[rightSelected as keyof typeof Arrows].map((item, idx) => {
    const itemId = `arrow-${idx}`; // generate unique id
    const Item=item
console.log('Item===>',item, Arrows,selectedArrow);

    return (
      <div className="checkbox-wrapper-4" key={idx}>
        <input
          className="inp-cbx"
          id={itemId}
          type="checkbox"
          checked={selectedArrow == item}
          onClick={() => setSelectedArrow(item)} // ✅ update state here
        />
        <label className="cbx" htmlFor={itemId}>
          <span>
            <svg width="12px" height="10px"></svg>
          </span>
          <span>
            <Item className="w-6 h-6 text-gray-600" />
          </span>
        </label>
      </div>
    );
  })}
</div>

        </div>
         </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomizedPopup;

