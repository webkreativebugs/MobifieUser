// context/DraftScreenContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { DraftScreenConfig } from "../../data/interface/data.interface";

interface DraftScreenContextType {
  drafts: DraftScreenConfig[];
  setDrafts: React.Dispatch<React.SetStateAction<DraftScreenConfig[]>>;
  addDraft: (newDraft: DraftScreenConfig) => void;
  updateDraft: (screenName: string, updatedConfig: DraftScreenConfig) => void;
  removeDraft: (screenName: string) => void; // ✅ New
}

const DraftScreenContext = createContext<DraftScreenContextType | undefined>(
  undefined
);

export const DraftScreenProvider = ({ children }: { children: ReactNode }) => {
  const [drafts, setDrafts] = useState<DraftScreenConfig[]>([]);

  // Add draft if not already exists
  const addDraft = (newDraft: DraftScreenConfig) => {
    setDrafts((prev) => {
      const exists = prev.find((d) => d.screenName === newDraft.screenName);
      if (exists) return prev;
      return [...prev, newDraft];
    });
  };

  // Update draft
  const updateDraft = (
    screenName: string,
    updatedConfig: DraftScreenConfig
  ) => {
    setDrafts((prev) =>
      prev.map((d) => (d.screenName === screenName ? updatedConfig : d))
    );
  };

  // Remove draft (used for Cancel or Save Changes)
  const removeDraft = (screenName: string) => {
    setDrafts((prev) => prev.filter((d) => d.screenName !== screenName));
  };

  return (
    <DraftScreenContext.Provider
      value={{ drafts, setDrafts, addDraft, updateDraft, removeDraft }}
    >
      {children}
    </DraftScreenContext.Provider>
  );
};

export const useDraftScreen = () => {
  const context = useContext(DraftScreenContext);
  if (!context) {
    throw new Error("useDraftScreen must be used within a DraftScreenProvider");
  }
  return context;
};

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
