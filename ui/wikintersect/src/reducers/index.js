const defaultState = {
    searchValue1: null,
    searchValue2: null,
    search1: null,
    search2: null,
    results1: null,
    results2: null,
    currView: 'search',
    compareResult: null
}

const rootReducer = (state = defaultState, action) => {

    if(action.type === 'CLEAR_SEARCH') {
        let newState = Object.assign({}, defaultState);
        return newState;
    }


    /* if(action.type === 'COUNT_UP') {
        let newState = Object.assign({}, state);
        newState.count = newState.count + 1;
        return newState;
    } */

    return state;
}

export default rootReducer;