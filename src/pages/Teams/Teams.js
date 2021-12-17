
import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
    Col,
    Container, Row,
} from "reactstrap"
import ChatSidebar from "./ChatSidebar";

class Teams extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Dashboard | EazyRooms - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <Container fluid>
                        <Row>
                            <Col md="4">
                                <ChatSidebar />
                            </Col>
                            <Col md="8">
                                {/* <ChatBox /> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Teams;
