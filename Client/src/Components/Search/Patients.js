import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getPatients} from '../../Actions/patientActions'
import PatientItem from '../Common/PatientItem';

class Patients extends Component {

    componentDidMount() {
        this
            .props
            .getPatients();
    }

    render() {
        const {patients} = this.props.patient;
        let RenderPatients;

        if (patients === null) {
            RenderPatients = <a className="spinner-border  display-5 text-center" role="status">
                <span className="sr-only">Loading...</span>
            </a>;
        } else {
            if (patients.length > 0) {
                RenderPatients = patients.map((patient) => <PatientItem
                    key={patient._id}
                    name={patient.name}
                    age={patient.age}
                    address={patient.address}
                    dob={patient.dob}
                    dod={patient.dod}
                    id={patient._id}/>)
            } 
        }

        return (
            <div className="patients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 text-center">Patients</h1>
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
                                        {RenderPatients}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Patients.propTypes = {
    getPatients: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired
}

const mapStateToProps = state => ({patient: state.patient})

export default connect(mapStateToProps, {getPatients})(Patients)