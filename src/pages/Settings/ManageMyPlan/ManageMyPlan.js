import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import { Container, Row, Col } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import Pricing Cards
import CardPricing from "./Card-pricing";

class ManageMyPlan extends Component {
    state = {
        pricings: [
            {
                id: 1,
                title: "Starter",
                description: "Neque quis est",
                icon: "bx-walk",
                price: "19",
                duration: "Per month",
                link: "",
                features: [
                    { title: "Free Live Support" },
                    { title: "Unlimited User" },
                    { title: "No Time Tracking" },
                    { title: "Free Setup" },
                ],
            },
            {
                id: 2,
                title: "Professional",
                description: "Quis autem iure",
                icon: "bx-run",
                price: "29",
                duration: "Per month",
                link: "",
                features: [
                    { title: "Free Live Support" },
                    { title: "Unlimited User" },
                    { title: "No Time Tracking" },
                    { title: "Free Setup" },
                ],
            },
            {
                id: 3,
                title: "Enterprise",
                description: "Sed ut neque unde",
                icon: "bx-cycling",
                price: "39",
                duration: "Per month",
                link: "",
                features: [
                    { title: "Free Live Support" },
                    { title: "Unlimited User" },
                    { title: "No Time Tracking" },
                    { title: "Free Setup" },
                ],
            },
            {
                id: 4,
                title: "Unlimited",
                description: "Itaque earum hic",
                icon: "bx-car",
                price: "49",
                duration: "Per month",
                link: "",
                features: [
                    { title: "Free Live Support" },
                    { title: "Unlimited User" },
                    { title: "No Time Tracking" },
                    { title: "Free Setup" },
                ],
            },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <title>Pricing | Skote - React Admin & Dashboard Template</title>
                </MetaTags>
                <div className="row">
                    {/* Render pricing cards */}
                    {this.state.pricings.map((pricing, key) => (
                        <CardPricing pricing={pricing} key={"_pricing_" + key} />
                    ))}
                </div>


            </React.Fragment>
        )
    }
}

export default ManageMyPlan
