import * as actions from '../actions/weatherActions';

export const initialState = {
    data: null,
    isLoading: false,
    hasErrors: false
};

export default function weatherReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.GET_WEATHER:
            return { ...state, isLoading: true };
        case actions.GET_WEATHER_SUCCESS:
            return {
                data: payload,
                isLoading: false,
                hasErrors: false
            }
        case actions.GET_WEATHER_FAILURE:
            return {
                data: null,
                isLoading: false,
                hasErrors: payload
            }
        default:
            return state;
    }
}
