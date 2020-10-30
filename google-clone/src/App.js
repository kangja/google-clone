import React from "react";
import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <h1>Hey Clever Programmer Fam, let's bulid the Google Clone!</h1>

        {/* Home (the one with the search one) */}
        <Home />

        {/* SearchPage (The results page) */}

      </Router>

       

    </div>
  );
}

export default App;
