import {buildDefaultState} from "../config";

const defaultState = buildDefaultState();

const rootReducer = (state = defaultState, action) => {

    if(action.type === 'CHANGE_VIEW') {
        let newState = Object.assign({}, state);

        newState.currView = action.view;

        return newState;
    }

    if(action.type === 'CLEAR_SEARCH') {
        let newState = Object.assign({}, defaultState);
        return newState;
    }

    if(action.type === 'SEARCH_VALUE_INPUT') {
        let newState = Object.assign({}, state);
        //changing offset of the index. TODO: make this global

        let searchBlock = Object.assign({}, newState['search' + action.searchIndex]);
        searchBlock.value = action.value;
        newState['search' + action.searchIndex] = searchBlock;

        return newState;
    }

    if(action.type === 'SELECT_ROW') {
        let newState = Object.assign({}, state);

        let searchBlock = Object.assign({}, newState['search' + action.searchIndex]);
        searchBlock.search = action.row.value;
        newState['search' + action.searchIndex] = searchBlock

        return newState;
    }

    if(action.type === 'SEARCH_LOADING') {
        let newState = Object.assign({}, state);

        let searchBlock = Object.assign({}, newState['search' + action.searchIndex]);
        searchBlock.serverRequestInFlight = action.status;
        newState['search' + action.searchIndex] = searchBlock;

        return newState;
    }

    if(action.type === 'SEARCH_SUCCESS') {
        let newState = Object.assign({}, state);
        let searchBlock = Object.assign({}, newState['search' + action.searchIndex]);

        searchBlock.results = action.searchResult.Data;

        newState['search' + action.searchIndex] = searchBlock;
        return newState;
    }


    if(action.type === 'COMPARE_LOADING') {
        let newState = Object.assign({}, state);

        newState.serverRequestInFlight = action.status;

        return newState;
    }

    if(action.type === 'COMPARE_SUCCESS') {
        let newState = Object.assign({}, state);

        newState.compareResult = action.compareResult.Data;
        return newState;
    }


    return state;
}

export default rootReducer;