import React from 'react';
import ItemForm from './ItemForm';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
 
const AddItem = (props) => (
    <div>
        <h3>Set Item information:</h3>
        <ItemForm
            onSubmitItem={(item) => {
                props.dispatch(addItem(item));
                props.history.push('/');
            }}
        />
    </div>
);
 
export default connect()(AddItem);