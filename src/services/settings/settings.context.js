import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [isMetric, setIsMetric] = useState(false);
  // change isMetric function
  const changeMeasurement = () => {
    setIsMetric(!isMetric);
  };

  return (
    <SettingsContext.Provider value={{ isMetric, changeMeasurement }}>
      {children}
    </SettingsContext.Provider>
  );
};
