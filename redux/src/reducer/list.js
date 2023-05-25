const initialState = [];

// ham list
const list = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            state = [...state, action.payload];
            return state;   
        case 'delete':
            state.splice(action.payload, 1);
            return [...state];
        case 'update':
            state[action.payload.index] = action.payload.value;
            return [...state];
        default:
            break;
    }
    return state;
}

export default list;