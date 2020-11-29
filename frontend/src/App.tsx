import React, { useEffect } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { routes } from "./config/";
import { IRoute } from "./config/routes";
import { useAuth } from "./hooks/services/useAuth";

function App() {
  useAuth();

  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route: IRoute) =>
            route.protected ? (
              <ProtectedRoute {...route} key={route.name} />
            ) : (
              <Route {...route} key={route.name} />
            ),
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
