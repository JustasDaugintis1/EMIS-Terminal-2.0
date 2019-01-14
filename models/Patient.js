const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create shouldComponentUpdate = (nextProps, nextState) => {
const PatientSchema = new Schema({
    handle:{
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    dod: {
        type: Date,
        default: null,
    },
    address: {
        type: String
    },
    summary: {
        type: String,
        required: true
    },
    problems: {
        type: String,
    },
    allergies: {
        type: String,
    },
    medications: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }

});

module.exports = Profile = mongoose.model('patient', PatientSchema)