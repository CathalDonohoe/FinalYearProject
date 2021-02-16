import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Homepage from "./components/homepage.component";
import Navagation from "./components/navagation.componant";
import AddItem from "./components/addItem.component";
import AvailableItems from './components/availableItems.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navagation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/addItem" component={AddItem}/>
          <Route exact path="/availableItems" component={AvailableItems}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;