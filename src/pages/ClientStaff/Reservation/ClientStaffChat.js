import Breadcrumbs from "components/Common/Breadcrumb";
import React, { Component, useState } from "react"
import MetaTags from 'react-meta-tags';
import {
    Row,
    Col
} from "reactstrap"
import '../../../index.css';

function ClientStaffChat() {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Chat | EazyRooms - React Admin & Dashboard Template</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs title="Tables" breadcrumbItem="Chat" />
                    <Row>
                        <Col md={12}>
                            {/* <ChatBox /> */}
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ClientStaffChat
