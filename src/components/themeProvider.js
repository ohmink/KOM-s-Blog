import React, { createContext, useReducer } from "react";

const theme = {
  light: "light",
  dark: "dark",
};

const colors = {
  light: {
    position: "gray",
    link: "black",
    tagName: "black",
    tagBorder: "#d9d7e0",
    tagSelected: "#45858C",
    postTitle: "#45858c",
    postTags: "#bf9765",
    postDate: "#80797f",
  },
  dark: {
    position: "lightgray",
    link: "whitesmoke",
    tagName: "whitesmoke",
    tagBorder: "#a5a5a5",
    tagSelected: "#65C4CF",
    postTitle: "#65C4CF",
    postTags: "#F2BF80",
    postDate: "#ccc",
  },
};

const ThemeReducer = (_state, action) => {
  switch (action.type) {
    case theme.light:
      window.localStorage.setItem("theme", action.type);
      return {
        mode: theme.light,
        colors: colors.light,
      };
    case theme.dark:
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
  const mode = window.localStorage.getItem("theme");
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
