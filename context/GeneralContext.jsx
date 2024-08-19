"use client";
import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState();
  const [length, setLength] = useState("0");
  const [adjustWidth, setAdjustWidth] = useState("300px");

  return (
    <GeneralContext.Provider
      value={{
        length,
        setLength,
        adjustWidth,
        setAdjustWidth,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
