import React, { Component } from "react";
import 'react-responsive-modal/styles.css';
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
    Table
} from "reactstrap"

import { Link } from "react-router-dom"

import classnames from "classnames"

class Finance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false
        }
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
        this.state = {
            show: false,
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

    onClickButton = e => {
        e.preventDefault()
        this.setState({ openModal: true })
    }

    onCloseModal = () => {
        this.setState({ openModal: false })
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

    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col md="3">
                                            <Nav pills className="flex-column">
                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            'mb-2': true,
                                                            active: this.state.verticalActiveTab === "1"
                                                        })}
                                                        onClick={() => {
                                                            this.toggleVertical("1")
                                                        }}
                                                    >Transaction
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            'mb-2': true,
                                                            active: this.state.verticalActiveTab === "2"
                                                        })}
                                                        onClick={() => {
                                                            this.toggleVertical("2")
                                                        }}
                                                    >
                                                        Invoices
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            'mb-2': true,
                                                            active: this.state.verticalActiveTab === "3",
                                                        })}
                                                        onClick={() => {
                                                            this.toggleVertical("3")
                                                        }}
                                                    >
                                                        Taxes
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem className="">
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            active: this.state.verticalActiveTab === "4"
                                                        })}
                                                        onClick={() => {
                                                            this.toggleVertical("4")
                                                        }}
                                                    >
                                                        Revenue
                                                    </NavLink>
                                                </NavItem>
                                                <hr />
                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            active: this.state.verticalActiveTab === "5"
                                                        })}
                                                        onClick={() => {
                                                            this.toggleVertical("5")
                                                        }}
                                                    >
                                                        Coupons
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem>
                                                    <NavLink
                                                        style={{ cursor: "pointer" }}
                                                        className={classnames({
                                                            active: this.state.verticalActiveTab === "6"
                                                        })}
                                                        onClick={() => {
                                                            this.toggleVertical("6")
                                                        }}
                                                    >
                                                        Coupons Usage
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Col>
                                        <Col md="9">
                                            <TabContent activeTab={this.state.verticalActiveTab} className="text-muted mt-4 mt-md-0">
                                                <TabPane tabId="1">
                                                    <h4>Transactions</h4>
                                                    <div className="row mb-3">
                                                        <div className="col-sm-12 col-md-7 col-lg-7">
                                                            <input className="form-control" type="text" placeholder="Search for transactions" />
                                                        </div>
                                                        <div className="col-sm-12 col-md-3 col-lg-3">
                                                            <input className="form-control" type="date" />
                                                        </div>
                                                        <div className="col-sm-12 col-md-2 col-lg-2">
                                                            <button className="btn btn-primary"
                                                                onClick={this.toggle}
                                                            >
                                                                <span className="mat-button-wrapper d-flex align-items-center">
                                                                    <i className="bx bx-slider-alt"></i>
                                                                    &nbsp; Filters
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {this.state.show ?
                                                        <div className="row mb-3">
                                                            <div className="col-sm-12 col-md-2 col-lg-2">

                                                                <button className="btn btn-default border finance-buttons">
                                                                    <i className="mdi mdi-account-cog-outline"> </i>Customer
                                                                </button>

                                                            </div>
                                                            <div className="col-sm-12 col-md-2 col-lg-2">

                                                                <button className="btn btn-default border finance-buttons">
                                                                    <i className="mdi mdi-android-messages"> </i>Service
                                                                </button>

                                                            </div>
                                                            <div className="col-sm-12 col-md-2 col-lg-2">

                                                                <button className="btn btn-default border finance-buttons">
                                                                    <i className="mdi mdi-account-box-multiple"> </i>Employee
                                                                </button>

                                                            </div>
                                                        </div>
                                                        :
                                                        null}


                                                    <Table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Invoice</th>
                                                                <th>Date</th>
                                                                <th>Customer</th>
                                                                <th>Service</th>
                                                                <th>Payment Type</th>
                                                                <th>Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                        <label className="form-check-label" htmlFor="flexCheckDefault"> </label>
                                                                    </div>
                                                                </td>
                                                                <td>INV001</td>
                                                                <td>
                                                                    01/11/2021
                                                                </td>
                                                                <td>
                                                                    Customer1
                                                                </td>
                                                                <td>
                                                                    Pro service
                                                                </td>
                                                                <td>
                                                                    Cash
                                                                </td>
                                                                <td>
                                                                    <i className="fas fa-check text-success"></i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <h4>Invoice</h4>
                                                    <div className="row mb-3">
                                                        <div className="col-sm-12 col-md-7 col-lg-7">
                                                            <input className="form-control" type="text" placeholder="Search for transactions" />
                                                        </div>
                                                        <div className="col-sm-12 col-md-3 col-lg-3">
                                                            <input className="form-control" type="date" />
                                                        </div>
                                                        <div className="col-sm-12 col-md-2 col-lg-2">
                                                            <button className="btn btn-primary">
                                                                <span className="mat-button-wrapper d-flex">
                                                                    <i className="bx bx-slider-alt"></i>
                                                                    &nbsp; Filters
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-sm-12 col-md-2 col-lg-2">

                                                            <button className="btn btn-default border finance-buttons">
                                                                <i className="mdi mdi-account-cog-outline"> </i>Customer
                                                            </button>

                                                        </div>
                                                        <div className="col-sm-12 col-md-2 col-lg-2">

                                                            <button className="btn btn-default border finance-buttons">
                                                                <i className="mdi mdi-android-messages"> </i>Service
                                                            </button>

                                                        </div>
                                                        <div className="col-sm-12 col-md-2 col-lg-2">

                                                            <button className="btn btn-default border finance-buttons">
                                                                <i className="mdi mdi-account-box-multiple"> </i>Employee
                                                            </button>

                                                        </div>
                                                    </div>

                                                    <Table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Invoice</th>
                                                                <th>Date</th>
                                                                <th>Customer</th>
                                                                <th>Service</th>
                                                                <th>Payment Type</th>
                                                                <th>Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                        <label className="form-check-label" htmlFor="flexCheckDefault"> </label>
                                                                    </div>
                                                                </td>
                                                                <td>INV001</td>
                                                                <td>
                                                                    01/11/2021
                                                                </td>
                                                                <td>
                                                                    Customer1
                                                                </td>
                                                                <td>
                                                                    Pro service
                                                                </td>
                                                                <td>
                                                                    Cash
                                                                </td>
                                                                <td>
                                                                    <i className="fas fa-check text-success"></i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </TabPane>
                                                <TabPane tabId="3">
                                                    <div className="d-flex justify-content-between">
                                                        <h4>Taxes</h4>

                                                        <button className="btn btn-primary">
                                                            + Add Tax rate
                                                        </button>
                                                    </div>

                                                    <Table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Tax Rate Name</th>
                                                                <th>Rate</th>
                                                                <th>Status</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                        </tbody>
                                                    </Table>

                                                </TabPane>

                                                <TabPane tabId="4">
                                                    <Table className="table mb-0">
                                                        Revenue
                                                    </Table>
                                                </TabPane>

                                                <TabPane tabId="5">
                                                    <div className="d-flex justify-content-between">
                                                        <h4>Coupons</h4>
                                                        <Link to="/add-coupon"> <button className="btn btn-primary">
                                                            + Add Coupon
                                                        </button>
                                                        </Link>
                                                    </div>

                                                    <Table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Coupon code</th>
                                                                <th>Discount</th>
                                                                <th>Per User</th>
                                                                <th>Usage</th>
                                                                <th>Valid until</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>INV001</td>
                                                                <td>
                                                                    #422303P
                                                                </td>
                                                                <td>
                                                                    10%
                                                                </td>
                                                                <td>2</td>
                                                                <td>
                                                                    0/20
                                                                </td>
                                                                <td>
                                                                    12/02/2021
                                                                </td>
                                                                <td>
                                                                    <div className="d-flex">
                                                                        <Link to="/add-coupon"> <i style={{ color: "#808080" }} className="fas fa-edit"></i></Link>
                                                                        <i className="far fa-trash-alt" style={{ marginLeft: "10px" }}></i>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </TabPane>
                                                <TabPane tabId="6">
                                                    <div className="d-flex justify-content-between">
                                                        <h4>Coupons Usage</h4>
                                                    </div>

                                                    <Table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                        <label className="form-check-label" htmlFor="flexCheckDefault"> </label>
                                                                    </div>
                                                                </th>
                                                                <th>User Name</th>
                                                                <th>Coupon code</th>
                                                                <th>Time Used</th>
                                                                <th>Service Opted</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                        <label className="form-check-label" htmlFor="flexCheckDefault"> </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    User
                                                                </td>
                                                                <td>
                                                                    Coupon
                                                                </td>
                                                                <td>
                                                                    0/100
                                                                </td>
                                                                <td>
                                                                    All Services
                                                                </td>

                                                                <td>
                                                                    <div className="d-flex">
                                                                        <i className="fas fa-edit"
                                                                            onClick={this.onClickButton}
                                                                        ></i>
                                                                        <i className="far fa-trash-alt" style={{ marginLeft: "10px" }}></i>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                        {/* <AddCoupons /> */}
                                                    </Table>
                                                </TabPane>
                                            </TabContent>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                    Here you can add anything y
                    <h1>You Did it!</h1>
                </Modal> */}
            </React.Fragment>
        )
    }
}

export default Finance
