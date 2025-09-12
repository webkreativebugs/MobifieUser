<<<<<<< HEAD
import React from "react";

function HeaderScreen() {
  return (
    <div className="w-full p-20 space-y-4">
      <div className="bg-primary  rounded-lg  w-full h-60 p-4">
=======
import { useState, useRef } from "react";
import { useUi } from "../../../../../../src/context/ui_context/UiContext";

// 🔹 Types
interface Icon {
  name: string;
  svg: string;
}

interface HeaderProps {
  logoText: string;
  placeholder: string;
  leftIcons: Icon[];
  rightIcons: Icon[];
}

interface HeaderData {
  component: string;
  type: string;
  props: HeaderProps;
}

function HeaderScreen({ element }: { element: string }) {
  const { uiConfig, setUiConfig } = useUi();
  const contextData = uiConfig[element]["Header"] as HeaderData;

  // 🔹 Local editable state
  const [headerData, setHeaderData] = useState<HeaderData>(contextData);

  // 🔹 Backup of original context data (never changes)
  const originalData = useRef<HeaderData>(contextData);

  // 🔹 Helper: get svg from backup (not mutated context)
  const getSvgFromBackup = (side: "leftIcons" | "rightIcons", name: string) => {
    return (
      (originalData.current.props[side] as Icon[])?.find((i) => i.name === name)
        ?.svg || ""
    );
  };

  // 🔹 Toggle icon locally
  const handleToggle = (
    side: "leftIcons" | "rightIcons",
    index: number,
    name: string
  ) => {
    setHeaderData((prev) => {
      const updatedIcons = [...prev.props[side]];
      const icon = updatedIcons[index];

      if (icon.svg) {
        // ✅ Currently checked → uncheck (empty svg)
        updatedIcons[index] = { ...icon, svg: "" };
      } else {
        // ✅ Currently unchecked → restore svg from backup
        const restoredSvg = getSvgFromBackup(side, name);
        updatedIcons[index] = { ...icon, svg: restoredSvg };
      }

      return {
        ...prev,
        props: {
          ...prev.props,
          [side]: updatedIcons,
        },
      };
    });
  };

  // 🔹 Save changes to context
  const handleSave = () => {
    setUiConfig((prev: any) => ({
      ...prev,
      [element]: {
        ...prev[element],
        Header: headerData,
      },
    }));
    console.log("✅ Header data saved to uiConfig:", headerData);
  };

  return (
    <div className="w-full p-20 space-y-6">
      {/* Left Icons */}
      <div className="bg-primary rounded-lg w-full h-60 p-4">
>>>>>>> 20116fd45904cfe4d9f61e041965fdcb2fe851c6
        <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
          Left View
        </h1>

<<<<<<< HEAD
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>title</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>share Icon</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />

            <span>Back Icon</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />

            <span>List Icon</span>
          </label>
        </div>
      </div>
      <div className="bg-primary  rounded-lg  w-full h-60 p-4">
=======
        {headerData.props.leftIcons.map((icon, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!!icon.svg} // ✅ checkbox state depends on svg swfdefaesfsfsdfsdfdfsfsdfsdfdsf
              onChange={() => handleToggle("leftIcons", idx, icon.name)}
              className="h-4 w-4"
            />
            <span>{icon.name}</span>
          </label>
        ))}
      </div>

      {/* Right Icons */}
      <div className="bg-primary rounded-lg w-full h-60 p-4">
>>>>>>> 20116fd45904cfe4d9f61e041965fdcb2fe851c6
        <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
          Right View
        </h1>

<<<<<<< HEAD
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>Cart Icon </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span>Share Icon </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              // checked={selected.includes(item)}
              // onChange={() => handleCheck(item)}
              className="h-4 w-4"
            />
            <span> Icon </span>
          </label>
        </div>
=======
        {headerData.props.rightIcons.map((icon, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!!icon.svg}
              onChange={() => handleToggle("rightIcons", idx, icon.name)}
              className="h-4 w-4"
            />
            <span>{icon.name}</span>
          </label>
        ))}
      </div>

      {/* Save Changes */}
      <div className="w-full flex justify-end mx-6 mb-2">
        <button
          onClick={handleSave}
          className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition 
             hover:bg-gray-100 active:scale-95 active:bg-gray-200"
        >
          Save Changes
        </button>
>>>>>>> 20116fd45904cfe4d9f61e041965fdcb2fe851c6
      </div>
    </div>
  );
}

