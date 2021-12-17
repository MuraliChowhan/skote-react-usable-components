import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import {
    Card,
    Row,
    CardBody,
    Col,
    Collapse,
    Input,
    Label,
} from "reactstrap"
import Switch from "react-switch"
import '../../../index.css';

class PaymentGateways extends Component {
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
            col6: false,
            col7: true
        }

        this.t_col6 = this.t_col6.bind(this)
        this.t_col7 = this.t_col7.bind(this)

    }

    t_col6() {
        this.setState({ col6: !this.state.col6 })
    }

    t_col7() {
        this.setState({ col7: !this.state.col7 })
    }

    render() {
        const Offsymbol = () => {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        color: "#fff",
                        paddingRight: 2
                    }}
                >
                    {" "}
                    No
                </div>
            )
        }
        const OnSymbol = props => {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        color: "#fff",
                        paddingRight: 2
                    }}
                >
                    {" "}
                    Yes
                </div>
            )
        }
        return (
            <React.Fragment>
                <MetaTags>
                    <title>PaymentGateways | EazyRooms - React Admin & Dashboard Template</title>
                </MetaTags>

                <Row>
                    <Col md={6}>
                        <div className="mb-3">
                            <Label htmlFor="formrow-firstname-Input">Currency Symbol</Label>
                            <Input
                                type="text"
                                className="form-control"
                                id="formrow-firstname-Input"
                                placeholder="Currency Symbol"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mb-3">
                            <Label htmlFor="formrow-firstname-Input">Currence Type</Label>
                            <Input
                                type="text"
                                className="form-control"
                                id="formrow-firstname-Input"
                                placeholder="Currency type"
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl="12">
                        <div className="mt-4">
                            <div className="d-flex gap-2 flex-wrap mb-3">
                                <div
                                    to="#"
                                    onClick={this.t_col6}
                                    style={{ cursor: "pointer", background: "rgb(246 248 249)" }}
                                    className="col-12 btn"
                                >
                                    <i className="fab fa-cc-stripe"></i>   Stripe
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Collapse isOpen={this.state.col6}>
                                        <Card>
                                            <CardBody className="border shadow-none text-muted mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div style={{ fontSize: "18px", fontWeight: "500" }}>
                                                        Stripe
                                                    </div>
                                                    <Row>
                                                        <Col lg="6">
                                                            <div>
                                                                <Switch
                                                                    uncheckedIcon={<Offsymbol />}
                                                                    className="me-1 mb-sm-8 mb-2"
                                                                    checkedIcon={<OnSymbol />}
                                                                    onColor="#626ed4"
                                                                    onChange={() =>
                                                                        this.setState({ switch1: !this.state.switch1 })
                                                                    }
                                                                    checked={this.state.switch1}
                                                                />

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row>
                                                    <Col md={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="formrow-firstname-Input">Stripe Key</Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="formrow-firstname-Input"
                                                                placeholder="Currency Symbol"
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="formrow-firstname-Input">Stripe Secret</Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="formrow-firstname-Input"
                                                                placeholder="Currency type"
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="formrow-firstname-Input">Stripe_Webhook_Secret</Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="formrow-firstname-Input"
                                                                placeholder="Currency type"
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl="12">
                        <div className="mt-4">
                            <div className="d-flex gap-2 flex-wrap mb-3">
                                <div
                                    to="#"
                                    onClick={this.t_col7}
                                    style={{ cursor: "pointer", color: "#000", background: "rgb(246 248 249)" }}
                                    className="col-12 btn "
                                >
                                    <i className="fab fa-cc-stripe"></i>  Paypal
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Collapse isOpen={this.state.col7}>
                                        <Card>
                                            <CardBody className="border shadow-none text-muted mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div style={{ fontSize: "18px", fontWeight: "500" }}>
                                                        Paypal
                                                    </div>
                                                    <Row>
                                                        <Col lg="6">
                                                            <div>
                                                                <Switch
                                                                    uncheckedIcon={<Offsymbol />}
                                                                    className="me-1 mb-sm-8 mb-2"
                                                                    checkedIcon={<OnSymbol />}
                                                                    onColor="#626ed4"
                                                                    onChange={() =>
                                                                        this.setState({ switch1: !this.state.switch1 })
                                                                    }
                                                                    checked={this.state.switch1}
                                                                />

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="formrow-firstname-Input">Client Id</Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="formrow-firstname-Input"
                                                                placeholder="Currency type"
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="formrow-firstname-Input">Stripe Secret</Label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                id="formrow-firstname-Input"
                                                                placeholder="Currency type"
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default PaymentGateways
