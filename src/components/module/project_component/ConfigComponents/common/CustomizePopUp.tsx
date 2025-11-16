import { ReactNode } from "react";
interface PROPS {
  children: ReactNode;
  setPOpUp: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomizePopUp({ children, setPOpUp }: PROPS) {
  return (
    <div
      onClick={() => setPOpUp(false)}
      className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-50 mt-[-5rem]"
    >
      {/* <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-1/4 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white"
      > */}
      {children}
      {/* </div>{" "} */}
    </div>
  );
}

export default CustomizePopUp;
