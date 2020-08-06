
import { combineReducers } from 'redux';
import spaceXReducer from '../Containers/store/reducers';

export default combineReducers({
    spaceXData: spaceXReducer,
});