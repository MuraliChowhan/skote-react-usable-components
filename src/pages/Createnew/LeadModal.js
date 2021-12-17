import React from "preact/compat";
import { Link } from "react-router-dom";

function LeadModal() {
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
                            <h4 className="mb-3">Add New Lead</h4>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label>Salutation</label>
                                    <select className="form-control">
                                        <option>Mr.</option>
                                        <option>Mrs</option>
                                        <option>Ms.</option>
                                        <option>Br.</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Pipeline</label>
                                    <input type="date" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Pre sales</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Assinged to</label>
                                    <select className="form-control">
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>Illinois</option>
                                        <option>Utah</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Pipeline Stage</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>

                                <h4 className="gtitle border-bottom">Communication</h4>
                                <div className="col-6 mb-3">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="task title" />
                                </div>
                                <h4 className="gtitle border-bottom">Professional</h4>
                                <div className="col-6 mb-3">
                                    <label>Company Name</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label>City</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>State</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Country</label>
                                    <select className="form-control">
                                        <option>India</option>
                                        <option>America</option>
                                        <option>Newzeland</option>
                                        <option>Australia</option>
                                        <option>Switzerland</option>
                                        <option>England</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Time Zone</label>
                                    <select className="form-control">
                                        <option>Asia/Kolkata</option>
                                        <option>Asia/Delhi</option>
                                        <option>Asia/Dubai</option>
                                        <option>Asia/Jakarta</option>
                                    </select>
                                </div>

                                <h4 className="gtitle border-bottom">Requirment</h4>
                                <div className="col-6 mb-3">
                                    <label>Product</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Amount quoted</label>
                                    <input type="email" className="form-control" placeholder="task title" />
                                </div>

                                <div className="col-6 mb-3">
                                    <label>Currency</label>
                                    <select className="form-control">
                                        <option>Indian rupees</option>
                                        <option>American dollar</option>
                                        <option>Euro</option>
                                        <option>Algeria dinar</option>
                                        <option>Argentina pisos</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Source</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-light">Cancel</button>
                                <button className="btn btn-success">Save</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-1 col-lg-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LeadModal;