import React, { Component } from "react"
import {
    Button,
    Card,
    CardBody
} from "reactstrap"
import "./profile.css";

class ChangePassword extends Component {
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
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">Change Password</h4>
                        <div className="mb-3">
                            <label>Old Password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>New Password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Re-enter Password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button type="submit" color="danger">
                                Update User Name
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        )
    }
}

export default ChangePassword

