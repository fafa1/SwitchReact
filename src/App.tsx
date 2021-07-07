import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    console.log(theme.title);
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toogleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
