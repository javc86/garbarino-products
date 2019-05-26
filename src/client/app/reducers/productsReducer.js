const initialState = {
    list: [],
    details: null,
    updatedBlacklist: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_LIST':
            return {...state, list: action.payload.list};
        case 'GET_PRODUCT_DETAILS':
            return {...state, details: action.payload.details};
        case 'GET_UPDATED_BLACKLIST':
            return {...state, updatedBlacklist: actions.payload.updatedBlacklist}
        default:
            return state;
    }
}
