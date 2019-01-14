import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPatient} from '../../Actions/patientActions';
import TextFieldGroup from '../Common/TextFieldGroup';
import PatientItem from '../Common/PatientItem';

class PatientFinder extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            errors: {}
        }
        this.onChange = this
            .onChange
            .bind(this)
        this.onSubmit = this
            .onSubmit
            .bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const patientName = {
            name: this.state.name
        }
        this
            .props
            .getPatient(patientName);

    }

    render() {

        const {errors} = this.state;
        const {patient, loading} = this.props.patient

        // let dashboardContent; if(loading){     dashboardContent = <h4>Loading</h4>
        // }else{     dashboardContent = ''; }

        const patientView = (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">DOB</th>
                            <th scope="col">DOD</th>
                            <th scope="col">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PatientItem
                            name={patient.name}
                            age={patient.age}
                            address={patient.address}
                            dob={patient.dob}
                            dod={patient.dod}
                            id={patient._id}/>
                    </tbody>
                </table>
            </div>

        )

        return (
            <div className="container">
                <h1 className="display-5">Search Patient</h1>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        placeholder="Patient Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.patient}/>
                    <input type="submit" className="btn btn-info btn-block mt-4"/>
                </form>
                <br/>
                <br/> {this.props.patient.patient
                    ? patientView
                    : null}
            </div>
        )
    }
}

PatientFinder.propTypes = {
    auth: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({patient: state.patient, auth: state.auth, errors: state.errors})

export default connect(mapStateToProps, {getPatient})(PatientFinder);