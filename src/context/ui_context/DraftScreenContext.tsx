import React, { createContext, useContext, useState, ReactNode } from "react";

interface SaveChangesContextType {
  isDraft: boolean;
  setIsDraft: (value: boolean) => void;
}

const SaveChangesContext = createContext<SaveChangesContextType | undefined>(
  undefined
);

export const DraftScreenChanges = ({ children }: { children: ReactNode }) => {
  const [isDraft, setIsDraft] = useState<boolean>(false);

  return (
    <SaveChangesContext.Provider value={{ isDraft, setIsDraft }}>
      {children}
    </SaveChangesContext.Provider>
  );
};

export const useDraftScreenChanges = (): SaveChangesContextType => {
  const context = useContext(SaveChangesContext);
  if (!context) {
    throw new Error(
      "useDraftScreenChanges must be used within a SaveChangesProvider"
    );
  }
  return context;
};
