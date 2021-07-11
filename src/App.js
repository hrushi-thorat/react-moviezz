import React from "react";
import { Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
//components
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
