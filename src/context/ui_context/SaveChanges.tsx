import React, { createContext, useContext, useState, ReactNode } from "react";

interface SaveChangesContextType {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

const SaveChangesContext = createContext<SaveChangesContextType | undefined>(
  undefined
);

export const SaveChangesProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <SaveChangesContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </SaveChangesContext.Provider>
  );
};

export const useSaveChanges = (): SaveChangesContextType => {
  const context = useContext(SaveChangesContext);
  if (!context) {
<<<<<<< HEAD
    throw new Error(
      "useSaveChanges dsakadkahdlkajlkjsl must be used inside SaveChangesProvider"
    );
=======
    throw new Error("useSaveChanges must be used inside SaveChangesProvider");
>>>>>>> 70383c29845d114914038656b222b23dabe8bfb0
  }
  return context;
};
