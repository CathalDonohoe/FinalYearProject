	
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem } from '../actions/items';
 
const Item = ({ id, name, description, owner, dispatch }) => (
    <div>
        <Link to={`/item/${id}`}>
            <h4>{name}</h4>
        </Link>
        <p>Owner: {owner}</p>
        {description && <p>{description}</p>}
        <button onClick={() => {
            dispatch(removeItem({ id }));
        }}>Remove</button>
    </div>
);
 
export default connect()(Item);