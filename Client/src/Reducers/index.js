import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import patientReducer from './patientReducer'

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    patient: patientReducer
});