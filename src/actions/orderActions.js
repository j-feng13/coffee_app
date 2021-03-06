import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER, DELETE_ALL_ORDERS } from '../constants'

export const addOrder = (item, amount, workStatus) => {
    const action = {
        type: ADD_ORDER,
        item,
        amount,
        workStatus
    }
    console.log('action in addOrder: ', action);
    return action;
}

export const editOrder = (key, order) => {
    const action = {
        type: EDIT_ORDER,
        order,
        key
    }
    console.log('action in editOrder: ', action);
    return action;
}

export const deleteOrder = (key) => {
    const action = {
        type: DELETE_ORDER,
        key
    }
    console.log('action in deleteOrder: ', action);
    return action;
}

export const deleteAllOrders = () => {
    const action = {
        type: DELETE_ALL_ORDERS
    }
    console.log('action in deleteAllOrders: ', action);
    return action;
}