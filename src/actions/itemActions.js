import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from '../constants';

export const addItem = (name, inventory, max) => {
    const action = {
        type: ADD_ITEM,
        name,
        inventory,
        max
    }
    console.log('action in addItem: ', action);
    return action;
}

export const editItem = (key, order) => {
    const action = {
        type: EDIT_ITEM,
        order,
        key
    }
    console.log('action in editItem: ', action);
    return action;
}

export const deleteItem = (key) => {
    const action = {
        type: DELETE_ITEM,
        key
    }
    console.log('action in deleteItem: ', action);
    return action;
}

