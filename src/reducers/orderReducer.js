import { ADD_ORDER, EDIT_ORDER, DELETE_ORDER, DELETE_ALL_ORDERS } from '../constants'

let keyCounter = 0;

// whatever is being passed in through param has 'item' and 'workStatus'
const createOrder = (action) => {
    let { item, amount, workStatus} = action; //es6 variable deconstruction
    return {
        item,
        amount,
        workStatus,
        key: keyCounter++ // it's okay if this counter increments actually cause we want it to.
    }
}

const deleteByKey = (state = [], key) => {
    const orders = state.filter(order => order.key !== key);
    return orders; //new array with that specific key filtered out.
}

export const orderReducer = (state = [], action) => {
    let orders = null;
    switch (action.type) {
        case ADD_ORDER:
            orders = [...state, createOrder(action)];
            return orders;
        case EDIT_ORDER:
            const { order, key } = action;
            const { checkInventory, open } = order;
            orders = [...state];
            if(checkInventory && open) {
                orders[action.key] = action.order
            } else {
                const oldOrder = orders[action.key];
                oldOrder.workStatus = order.workStatus;
                orders[action.key] = oldOrder;
            }
            return orders;
        case DELETE_ORDER:
            orders = deleteByKey(state, action.key);
            return orders;
        case DELETE_ALL_ORDERS:
            return [];
        default:
            return state
    }
}