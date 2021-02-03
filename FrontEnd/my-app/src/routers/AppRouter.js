import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddItem from '../components/AddItem';
import EditItem from '../components/EditItem';
// import NotFound from '../components/NotFound';
 
const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddItem} />
                <Route path="/item/:id" component={EditItem} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;