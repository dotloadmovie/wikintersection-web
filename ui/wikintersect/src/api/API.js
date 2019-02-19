import 'whatwg-fetch'

class API {
    constructor(config) {
        this.endpoint = config.endpoint || "/"
    }

    getSearch(searchTerm, callback) {
        const url = this.endpoint + '/search';
        let result = null;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                result = json.Data;
                callback(result);
            })

    }
}

export default API;