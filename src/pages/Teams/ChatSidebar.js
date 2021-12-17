import React, { Component } from "react"
import { Card, CardBody, Col, Input, Label, Nav, NavItem, NavLink, Table } from "reactstrap"
import { Link } from "react-router-dom"
import classnames from "classnames"
import './Teams.css'
//Simple bar
import SimpleBar from "simplebar-react"

class Tasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "1"
        }
        this.toggleTab = this.toggleTab.bind(this)
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
                        <h4 className="card-title mb-4">Tasks</h4>
                        <Nav pills className="bg-light d-flex justify-content-between rounded">
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "1"
                                    })}
                                    onClick={() => {
                                        this.toggleTab("1")
                                    }}
                                >
                                    <i className="fas fa-comments"></i>
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
                                    <i className="fas fa-user" ></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "3"
                                    })}
                                    onClick={() => {
                                        this.toggleTab("3")
                                    }}
                                >
                                    <i className="fas fa-clock" ></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === "4"
                                    })}
                                    onClick={() => {
                                        this.toggleTab("4")
                                    }}
                                >
                                    <i className="fas fa-check" ></i>
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <div className="mt-4">
                            <SimpleBar style={{ maxHeight: "250px" }}>
                                <div className="table-responsive">
                                    <Table className="table table-nowrap align-middle table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check" style={{ paddingLeft: "0px" }}>
                                                      <img src="./images/avatar-5.jpg" className="rounded" width="40" />
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
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-check" style={{ paddingLeft: "0px" }}>
                                                    <img src="./images/avatar-4.jpg" className="rounded" width="40" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="text-truncate font-size-14 mb-1">
                                                        <Link to="#" className="text-dark">
                                                            New Landing UI
                                                        </Link>
                                                    </h5>
                                                    <p className="text-muted small mb-0">12/09/2021</p>
                                                    <p className="text-muted mb-0">
                                                        Assigned to Team A
                                                    </p>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-check" style={{ paddingLeft: "0px" }}>
                                                    <img src="./images/avatar-3.jpg" className="rounded" width="40" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="text-truncate font-size-14 mb-1">
                                                        <Link to="#" className="text-dark">
                                                            Brand logo design
                                                        </Link>
                                                    </h5>
                                                    <p className="text-muted small mb-0">12/09/2021</p>
                                                    <p className="text-muted mb-0">Assigned to Janis</p>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-check" style={{ paddingLeft: "0px" }}>
                                                    <img src="./images/avatar-2.jpg" className="rounded" width="40" />
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

                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="form-check" style={{ paddingLeft: "0px" }}>
                                                    <img src="./images/avatar-1.jpg" className="rounded" width="40" />
                                                    </div>
                                                </td>
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

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check" style={{ paddingLeft: "0px" }}>
                                                    <img src="./images/avatar-3.jpg" className="rounded" width="40" />
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

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check" style={{ paddingLeft: "0px" }}>
                                                    <img src="./images/avatar-4.jpg" className="rounded" width="40" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5 className="text-truncate font-size-14 mb-1">
                                                        <Link to="#" className="text-dark">
                                                            EazyRooms Crypto Dashboard
                                                        </Link>
                                                    </h5>
                                                    <p className="text-muted small mb-0">12/09/2021</p>
                                                    <p className="text-muted mb-0">Assigned to Eric</p>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </SimpleBar>
                        </div>
                    </CardBody>

                    {/* <div className="card-footer bg-transparent border-top">
            <div className="text-center">
              <Link
                to="#"
                className="btn btn-primary"
              >
                {" "}
                Add new Task
              </Link>
            </div>
          </div> */}
                </Card>
            </React.Fragment>
        )
    }
}

export default Tasks
