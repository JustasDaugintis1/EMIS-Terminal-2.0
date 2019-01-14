
import { GET_PATIENT, PATIENT_LOADING, GET_PATIENTS } from '../Actions/types'

const initialState = {
    patient: '',
    patients: '',
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case PATIENT_LOADING:
        return {
            ...state,
            loading: true
        }
        case GET_PATIENT:
        return{
            ...state,
            patient: action.payload,
            loading: false
        }
        case GET_PATIENTS:
        return{
            ...state,
            patients: action.payload,
            loading:false
        }
        default:
            return state;
    }
}