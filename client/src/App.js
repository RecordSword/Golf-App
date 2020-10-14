import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { isAuthenticated } from "./lib";
import * as components from "./components";
import { TokenProvider } from "./utils/GlobalState";

const {
  Home,
  SignUp,
  LogIn,
  LogOut,
  Navigation,
  StartGame,
  Stats,
  PrivateRoute,
} = components;
function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated);

  return (
    <div className="App">
      <TokenProvider>
        <Navigation props={{ authenticated: authenticated }} />
        <main>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/logout" component={LogOut} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </main>
      </TokenProvider>
    </div>
  );
}

export default App;
