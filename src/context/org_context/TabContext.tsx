import { createContext, useContext, useState, ReactNode } from "react";

interface TabContextType {
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
}

// interface APPCONFIG {
//   ApiConfigData: {
//   api_key: string;       // Authentication
//   base_url: string;      // Base domain for the API
//   endpoint: string;      // Specific path for the call
//   method: string;        // HTTP method selection
//   headers: string;       // Optional custom headers
//   query_params: string;  // Optional query strings
//   body: string;          // Optional POST/PUT body
//   timeout: string;       // Optional timeout setting
//   [key: string]: string; // Index signature for dynamic access
// },
// ClientConfigData :{
//   Api_url:string;
//   Token:string;
//   API_URL_ADMIN:string;
//   Access_token:string;
// },
// WebUrlConfig:{
//     edit_profile:string,
//     orders: string
//     address: string
//     about_us: string
//     faq_page: string
//     terms_and_conditions: string
//     privacy_policy: string
//     returns_policy: string
//     contact_us: string
//   },


// }

const TabContext = createContext<TabContextType | undefined>(undefined);
// const APP_CONFIG_CONSTANT:string ="APP"

export const TabContextProvider = ({ children }: { children: ReactNode }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // const [appConfigData,setAppConfigData] = useState<APPCONFIG>()

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
