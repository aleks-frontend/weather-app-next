import * as actions from '../actions/tempUnitActions';
export const initialState = 'c';

export default function tempUnitReducer(state = initialState, { type, payload }) {
    switch(type) {
        case actions.TOGGLE_TEMP_UNIT:
            return payload === 'c' ? 'f' : 'c';
        default:
            return state;
    }
}
