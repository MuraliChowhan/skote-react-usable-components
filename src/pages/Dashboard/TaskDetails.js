import React, { Component } from "react"
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import './dashboard.css';

class TaskDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            settings_Menu: false,
        }
        this.toggleSettings = this.toggleSettings.bind(this)
    }

    //Setting Menu
    toggleSettings() {
        this.setState(prevState => ({
            settings_Menu: !prevState.settings_Menu,
        }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="d-flex align-items-center mb-2">
                        <Link to="/dashboard">
                            <i className="fas fa-arrow-left"
                                style={{ color: "#74788d", cursor: "pointer" }}
                            ></i>
                        </Link>
                        <h4 className="mb-0" style={{ marginLeft: "10px" }}>ALL TASKS</h4>
                    </div>
                    <Row className="m">
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col lg="4">
                                            <h4 className="border-bottom border-2 border-secondary p-2">All Tasks</h4>
                                            <div className="search-box chat-search-box w-100">
                                                <div className="position-relative w-100">
                                                    <input type="text" placeholder="Search..." className="form-control border border-3 border-light py-1" />
                                                </div>
                                            </div>

                                            <div className="border-bottom border-2 border-light p-2 hover mt-1 ng-star-inserted">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0 cursor"> Digital Marketing </h6>
                                                    <p className="badge mb-0 badge-soft-danger">No Sorted</p>
                                                </div>
                                                <small className="mb-1 p-0 m-0 text-muted"> Nov 20, 2021 </small>
                                            </div>

                                            <div className="border-bottom border-2 border-light p-2 hover mt-1 ng-star-inserted">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0 cursor"> Digital Marketing </h6>
                                                    <p className="badge mb-0 badge-soft-warning">Pending</p>
                                                </div>
                                                <small className="mb-1 p-0 m-0 text-muted"> Nov 20, 2021 </small>
                                            </div>

                                            <div className="border-bottom border-2 border-light p-2 hover mt-1 ng-star-inserted">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0 cursor"> Digital Marketing </h6>
                                                    <p className="badge mb-0 badge-soft-success">Completed</p>
                                                </div>
                                                <small className="mb-1 p-0 m-0 text-muted"> Nov 20, 2021 </small>
                                            </div>

                                            <div className="border-bottom border-2 border-light p-2 hover mt-1 ng-star-inserted">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0 cursor"> SEO </h6>
                                                    <p className="badge mb-0 badge-soft-success">Completed</p>
                                                </div>
                                                <small className="mb-1 p-0 m-0 text-muted"> Nov 20, 2021 </small>
                                            </div>
                                        </Col>

                                        <Col lg="8">
                                            <h4 className="border-bottom border-2 border-secondary p-2">Task Details :
                                                <span className="text-muted"> Prepare a presentation for the demo</span>
                                            </h4>

                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <div className="px-2 py-1 w-15 text-uppercase text-muted fw-500">
                                                        Due Date
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <span className="px-2 py-1">Nov 6, 2021</span>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <div className="px-2 py-1 w-15 text-uppercase text-muted fw-500">
                                                        Priority
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <span className="px-2 py-1">High</span>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <div className="px-2 py-1 w-15 text-uppercase text-muted fw-500">
                                                        STATUS
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <select className="form-control-sm">
                                                        <option>Not sorted</option>
                                                        <option>Inprogress</option>
                                                        <option>Completed</option>
                                                        <option>Cancelled</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <div className="px-2 py-1 w-15 text-uppercase text-muted fw-500">
                                                        Reminder
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-9 col-lg-9">
                                                    <input type="date" className="form-control-sm" />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <div className="px-2 py-1 w-15 text-uppercase text-muted fw-500">
                                                        Description
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-9 col-lg-9">
                                                    Description
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <div className="px-2 py-1 w-15 text-uppercase text-muted fw-500">
                                                        Last modified
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-9 col-lg-9">
                                                    <span className="px-2 py-1">Murali Chowhan on Dec 10, 05:45 PM</span>
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <h5 style={{ marginLeft: "8px" }}>Notes:</h5>
                                                    <div className="form-group p-2">
                                                        <textarea cols="20" className="form-control transition"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default TaskDetails
