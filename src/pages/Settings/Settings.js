import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import MetaTags from 'react-meta-tags'
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../Bookings/bookings.scss";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from "reactstrap";

import classnames from "classnames";;
// import PaymentGateways from "./Paymentgateways/PaymentGateways";
import Staff from "./Staff/Staff";
import Roles from "./Roles/Roles";;
import CompanySettings from "./CompanySettings/CompanySettings";
import WorkingHours from "./WorkingHours/WorkingHours";
import DepartmentAndCategories from "./DepartmentsAndCategory/DepartmentAndCategories";
import SMSsettings from "./SMS-settings/SMSSettings";
import SMSTemplates from "./SMS-settings/SMSTemplates";
import PaymentSettings from "./PaymentSettings/PaymentSettings";
import SnippetSettings from "./SnippetSettings/SnippetSettings";
import LiveChatSettings from "./LiveChatSettings/LiveChatSettings";
import PipelineSettings from "./PipelineSettings/PipelineSettings";
import Fields from "./Fields/Fields";
import ManageMyPlan from "./ManageMyPlan/ManageMyPlan";
import ManagePlanIndex from "./ManageMyPlan/ManagePlanIndex";

class Settings extends Component {

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
                <div className="page-content">
                    <MetaTags>
                        <title>Settings | EazyRooms - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <div className="container-fluid">
                        <Breadcrumbs title="Tables" breadcrumbItem="Settings" />
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
                                                >General Settings
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
                                                    Company Settings
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
                                                    Working Hours
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "4"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("4")
                                                    }}
                                                >
                                                    Roles and Permissions
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "5"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("5")
                                                    }}
                                                >
                                                    Departments & Category
                                                </NavLink>
                                            </NavItem>
                                            {/* <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        active: this.state.verticalActiveTab === "6"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("6")
                                                    }}
                                                >
                                                    Languages
                                                </NavLink>
                                            </NavItem> */}
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "7"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("7")
                                                    }}
                                                >
                                                    Product & Services
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "8"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("8")
                                                    }}
                                                >
                                                    Manage Staff
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "9"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("9")
                                                    }}
                                                >
                                                    SMS Settings
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "10"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("10")
                                                    }}
                                                >
                                                    Email Settings
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "11"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("11")
                                                    }}
                                                >
                                                    Payment Settings
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "12"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("12")
                                                    }}
                                                >
                                                    Code Snippets
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "13"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("13")
                                                    }}
                                                >
                                                    Pipeline Settings
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "14"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("14")
                                                    }}
                                                >
                                                    Live Chat Settings
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "15"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("15")
                                                    }}
                                                >
                                                    Manage My Plan
                                                </NavLink>
                                            </NavItem>


                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: this.state.verticalActiveTab === "16"
                                                    })}
                                                    onClick={() => {
                                                        this.toggleVertical("16")
                                                    }}
                                                >
                                                    Fields
                                                </NavLink>
                                            </NavItem>

                                        </Nav>
                                    </Col>
                                    <Col md="9" className="border-start">
                                        <TabContent activeTab={this.state.verticalActiveTab} className="text-muted mt-4 mt-md-0">
                                            <TabPane tabId="1">
                                                <h4 className="border-bottom pb-2 border-2">
                                                    General Settings
                                                </h4>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <CompanySettings />
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <WorkingHours />
                                                {/* <PaymentGateways /> */}
                                            </TabPane>

                                            <TabPane tabId="4">
                                                <Roles />
                                                {/* <EmailTemplates /> */}
                                            </TabPane>
                                            <TabPane tabId="5">
                                                <Row>
                                                    <DepartmentAndCategories />
                                                </Row>
                                            </TabPane>
                                            {/* <TabPane tabId="6">
                                                <p className="mb-0">Fana assasas asasass asas
                                                </p>
                                            </TabPane> */}
                                            <TabPane tabId="7">
                                                <p className="mb-0">Sdvf Fan
                                                </p>
                                            </TabPane>
                                            <TabPane tabId="8">
                                                <Staff />
                                            </TabPane>
                                            <TabPane tabId="9">
                                                <SMSsettings />
                                            </TabPane>
                                            <TabPane tabId="10">
                                                <SMSTemplates />
                                                {/* <Roles /> */}
                                            </TabPane>
                                            <TabPane tabId="11">
                                                <PaymentSettings />
                                            </TabPane>
                                            <TabPane tabId="12">
                                                <SnippetSettings />
                                            </TabPane>
                                            <TabPane tabId="13">
                                                <PipelineSettings />
                                            </TabPane>
                                            <TabPane tabId="14">
                                                <LiveChatSettings />
                                            </TabPane>
                                            <TabPane tabId="15">
                                                <ManagePlanIndex />
                                            </TabPane>
                                            <TabPane tabId="16">
                                                <Fields />
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Settings