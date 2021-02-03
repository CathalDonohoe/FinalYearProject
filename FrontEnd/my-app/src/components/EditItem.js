import React from 'react';
import ItemForm from './ItemForm';
import { connect } from 'react-redux';
import { editItem } from '../actions/items';
 
const EditItem = (props) => (
    <div className='container__box'>
        <ItemForm
            item={props.book}
            onSubmitItem={(item) => {
                props.dispatch(editItem(props.item.id, item));
                props.history.push('/');
            }}
        />
    </div>
);
 
const mapStateToProps = (state, props) => {
    return {
        item: state.find((item) =>
            item.id === props.match.params.id)
    };
};
 
export default connect(mapStateToProps)(EditItem);