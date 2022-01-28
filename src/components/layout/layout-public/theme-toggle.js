import * as React from "react";
import * as Styles from "./theme-toggle.module.css";
import { themeStateContext, themeDispatchContext } from "../../themeProvider";

const ThemeToggle = () => {
  const theme = React.useContext(themeStateContext);
  const themeDispatch = React.useContext(themeDispatchContext);
  const toggleRef = React.useRef();
  const sunRef = React.useRef();
  const moonRef = React.useRef();

  function setLogo() {
    if (theme.mode === "dark") {
      sunRef.current.classList.toggle(Styles.animateSun);
      moonRef.current.classList.toggle(Styles.animateMoon);
    }
  }

  function toggle() {
    setLogo();

    if (theme.mode === "light") themeDispatch({ type: "dark" });
    else themeDispatch({ type: "light" });
  }

  React.useEffect(() => {
    toggleRef.current.style.backgroundColor = theme.colors.backgroundColor;
    toggleRef.current.style.boxShadow = theme.colors.boxShadow;

    setLogo();
  }, [theme.mode]);

  return (
    <div ref={toggleRef} className={Styles.toggleContainer} onClick={toggle}>
      <div ref={sunRef} className={`${Styles.sun} ${Styles.sunLogo}`}>
        <svg viewBox="0 0 512 512" width={20} title="sun">
          <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" />
        </svg>
      </div>
      <div ref={moonRef} className={`${Styles.moon} ${Styles.moonLogo}`}>
        <svg viewBox="0 0 512 512" width={20} title="moon">
          <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
        </svg>
      </div>
    </div>
  );
};

export default ThemeToggle;
