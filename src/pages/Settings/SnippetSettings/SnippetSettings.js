import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap";

import classnames from "classnames";

class SnippetSettings extends Component {

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
                <h4 className="border-bottom pb-2 border-2">Snippet Settings</h4>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardBody>
                                <Nav tabs className="nav-tabs-custom nav-justified">
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
                                            <span className="d-none d-sm-block">Live Chat</span>
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
                                            <span className="d-none d-sm-block">End user iframe</span>
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
                                            <span className="d-none d-sm-block">Push notification</span>
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
                                            <span className="d-none d-sm-block">Custom Form</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                                <TabContent activeTab={this.state.customActiveTab} className="p-3 text-muted">
                                    <TabPane tabId="1">
                                        <Card>
                                            <CardBody>
                                                <h4 className="card-title">Code Snippet</h4>
                                                <p className="card-title-desc">Place this code in your website inorder to display widget</p>

                                                <blockquote className="blockquote bg-light">
                                                    <code className="highlighter-rouge">
                                                        <pre className="text-danger">
                                                            Widget Code for https://dyno.worke.in/
                                                            <script async src="https://dyno.worke.in/widget/bw2h2oh7mhqt7yh2qsr3xpywi4hzo9so"></script>
                                                            END Pixel Code

                                                        </pre>
                                                    </code>
                                                </blockquote>

                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-outline-info btn-sm float-end">
                                                        Copy Code
                                                    </button>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Card>
                                            <CardBody>
                                                <h4 className="card-title">Code Snippet</h4>
                                                <p className="card-title-desc">Place this code in your website inorder to display widget</p>

                                                <blockquote className="blockquote bg-light">
                                                    <code className="highlighter-rouge">
                                                        <pre className="text-danger">
                                                            Widget Code for https://dyno.worke.in/
                                                            <script async src="https://dyno.worke.in/widget/bw2h2oh7mhqt7yh2qsr3xpywi4hzo9so"></script>
                                                            END Pixel Code

                                                        </pre>
                                                    </code>
                                                </blockquote>

                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-outline-info btn-sm float-end">
                                                        Copy Code
                                                    </button>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Card>
                                            <CardBody>
                                                <h4 className="card-title">Code Snippet</h4>
                                                <p className="card-title-desc">Place this code in your website inorder to display widget</p>

                                                <blockquote className="blockquote bg-light">
                                                    <code className="highlighter-rouge">
                                                        <pre className="text-danger">
                                                            Widget Code for https://dyno.worke.in/
                                                            <script async src="https://dyno.worke.in/widget/bw2h2oh7mhqt7yh2qsr3xpywi4hzo9so"></script>
                                                            END Pixel Code

                                                        </pre>
                                                    </code>
                                                </blockquote>

                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-outline-info btn-sm float-end">
                                                        Copy Code
                                                    </button>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Card>
                                            <CardBody>
                                                <h4 className="card-title">Code Snippet</h4>
                                                <p className="card-title-desc">Place this code in your website inorder to display widget</p>

                                                <blockquote className="blockquote bg-light">
                                                    <code className="highlighter-rouge">
                                                        <pre className="text-danger">
                                                            Widget Code for https://dyno.worke.in/
                                                            <script async src="https://dyno.worke.in/widget/bw2h2oh7mhqt7yh2qsr3xpywi4hzo9so"></script>
                                                            END Pixel Code

                                                        </pre>
                                                    </code>
                                                </blockquote>

                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-outline-info btn-sm float-end">
                                                        Copy Code
                                                    </button>
                                                </div>
                                            </CardBody>
                                        </Card>
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

export default SnippetSettings
