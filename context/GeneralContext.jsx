"use client";
import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState();
  return (
    <GeneralContext.Provider
      value={{
        sidebarState,
        setSidebarState,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
