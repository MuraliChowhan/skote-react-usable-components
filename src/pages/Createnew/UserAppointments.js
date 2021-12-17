import React from "preact/compat";
import { Link } from "react-router-dom";

function UserAppointments() {
    return (
        <>
            <div className="page-content">
                <Link to="/dashboard" className="d-flex align-items-center">
                    <i className="fas fa-arrow-left" style={{ marginRight: "10px" }}></i> Back
                </Link>
                <div className="container" style={{ height: "450px", overflowY: "scroll" }}>
                    <div className="row">
                        <div className="col-sm-12 col-md-1 col-lg-1"></div>
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h4 className="mb-3">Add New Appointments</h4>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Category</label>
                                    <select className="form-control">
                                        <option>Category-1</option>
                                        <option>Category-2</option>
                                        <option>Category-3</option>
                                        <option>Category-4</option>
                                    </select>
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Service</label>
                                    <select className="form-control">
                                        <option>service-1</option>
                                        <option>service-2</option>
                                        <option>service-3</option>
                                        <option>service-4</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Assigned Staff</label>
                                    <select className="form-control">
                                        <option>Staff-1</option>
                                        <option>Staff-2</option>
                                        <option>Staff-3</option>
                                        <option>Staff-4</option>
                                    </select>
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Meeting Type</label>
                                    <select className="form-control">
                                        <option>meeting-1</option>
                                        <option>meeting-2</option>
                                        <option>meeting-3</option>
                                        <option>meeting-4</option>
                                    </select>
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Meeting details</label>
                                    <select className="form-control">
                                        <option>details-1</option>
                                        <option>details-2</option>
                                        <option>details-3</option>
                                        <option>details-4</option>
                                    </select>
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Date</label>
                                    <input type="date" className="form-control" placeholder="task title" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Payment Type</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>

                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-light">Cancel</button>
                                <button className="btn btn-success" style={{ marginLeft: "5px" }}>Save</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-1 col-lg-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserAppointments;