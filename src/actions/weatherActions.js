import API from "../services/API";

export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const getWeather = () => ({
    type: GET_WEATHER
});

export const getWeatherSuccess = (data) => ({
    type: GET_WEATHER_SUCCESS,
    payload: data
});

export const getWeatherFailure = (message) => ({
    type: GET_WEATHER_FAILURE,
    payload: message
});

export function fetchWeather({ params, criteria }) {
    return async (dispatch) => {
        dispatch(getWeather());

        try {
            const endpoint = `weather?${criteria === 'city' ?
                `q=${params.join(',')}`
                : `lat=${params[0]}&lon=${params[1]}`}`;

            const data = await API.get(endpoint);

            dispatch(getWeatherSuccess(data));
        } catch (err) {
            dispatch(getWeatherFailure(err.message));
        }
    }
}
