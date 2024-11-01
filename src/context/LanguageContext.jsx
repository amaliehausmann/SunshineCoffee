import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [languageData, setLanguageData] = useState(false);

  return (
    <LanguageContext.Provider value={{ languageData, setLanguageData }}>
      {children}
    </LanguageContext.Provider>
  );
};
