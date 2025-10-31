import { createContext, useContext, useState, ReactNode } from "react";

interface TabContextType {
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabContextProvider = ({ children }: { children: ReactNode }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <TabContext.Provider value={{ isEdit, setIsEdit }}>
      {children}
    </TabContext.Provider>
  );
};

// ✅ Custom hook to use the context
export const useTabContext = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabContextProvider");
  }
  return context;
};
