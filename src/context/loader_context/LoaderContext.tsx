import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
// import AuthMe from "../../utils/api/AuthMe";
// import { decoder } from "../../utils/JwtDecoder";
// import { useNavigate } from "react-router-dom";

interface USERROLE {
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

type Props = {
  children: ReactNode;
};

const LoaderContext = createContext({} as USERROLE);
export const LoaderProvider = ({ children }: Props) => {

  const [loader, setLoader] = useState<boolean>(false);

  return (
    <LoaderContext.Provider
      value={{
        loader,
        setLoader
      }}
    >
      {children}
       {loader && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="text-white text-xl font-semibold">
            {/* Optionally add a spinner here */}
  <div className="flex space-x-2">
  <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
  <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
  <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce"></div>
  </div>

          </div>
        </div>
      )}
    </LoaderContext.Provider>
  );
};

export const useloader = () => useContext(LoaderContext);
