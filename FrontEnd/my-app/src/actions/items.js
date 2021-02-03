import axios from '../axios/axios';
 
const _addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});
 
export const addItem = (itemData = {
    name: '',
    description: '',
    owner: '',
}) => {
    return (dispatch) => {
        const item = {
            name: itemData.name,
            description: itemData.description,
            owner: itemData.owner,
        };
 
        return axios.post('items/create', item).then(result => {
            dispatch(_addItem(result.data));
        });
    };
};
 
const _removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});
 
export const removeItem = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`items/${id}`).then(() => {
            dispatch(_removeItem({ id }));
        })
    }
};
 
const _editItem = (id, updates) => ({
    type: 'EDIT_ITEM',
    id,
    updates
});
 
export const editItem = (id, updates) => {
    return (dispatch) => {
        return axios.put(`items/${id}`, updates).then(() => {
            dispatch(_editItem(id, updates));
        });
    }
};
 
const _getItems = (items) => ({
    type: 'GET_ITEMs',
    items
});
 
export const getItems = () => {
    return (dispatch) => {
        return axios.get('items').then(result => {
            const items = [];
 
            result.data.forEach(item => {
                items.push(item);
            });
 
            dispatch(_getItems(items));
        });
    };
};