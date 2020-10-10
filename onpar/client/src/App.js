import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import * as components from "./components";
const { Home, SignUp, LogIn, LogOut, Navigation, Game, Stats, PrivateRoute } = components
function App() {
  
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute path="/game" component={Game}/>
          <PrivateRoute path="/stats" component={Stats}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/logout" component={LogOut}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