export default HeaderScreen;
<<<<<<< HEAD
=======
//new changes
// import { useState } from "react";
// import { useUi } from "../../../../../../src/context/ui_context/UiContext";

// // 🔹 Types
// interface Icon {
//   name: string;
//   svg: string;
//   selected?: boolean;
// }

// interface HeaderProps {
//   logoText: string;
//   placeholder: string;
//   leftIcons: Icon[];
//   rightIcons: Icon[];
// }

// interface HeaderData {
//   component: string;
//   type: string;
//   props: HeaderProps;
// }

// function HeaderScreen({ element }: { element: string }) {
//   const { uiConfig, setUiConfig } = useUi();
//   const data = uiConfig[element]["Header"] as HeaderData;

//   const [headerData, setHeaderData] = useState<HeaderData>({
//     ...data,
//     props: {
//       ...data.props,
//       leftIcons: data.props.leftIcons.map((icon) => ({
//         ...icon,
//         selected: true,
//       })),
//       rightIcons: data.props.rightIcons.map((icon) => ({
//         ...icon,
//         selected: true,
//       })),
//     },
//   });

//   const handleToggle = (side: "leftIcons" | "rightIcons", index: number) => {
//     setHeaderData((prev) => {
//       const updatedIcons = [...prev.props[side]];
//       const icon = updatedIcons[index];

//       // Toggle selected
//       const newSelected = !icon.selected;

//       // Restore svg from uiConfig if rechecked
//       const restoredSvg = newSelected
//         ? (uiConfig[element]["Header"].props[side] as Icon[]).find(
//             (i: Icon) => i.name === icon.name
//           )?.svg || ""
//         : "";

//       updatedIcons[index] = {
//         ...icon,
//         selected: newSelected,
//         svg: restoredSvg,
//       };

//       return {
//         ...prev,
//         props: {
//           ...prev.props,
//           [side]: updatedIcons,
//         },
//       };
//     });
//   };

//   const handleSave = () => {
//     setUiConfig((prev: any) => ({
//       ...prev,
//       [element]: {
//         ...prev[element],
//         Header: headerData,
//       },
//     }));
//     console.log("✅ Saved Header Data into uiConfig:", headerData);
//   };

//   return (
//     <div className="w-full p-20 space-y-6">
//       {/* Left Icons */}
//       <div className="bg-primary rounded-lg w-full h-60 p-4">
//         <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
//           Left View
//         </h1>

//         {headerData.props.leftIcons.map((icon, idx) => (
//           <label key={idx} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={icon.selected}
//               onChange={() => handleToggle("leftIcons", idx)}
//               className="h-4 w-4"
//             />
//             <span>{icon.name}</span>
//           </label>
//         ))}
//       </div>

//       {/* Right Icons */}
//       <div className="bg-primary rounded-lg w-full h-60 p-4">
//         <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
//           Right View
//         </h1>

//         {headerData.props.rightIcons.map((icon, idx) => (
//           <label key={idx} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={icon.selected}
//               onChange={() => handleToggle("rightIcons", idx)}
//               className="h-4 w-4"
//             />
//             <span>{icon.name}</span>
//           </label>
//         ))}
//       </div>

//       {/* Save Button */}
//       <div className="w-full flex justify-end mx-6 mb-2">
//         <button
//           onClick={handleSave}
//           className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition
//              hover:bg-gray-100 active:scale-95 active:bg-gray-200"
//         >
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HeaderScreen;
>>>>>>> 20116fd45904cfe4d9f61e041965fdcb2fe851c6
