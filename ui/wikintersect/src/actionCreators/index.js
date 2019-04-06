export const changeView = (view) => {
    return {
        type: 'CHANGE_VIEW',
        view
    }
}

export const clearSearch = () => {
    return {
        type: 'CLEAR_SEARCH'
    }
}


export const searchValueInput = (value, searchIndex) => {
    return {
        type: 'SEARCH_VALUE_INPUT',
        value,
        searchIndex
    }
}

export const selectRow = (row, searchIndex) => {
    return {
        type: 'SELECT_ROW',
        row,
        searchIndex
    }
}

export const searchLoading = (status, searchIndex) => {
    return {
        type: 'SEARCH_LOADING',
        status,
        searchIndex
    }
}

export const searchSuccess = (searchResult, searchIndex) => {
    return {
        type: 'SEARCH_SUCCESS',
        searchResult,
        searchIndex
    }
}

export const searchError = (searchError) => {
    return {
        type: 'SEARCH_ERROR',
        searchError
    }
}

export const fetchSearchResult = (url, searchIndex) => {
    return (dispatch) => {
        dispatch(searchLoading(true, searchIndex));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(searchLoading(false, searchIndex));

                return response;
            })
            .then((response) => response.json())
            .then((searchResult) => dispatch(searchSuccess(searchResult, searchIndex)))
            .catch(() => dispatch(searchError(true)));
    };
}





export const compareLoading = (status) => {
    return {
        type: 'COMPARE_LOADING',
        status,
    }
}

export const compareSuccess = (compareResult) => {
    return {
        type: 'COMPARE_SUCCESS',
        compareResult
    }
}

export const compareError = (compareError) => {
    return {
        type: 'SEARCH_ERROR',
        compareError
    }
}

export const submitCompare = (url) => {
    return (dispatch) => {
        dispatch(compareLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(compareLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((compareResult) => dispatch(compareSuccess(compareResult)))
            .catch(() => dispatch(compareError(true)));
    };
}