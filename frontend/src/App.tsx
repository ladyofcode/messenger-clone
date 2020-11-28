import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { routes } from "./config/";
import { IRoute } from "./config/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route: IRoute) =>
            route.protected ? (
              <ProtectedRoute {...route} />
            ) : (
              <Route {...route} />
            ),
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
