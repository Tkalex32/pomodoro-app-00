import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  workMin: 25,
  shortMin: 5,
  longMin: 25,
};

export const SettingsContext = createContext(initialState);

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setWork = (time) => {
    dispatch({
      type: "SET_WORK",
      payload: time,
    });
  };

  const setShort = (time) => {
    dispatch({
      type: "SET_SHORT",
      payload: time,
    });
  };

  const setLong = (time) => {
    dispatch({
      type: "SET_LONG",
      payload: time,
    });
  };

  const setDefault = () => {
    dispatch({
      type: "SET_DEFAULT",
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        workMin: state.workMin,
        shortMin: state.shortMin,
        longMin: state.longMin,
        setWork,
        setShort,
        setLong,
        setDefault,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
