// API Abstraction
const API_key = '73b56177f69a6f576acee0d4a90bf792';

const API = {
    url: 'https://api.openweathermap.org/data/2.5/',
    _handleError(response) {
        return response.ok ? response : Promise.reject(response.statusText);
    },
    _handleContentType(response) {
        const contentType = response.headers.get('content-type');

        if ( contentType && contentType.includes('application/json') ) {
            return response.json();
        }

        return Promise.reject('Response is not a JSON.')
    },
    get(endpoint, units = 'imperial') {
        return window.fetch(`${this.url}${endpoint}&units=${units}&APPID=${API_key}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json'
            })
        })
        .then(this._handleError)
        .then(this._handleContentType)
        .catch(error => { throw new Error(error) });
    }
};

export default API;
