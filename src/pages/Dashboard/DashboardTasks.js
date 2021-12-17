import React, { Component } from "react"
import { Card, CardBody, Nav, NavItem, NavLink, Table } from "reactstrap"
import { Link } from "react-router-dom";
import classnames from "classnames";
//Simple bar
import SimpleBar from "simplebar-react";
import { Button, Modal } from 'react-bootstrap';

class DashboardTasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "1"
        }
        this.state = {
            show: false
        }
        this.toggleTab = this.toggleTab.bind(this)
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="card-title">Tasks</h4>
                            <div className="d-flex align-items-center">
                                <Link to="/tasks"><i className="mdi mdi-open-in-new me-3" style={{ color: "#495057" }}></i></Link>
                                <i className="fa fa-plus" style={{ cursor: "pointer" }}
                                    onClick={() => this.handleModal()}
                                ></i>
                            </div>
                        </div>
                        <Nav pills className="bg-light d-flex rounded">
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "1"
                                    })}
                                    onClick={() => {
                                        this.toggleTab("1")
                                    }}
                                >
                                    In Process
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "2"
                                    })}
                                    onClick={() => {
                                        this.toggleTab("2")
                                    }}
                                >
                                    Up Coming
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <div className="mt-4">
                            <SimpleBar style={{ maxHeight: "250px" }}>
                                <div className="table-responsive">
                                    <Table className="table table-nowrap align-middle table-hover mb-0">
                                        <tbody>
                                            <tr className="d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <td>
                                                        <div className="mb-3 form-check">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14 mb-1">
                                                            <Link to="#" className="text-dark">
                                                                EazyRooms Saas Dashboard
                                                            </Link>
                                                        </h5>
                                                        <p className="text-muted small mb-0">12/09/2021</p>
                                                        <p className="text-muted mb-0">Assigned to Mark</p>
                                                    </td>
                                                </div>
                                                <i className="bx bxs-edit-alt"></i>
                                            </tr>


                                            <tr className="d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <td>
                                                        <div className="mb-3 form-check">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14 mb-1">
                                                            <Link to="#" className="text-dark">
                                                                Blog Template UI
                                                            </Link>
                                                        </h5>
                                                        <p className="text-muted small mb-0">12/09/2021</p>
                                                        <p className="text-muted mb-0">
                                                            Assigned to Dianna
                                                        </p>
                                                    </td>
                                                </div>
                                                <i className="bx bxs-edit-alt"></i>
                                            </tr>

                                            <tr className="d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    </div>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14 mb-1">
                                                            <Link to="#" className="text-dark">
                                                                Multipurpose Landing
                                                            </Link>
                                                        </h5>
                                                        <p className="text-muted small mb-0">12/09/2021</p>
                                                        <p className="text-muted mb-0">
                                                            Assigned to Team B
                                                        </p>
                                                    </td>
                                                </div>
                                                <i className="bx bxs-edit-alt"></i>
                                            </tr>

                                            <tr className="d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <td>
                                                        <div className="mb-3 form-check">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 className="text-truncate font-size-14 mb-1">
                                                            <Link to="#" className="text-dark">
                                                                Redesign - Landing page
                                                            </Link>
                                                        </h5>
                                                        <p className="text-muted small mb-0">12/09/2021</p>
                                                        <p className="text-muted mb-0">Assigned to Jerry</p>
                                                    </td>
                                                </div>
                                                <Link to="/taskdetails">
                                                    <i className="bx bxs-edit-alt" style={{ color: "#495057" }}></i>
                                                </Link>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </SimpleBar>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-primary"
                                    onClick={() => this.handleModal()}
                                >Add new task</button>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton className="modal-title mt-0 h5">Add New Task</Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label>Task Title</label>
                            <input type="text" className="form-control" placeholder="Enter tasks title" />
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Priority</label>
                                <select className="form-control">
                                    <option>High</option>
                                    <option>Low</option>
                                    <option>Medium</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Assinged Staff</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Task Status</label>
                                <select className="form-control">
                                    <option>Not Sorted</option>
                                    <option>Inprogess</option>
                                    <option>Completed</option>
                                    <option>Cancelled</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label>Description</label>
                                <textarea rows="3" type="text" className="form-control" placeholder="write here..." />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-light" onClick={() => this.handleModal()}>Close</Button>
                        <Button className="btn btn-success" onClick={() => this.handleModal()}>Create</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default DashboardTasks
