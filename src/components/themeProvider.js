import React, { createContext, useReducer, useMemo } from "react";

const theme = {
  light: "light",
  dark: "dark",
};

const colors = {
  light: {
    backgroundColor: "#2a2b2d",
    boxShadow: "-1px 1px 0.8em black",
    tagName: "black",
    tagBorder: "#d9d7e0",
    tagSelected: "#45858C",
    postTitle: "#45858c",
    postDate: "#80797f",
  },
  dark: {
    backgroundColor: "whitesmoke",
    boxShadow: "-1px 1px 0.8em whitesmoke",
    tagName: "whitesmoke",
    tagBorder: "#a5a5a5",
    tagSelected: "#65C4CF",
    postTitle: "#65C4CF",
    postDate: "#ddd",
  },
};

const ThemeReducer = (_state, action) => {
  switch (action.type) {
    case theme.light:
      if (typeof window !== "undefined")
        window.localStorage.setItem("theme", action.type);
      return {
        mode: theme.light,
        colors: colors.light,
      };
    case theme.dark:
      if (typeof window !== "undefined")
        window.localStorage.setItem("theme", action.type);
      return {
        mode: theme.dark,
        colors: colors.dark,
      };
    default:
      throw new Error();
  }
};

export const themeStateContext = createContext();
export const themeDispatchContext = createContext();

const ThemeProvider = ({ children }) => {
  const mode = useMemo(
    () =>
      typeof window !== "undefined"
        ? window.localStorage.getItem("theme")
        : null,
    []
  );
  const defaultState = {
    mode: mode || theme.light,
    colors: colors[mode] || colors[theme.light],
  };
  const [state, dispatch] = useReducer(ThemeReducer, defaultState);

  return (
    <themeStateContext.Provider value={state}>
      <themeDispatchContext.Provider value={dispatch}>
        {children}
      </themeDispatchContext.Provider>
    </themeStateContext.Provider>
  );
};

export default ThemeProvider;
