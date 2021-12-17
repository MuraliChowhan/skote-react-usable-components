import React, { Component } from "react"
import {
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import "./profile.css";

class ProfileCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reports: [
                { title: "Orders", iconClass: "far fa-check-circle", description: "1,235" },
                {
                    title: "Revenue",
                    iconClass: "far fa-hourglass",
                    description: "$35, 723",
                },
                {
                    title: "Average Price",
                    iconClass: "fas fa-cube",
                    description: "$16.2",
                },
            ],
            email: [
                { title: "Week", linkto: "#", isActive: false },
                { title: "Month", linkto: "#", isActive: false },
                { title: "Year", linkto: "#", isActive: true },
            ],
            modal: false,
            subscribemodal: false,
            chartSeries: [],
            periodType: "yearly"
        }

        this.togglemodal.bind(this)
        this.togglesubscribemodal.bind(this)
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }))
    }

    togglesubscribemodal = () => {
        this.setState(prevState => ({
            subscribemodal: !prevState.subscribemodal,
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    {
                        this.state.reports.map((item, index) =>
                            <Col sm="12" md="4" lg="4" key={index}>
                                <Card key={index}>
                                    <CardBody>
                                        <div className="d-flex justify-content-between">
                                            <div className="media">
                                                <div className="media-body">
                                                    <p className="text-muted fw-medium">{item.title}</p>
                                                    <h4 className="mb-0">{item.description}</h4>
                                                </div>
                                            </div>
                                            <div
                                                style={{ marginLeft: "4px" }}
                                                className="mini-stat-icon avatar-sm rounded-circle align-self-center">
                                                <span className="avatar-title">
                                                    <i className={item.iconClass} style={{ fontSize: "18px" }}></i>
                                                </span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </React.Fragment>
        )
    }
}

export default ProfileCards

