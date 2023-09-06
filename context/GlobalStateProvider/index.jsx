'use client'
import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

const GlobalStateContext = createContext({
  state: {},
  setState: {},
});

const GlobalStateProvider = ({
  children,
  value = {
    hasPassedDoor: false,
    hasPassedCollection: false,
  },
}) => {
  const [state, setState] = useState(value);

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
