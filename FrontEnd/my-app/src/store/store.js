	
import { createStore, applyMiddleware } from "redux";
import items from '../reducers/items';
import thunk from 'redux-thunk';
 
export default () => {
    return createStore(items, applyMiddleware(thunk)); 
};

