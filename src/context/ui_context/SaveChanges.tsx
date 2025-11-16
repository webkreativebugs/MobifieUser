// import { createContext, useContext, useState, ReactNode } from "react";

// interface SaveChangesContextType {
//   isActive: boolean;
//   setIsActive: (value: boolean) => void;
// }

// const SaveChangesContext = createContext<SaveChangesContextType | undefined>(
//   undefined
// );

// export const SaveChangesProvider = ({ children }: { children: ReactNode }) => {
//   const [isActive, setIsActive] = useState<boolean>(false);

//   return (
//     <SaveChangesContext.Provider value={{ isActive, setIsActive }}>
//       {children}
//     </SaveChangesContext.Provider>
//   );
// };

// export const useSaveChanges = (): SaveChangesContextType => {
//   const context = useContext(SaveChangesContext);
//   if (!context) {
//     throw new Error(
//       "useSaveChanges dsakadkahdlkajlkjsl must be used inside SaveChangesProvider"
//     );
//   }
//   return context;
// };
import { createContext, useContext, useState, ReactNode } from "react";

interface SaveChangesContextType {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  isDisable: boolean;
  setIsDisable: (value: boolean) => void;
}

const SaveChangesContext = createContext<SaveChangesContextType | undefined>(
  undefined
);

export const SaveChangesProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  return (
    <SaveChangesContext.Provider
      value={{ isActive, setIsActive, isDisable, setIsDisable }}
    >
      {children}
    </SaveChangesContext.Provider>
  );
};

export const useSaveChanges = (): SaveChangesContextType => {
  const context = useContext(SaveChangesContext);
  if (!context) {
    throw new Error("useSaveChanges dsakadkahdlkajlkjsl must be used inside SaveChangesProvider");
  }
  return context;
};
