import React from "preact/compat";
import { Link } from "react-router-dom";

function TaskModal() {
    return (
        <>
            <div className="page-content">
                <Link to="/dashboard" className="d-flex align-items-center">
                    <i className="fas fa-arrow-left" style={{ marginRight: "10px" }}></i> Back
                </Link>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-1 col-lg-1"></div>
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h4 className="mb-3">Add New Task</h4>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label>Task Title</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Related To</label>
                                    <select className="form-control">
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>Illinois</option>
                                        <option>Utah</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Date</label>
                                    <input type="date" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Priority</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Assinged Staff</label>
                                    <select className="form-control">
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>Illinois</option>
                                        <option>Utah</option>
                                    </select>
                                </div>
                                <div className="col-6 mb-3">
                                    <label>Task Status</label>
                                    <input type="text" className="form-control" placeholder="task title" />
                                </div>

                                <div className="mb-3">
                                    <label>Description</label>
                                    <textarea row="3" type="text" className="form-control" placeholder="task title" />
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
export default TaskModal;