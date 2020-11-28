import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { routes } from "./config/";
import { IRoute } from "./config/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route: IRoute) => (
            <Route {...route} key={route.name} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
