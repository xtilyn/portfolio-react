import React from "react";
import "./App.css";
import HomeView from "./pages/HomeView";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PortfolioView from "./pages/PortfolioView";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { colorAccent } from "./constants/app_colors";
import AboutView from "./pages/AboutView";
import MobileView from "./pages/ContactView/MobileView";
require("typeface-montserrat");
require("typeface-source-code-pro");

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: colorAccent
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#c4e69d",
        main: "#fff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#383838"
      },
      contrastThreshold: 3,
      tonalOffset: 0.2
    },
    typography: {
      fontFamily: '"Montserrat", "Segoe UI", "Helvetica", "Arial", sans-serif',
      button: {
        textTransform: "none",
        fontSize: "0.9em"
      },
      subtitle1: {
        fontFamily: "Source Code Pro",
        fontSize: 18
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/portfolio">
                <PortfolioView />
              </Route>
              <Route path="/about">
                <AboutView />
              </Route>
              <Route path="/contactMobile">
                <MobileView />
              </Route>
              <Route path="/">
                <HomeView />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
