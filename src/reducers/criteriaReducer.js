import * as actions from '../actions/criteriaActions';
import { enums } from '../helpers';

export const initialState = enums.BY_CITY;

export default function criteriaReducer(state = initialState, action) {
    switch(action.type) {
        case actions.SET_CRITERIA:
            return action.payload;
        default:
            return state;
    }
}
