// import Tasks from "pages/Chat/tasks";
import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Col,
  Container, Row,
} from "reactstrap"
import DashboardCards from "./DashboardCards";
import DashboardProfile from "./DashboardProfile";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Properties",
          value: "1,452",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-archive-in",
          title: "Hotels And Resorts",
          value: "$ 28,452",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Vacations Stays And Rental Homes",
          value: "$ 16.2",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },
        {
          icon: "fas fa-hotel",
          title: "Active Hotels",
          value: "$ 16.2",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },
        {
          icon: "fas fa-book",
          title: "Bookings",
          value: "$ 16.2",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },
        {
          icon: "fas fa-wave-square",
          title: "In Room Orders And Requests",
          value: "$ 16.2",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Dashboard | EazyRooms - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <h4>Dashboard</h4>
            <div className="mb-3">
              <DashboardProfile />
            </div>
            <div className="mb-3">
              <Row>
                <DashboardCards reports={this.state.reports} />
              </Row>
            </div>
            <div className="mb-3">
              <Row>
                <Col md="4">
                  {/* <Tasks /> */}
                </Col>
                <Col md="8">
                  {/* <ChatBox /> */}
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;
