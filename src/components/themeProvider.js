import React, { createContext, useReducer } from "react";

const THEMA = {
  LIGHT: "light",
  DARK: "dark",
};

const COLORS = {
  LIGHT: {
    BACKGROUND_COLOR: "white",
    LINK: "black",
    TAG_NAME: "black",
    TAG_BORDER: "var(--theme-ui-colors-grey-30, #d9d7e0)",
    TAG_SELECTED: "#45858C",
    POST_TITLE: "#45858c",
    POST_TAGS: "#bf9765",
  },
  DARK: {
    BACKGROUND_COLOR: "black",
    LINK: "white",
    TAG_NAME: "white",
    TAG_BORDER: "white",
    TAG_SELECTED: "white",
    POST_TITLE: "white",
    POST_TAGS: "white",
  },
};

const defaultState = COLORS.LIGHT;

const ThemeReducer = (_state, action) => {
  switch (action.type) {
    case THEMA.LIGHT:
      return COLORS.LIGHT;
    case THEMA.DARK:
      return COLORS.DARK;
    default:
      throw new Error();
  }
};

export const themeStateContext = createContext();
export const themeDispatchContext = createContext();

const ThemeProvider = ({ children }) => {
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
