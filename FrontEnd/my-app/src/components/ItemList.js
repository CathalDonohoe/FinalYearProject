import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
 
const ItemList = (props) => (
    <div>
        Item List:
        <ul>
            {props.items.map(item => {
                return (
                    <li key={item.id}>
                        <Item {...item} />
                    </li>
                );
            })}
        </ul>
 
    </div>
);
 
const mapStateToProps = (state) => {
    return {
        items: state
    };
}
 
export default connect(mapStateToProps)(ItemList);