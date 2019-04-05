export const buildDefaultState = () => {
    return {
        search0: {rowKey: null, value: null, search: null, results: null, serverRequestInFlight: false},
        search1: {rowKey: null, value: null, search: null, results: null, serverRequestInFlight: false},
        currView: 'search',
        compareResult: null,
        serverRequestInFlight: false
    }
}