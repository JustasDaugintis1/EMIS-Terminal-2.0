import axios from 'axios';
import { GET_PATIENT, PATIENT_LOADING, GET_ERRORS, GET_PATIENTS } from './types'


export const getPatient = (patientName) => dispatch => {
    dispatch(setPatientLoading());
    axios.post('api/patient', patientName)
    .then(res => dispatch({
        type: GET_PATIENT,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_PATIENT,
        payload: {}
    }))
}

//Patient loading
export const setPatientLoading = () => {
    return {
        type: PATIENT_LOADING
    }
}

export const getPatients = (patientName) => dispatch => {
    dispatch(setPatientLoading());
    axios.get('api/patient/all')
    .then(res => dispatch({
        type: GET_PATIENTS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_PATIENTS,
        payload: {}
    }))
}