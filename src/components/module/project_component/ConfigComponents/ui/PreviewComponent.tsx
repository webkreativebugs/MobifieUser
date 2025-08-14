import { LayoutData } from "../../../../../pages/customize_pages/ui-config/page";

function PreviewComponent(props: LayoutData) {
  //   console.log(props);
  // const { header, footer, main } = props;
  return (
    <div
      className="border-l-2 flex flex-col justify-center ml-10 pl-10 w-[25vw] "
      style={{ height: "100%" }}
    >
      <h1 className="text-3xl mx-6 font-bold mb-0">Preview</h1>

      <div className="flex justify-center p-4">
        {/* Phone Frame */}
        <div className="relative w-full max-w-[393px] aspect-[393/840] bg-black rounded-[3rem] shadow-2xl p-[10px]">
          {/* Screen */}
          <div className="flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10" />

            {/* Header */}
            <div className="flex-shrink-2">
              <img
                src={props?.header.url}
                className="w-full"
                onClick={() => alert("want to delete")}
              />
            </div>

            {/* Scrollable main */}
            <div className="flex-1 overflow-y-auto hide-scrollbar border">
              {props.main.map((item, idx) => (
                <img key={idx} src={item.url} alt="" className="w-full" />
              ))}
            </div>

            {/* Footer */}
            <div className="flex-shrink-0">
              <img src={props?.footer.url} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useRef } from "react";

// interface PreviewComponentProps {
//   first: string;
// }

// function PreviewComponent({ first }: PreviewComponentProps) {
//   const screenRef = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState<{ x: number; y: number }>({
//     x: 0,
//     y: 0,
//   });
//   const [dragging, setDragging] = useState(false);
//   const offsetRef = useRef({ x: 0, y: 0 });

//   const onMouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
//     setDragging(true);
//     const rect = e.currentTarget.getBoundingClientRect();
//     offsetRef.current = {
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     };
//   };

//   const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     if (!dragging || !screenRef.current) return;

//     const parentRect = screenRef.current.getBoundingClientRect();
//     const imgWidth = e.currentTarget.querySelector("img")?.clientWidth || 0;
//     const imgHeight = e.currentTarget.querySelector("img")?.clientHeight || 0;

//     let x = e.clientX - parentRect.left - offsetRef.current.x;
//     let y = e.clientY - parentRect.top - offsetRef.current.y;

//     // Keep image inside screen bounds
//     x = Math.max(0, Math.min(x, parentRect.width - imgWidth));
//     y = Math.max(0, Math.min(y, parentRect.height - imgHeight));

//     setPosition({ x, y });
//   };

//   const onMouseUp = () => {
//     setDragging(false);
//   };

//   return (
//     <div className="border-l-2 flex flex-col justify-center ml-10 pl-10">
//       <h1 className="text-3xl mx-6 font-bold mb-0">Preview</h1>

//       <div className="flex justify-center p-4">
//         {/* iPhone frame */}
//         <div className="relative w-[393px] h-[840px] bg-black rounded-[3rem] shadow-2xl p-[10px]">
//           {/* Screen */}
//           <div
//             ref={screenRef}
//             className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden"
//             onMouseMove={onMouseMove}
//             onMouseUp={onMouseUp}
//           >
//             {/* Dynamic Island */}
//             <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 pt-8 border bg-black rounded-full z-10" />

//             {/* Image (draggable) */}
//             <div className="relative mt-12 h-full px-1">
//               <img
//                 src={first}
//                 alt=""
//                 onMouseDown={onMouseDown}
//                 className="absolute cursor-move select-none pb-4 px-1"
//                 style={{
//                   left: position.x,
//                   top: position.y,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default PreviewComponent;
