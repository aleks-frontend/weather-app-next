import { combineReducers } from 'redux';

import tempUnitReducer from './tempUnitReducer';
import weatherReducer from './weatherReducer';
import criteriaReducer from './criteriaReducer';

const rootReducer = combineReducers({
    tempUnit: tempUnitReducer,
    criteria: criteriaReducer,
    weather: weatherReducer
});

export default rootReducer;
