import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Homepage from "./components/homepage.component"

import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { getItems } from './actions/items';
//import './styles/styles.scss';
 
// import { Provider } from 'react-redux';
 
// const store = getAppStore();
 
// const template = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// );
 
// store.dispatch(getItems()).then(() => {
//     ReactDOM.render(template, document.getElementById('app'));
// });

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"> 
        <div className="container">
        <img src="https://i.ibb.co/qmLk76K/icons8-b-64.png"/>
          <Link className="navbar-brand" to={"/homepage"}>BorrowNearME</Link>
          <div className="collapse navbar-collapse" id="middleNavbar">
            <Link className="nav-link" to={"/homepage"}>Home</Link>
          </div>
          <div className="collapse navbar-collapse" id="rightNavbar">
            <ul className="navbar-nav ml-auto">
            <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>

        
        <div class="container">    
      <div class="row">
        <Route exact path='/' component={Homepage} />
        <Route path="/homepage" component={Homepage}/>
        </div>
          </div>
    </div>
    </Router>
  );
}

export default App;