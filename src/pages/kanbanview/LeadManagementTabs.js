import React, { Component } from "react";
import {
    Card,
    CardBody,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap";

import classnames from "classnames"
import InfoAndNotes from "./LeadsComponents/InofAndNotes";

class LeadManagementTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "1",
            activeTab1: "5",
            activeTab2: "9",
            activeTab3: "13",
            verticalActiveTab: "1",
            verticalActiveTabWithIcon: "1",
            customActiveTab: "1",
            customIconActiveTab: "1",
            activeTabJustify: "5",
            col1: true,
            col2: false,
            col3: false,
            col5: true,
            col6: true,
            col7: true,
            col8: true,
            col9: true,
            col10: false,
            col11: false,
        }
        this.toggle = this.toggle.bind(this)
        this.toggle1 = this.toggle1.bind(this)

        this.t_col1 = this.t_col1.bind(this)
        this.t_col2 = this.t_col2.bind(this)
        this.t_col3 = this.t_col3.bind(this)
        this.t_col5 = this.t_col5.bind(this)
        this.t_col6 = this.t_col6.bind(this)
        this.t_col7 = this.t_col7.bind(this)
        this.t_col8 = this.t_col8.bind(this)
        this.t_col9 = this.t_col9.bind(this)
        this.t_col10 = this.t_col10.bind(this)
        this.t_col11 = this.t_col11.bind(this)

        this.toggle2 = this.toggle2.bind(this)
        this.toggle3 = this.toggle3.bind(this)

        this.toggleVertical = this.toggleVertical.bind(this)
        this.toggleVerticalIcon = this.toggleVerticalIcon.bind(this)
        this.toggleCustom = this.toggleCustom.bind(this)
        this.toggleIconCustom = this.toggleIconCustom.bind(this)
    }

    t_col1() {
        this.setState({
            col1: !this.state.col1,
            col2: false,
            col3: false
        })
    }

    t_col2() {
        this.setState({
            col1: false,
            col2: !this.state.col2,
            col3: false
        })
    }

    t_col3() {
        this.setState({
            col1: false,
            col2: false,
            col3: !this.state.col3
        })
    }

    t_col5() {
        this.setState({ col5: !this.state.col5 })
    }

    t_col6() {
        this.setState({ col6: !this.state.col6 })
    }

    t_col7() {
        this.setState({ col7: !this.state.col7 })
    }

    t_col8() {
        this.setState({
            col6: !this.state.col6,
            col7: !this.state.col7
        })
    }

    t_col9() {
        this.setState({
            col9: !this.state.col9,
            col10: false,
            col11: false
        })
    }

    t_col10() {
        this.setState({
            col10: !this.state.col10,
            col9: false,
            col11: false
        })
    }

    t_col11() {
        this.setState({
            col11: !this.state.col11,
            col9: false,
            col10: false
        })
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            })
        }
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab,
            })
        }
    }

    toggle2(tab) {
        if (this.state.activeTab2 !== tab) {
            this.setState({
                activeTab2: tab,
            })
        }
    }

    toggle3(tab) {
        if (this.state.activeTab3 !== tab) {
            this.setState({
                activeTab3: tab,
            })
        }
    }

    toggleVertical(tab) {
        if (this.state.verticalActiveTab !== tab) {
            this.setState({
                verticalActiveTab: tab,
            })
        }
    }

    toggleVerticalIcon(tab) {
        if (this.state.verticalActiveTabWithIcon !== tab) {
            this.setState({
                verticalActiveTabWithIcon: tab,
            })
        }
    }

    toggleCustom(tab) {
        if (this.state.customActiveTab !== tab) {
            this.setState({
                customActiveTab: tab,
            })
        }
    }

    toggleIconCustom(tab) {
        if (this.state.customIconActiveTab !== tab) {
            this.setState({
                customIconActiveTab: tab,
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardBody>

                                <Nav tabs className="nav-tabs-custom ">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "1",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("1")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                            <span className="d-none d-sm-block">Info & notes</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "2",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("2")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                            <span className="d-none d-sm-block">Timeline</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "3",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("3")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                            <span className="d-none d-sm-block">Emails</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "4",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("4")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                            <span className="d-none d-sm-block">Stage History</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "5",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("5")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                            <span className="d-none d-sm-block">Files</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "6",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("6")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                            <span className="d-none d-sm-block">Products</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "7",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("7")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                            <span className="d-none d-sm-block">Task</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: this.state.customActiveTab === "8",
                                            })}
                                            onClick={() => {
                                                this.toggleCustom("8")
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                            <span className="d-none d-sm-block">Follow Up</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                                <TabContent activeTab={this.state.customActiveTab} className="p-3 text-muted">
                                    <TabPane tabId="1">
                                        <InfoAndNotes />
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <div className="d-flex justify-content-end mb-3">
                                            <div className="form-check form-switch mt-3 d-flex justify-content-end">
                                                <input type="checkbox" className="form-check-input" id="customSwitches" />
                                                <label className="custom-control-label" htmlFor="customSwitches"></label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label>Publishable Key</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Stripe Secret</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Stripe Webhook Secret Key</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="mt-4">
                                            <label className="form-label">Webhook URL:</label>
                                            <p className="fw-bold"> https://app.worke.io/stripe </p>
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-primary">Save</button>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <div className="d-flex justify-content-end mb-3">
                                            <div className="form-check form-switch mt-3 d-flex justify-content-end">
                                                <input type="checkbox" className="form-check-input" id="customSwitches" />
                                                <label className="custom-control-label" htmlFor="customSwitches"></label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label>Paypal Client Id</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Paypal Secret</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mt-4">
                                            <label className="form-label">Webhook URL:</label>
                                            <p className="fw-bold"> https://app.worke.io/stripe </p>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-primary">Save</button>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <div className="d-flex justify-content-end mb-3">
                                            <div className="form-check form-switch mt-3 d-flex justify-content-end">
                                                <input type="checkbox" className="form-check-input" id="customSwitches" />
                                                <label className="custom-control-label" htmlFor="customSwitches"></label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label>Authorize Api Login Id</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Authorize Transaction Key</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mt-4">
                                            <label className="form-label">Webhook URL:</label>
                                            <p className="fw-bold"> https://app.worke.io/stripe </p>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-primary">Save</button>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default LeadManagementTabs
