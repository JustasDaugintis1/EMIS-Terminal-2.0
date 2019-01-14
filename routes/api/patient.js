const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('../../config/keys');

//Load Validation
//const validateProfileInput = require('../../Validation/profile');

//Load profile model
const Patient = require('../../models/Patient');


//@route    POST api/Patient
//@desc     Get Patient by name
//@access   Private
router.post('/', passport.authenticate('jwt', {
        session: false
}), (req, res) => {
        const errors = {};

        Patient.findOne({
                        name: req.body.name
                })
                .then(Patient => {
                        if (!Patient) {
                                errors.patient = 'There is no patient with this name'
                                return res.status(404).json(errors)
                        }
                        res.json(Patient)
                })
                .catch(err => res.status(404).json(err))
})

//@route    GET api/Patient/all
//@desc     Get all patients available 
//@access   Private
router.get('/all', passport.authenticate('jwt', {
        session: false
}), (req, res) => {
        const errors = {};

        Patient.find()
                .then(Patient => {
                        if (!Patient) {
                                errors.noPatient = 'There are no patients available'
                                return res.status(404).json(errors)
                        }
                        res.json(Patient)
                })
                .catch(err => res.status(404).json(err))
})


//@route    POST api/Patient
//@desc     Create user profile
//@access   Private
router.post('/create', passport.authenticate('jwt', {
        session: false
}), (req, res) => {

        // const { errors, isValid } = validateProfileInput(req.body);

        // if(!isValid){
        //         return res.status(400).json(errors);
        // }

   // Get fields
   const patientFields= {};

   if(req.body.handle) patientFields.handle = req.body.handle;
   if(req.body.name) patientFields.name = req.body.name;
   if(req.body.age) patientFields.age = req.body.age;
   if(req.body.dob) patientFields.dob = req.body.dob;
   if(req.body.dod) patientFields.dod = req.body.dod;
   if(req.body.address) patientFields.address = req.body.address;
   if(req.body.summary) patientFields.summary = req.body.summary;
   if(req.body.problems) patientFields.problems = req.body.problems;
   if(req.body.allergies) patientFields.allergies = req.body.allergies;
   if(req.body.medications) patientFields.medications = req.body.medications;
   if(req.body.dateCreated) patientFields.dateCreated = req.body.dateCreated;


   Patient.findOne({ handle: patientFields.handle })
        .then(patient => {
                if(patient){
                        //Update
                        Patient
                        .findOneAndUpdate({handle: patientFields.handle }, {$set: patientFields }, { new: true})
                        .then(patient => res.json(patient))
                } else {
                        //Create Patient
                        new Patient(patientFields).save().then(patient => res.json(patient));
                        }
        })

})

module.exports = router;