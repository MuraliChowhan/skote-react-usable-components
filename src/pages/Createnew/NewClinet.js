import React from "preact/compat";
import { Link } from "react-router-dom";

function NewClient() {
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
                        <h4 className="mb-3">Add New Client</h4>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label>Select Pipeline</label>
                                    <select className="form-control">
                                        <option>India</option>
                                        <option>Alaska</option>
                                        <option>Illinois</option>
                                        <option>Utah</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Select Stage</label>
                                    <select className="form-control">
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>Illinois</option>
                                        <option>Utah</option>
                                    </select>
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
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="task title" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Price Estimation</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Service</label>
                                    <select className="form-control">
                                        <option>Product development</option>
                                        <option>Digital marketing</option>
                                        <option>Application development</option>
                                        <option>Tetsing Applications</option>
                                    </select>
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
export default NewClient;