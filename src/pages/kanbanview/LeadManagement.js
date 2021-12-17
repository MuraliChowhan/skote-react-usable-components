import React, { useState } from "react";
import './kanbanview.css';
import { ViewModal } from "./ViewModal";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import KanbanView from "./kanbanview.css";
import LeadManagementTabs from "./LeadManagementTabs";
import DraggableRangeBar from "./DraggableRangeBar";

export const LeadManagement = (props) => {
    const [viewModal, setViewModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    // View button needed
    const kanbanData = [
        {
            _id: "01",
            name: "Pending",
            title: "Create a New Landing UI",
            desc: "To transfer data in a drag-and-drop action. To transfer data in a drag-and-drop action",
            borderColor: "3px solid #002bff",
            useName: "Sai",
            rollNumber: "B121250",
            date: "Sun 26/09/2021 02:00 PM",
            icon: "far fa-clock",
            profile: "./profile1.jpg",
            roomNo: "091",
            status: "waiting",
            bgcolor: "rgb(85 110 230 / 37%)"
        },
        {
            _id: "02",
            name: "Inprogress",
            title: "Topnav layout design",
            desc: " To handle data in a drag-and-drop action. To transfer data in a drag-and-drop action",
            borderColor: "3px solid orange",
            useName: "Kumar",
            rollNumber: "B121251",
            date: "Fri 26/09/2021 01:00 PM",
            icon: "far fa-clock",
            profile: "./profile1.jpg",
            roomNo: "191",
            status: "Approved",
            bgcolor: "rgb(52 195 141 / 37%)"
        },
        {
            _id: "03",
            name: "Completed",
            title: "Redesign - Landing page",
            desc: " To send data in a drag-and-drop action. To transfer data in a drag-and-drop action",
            borderColor: "3px solid green",
            useName: "Harish",
            rollNumber: "B121252",
            date: "Sat 26/09/2021 12:00 PM",
            icon: "far fa-clock",
            profile: "./profile1.jpg",
            roomNo: "292",
            status: "Pending",
            bgcolor: "rgb(241 180 76 / 54%)"
        }
    ]

    return (
        <>
            <div className="page-content">
                <Card>
                    <CardBody>
                        <Row>
                            <Col sm="12" md="3" lg="3">
                                <div className="mb-3 border-bottom ">
                                    <Link className="d-flex" to="/dashboard">
                                        <i className="mdi mdi-arrow-left"></i>
                                        <h4 className="border-2 border-light px-2">All Lead</h4>
                                    </Link>
                                </div>

                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Search..." />
                                </div>
                                <div className="card border p-2 mb-2" draggable="true">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="font-title">Inprogress</h6>
                                            <div className="d-flex align-items-center mb-3">
                                                <h6 className="text-muted mb-0">$123</h6>
                                                <p className="text-muted mb-0 font-size-10"
                                                    style={{ marginLeft: "3px" }}>12-09-2021</p>
                                            </div>
                                        </div>
                                        <div className="float-end ms-2">
                                            <span className="badge badge-soft-secondary font-size-10"
                                                style={{ backgroundColor: "rgb(85 110 230 / 32%)" }}
                                            >Approved</span>
                                        </div>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between align-items-center">
                                        <div className="avatar-group float-start">
                                            <div className="avatar-group-item">
                                                <a className="d-inline-block">
                                                    <img src="./images/avatar-1.jpg" className="rounded-circle avatar-xs" />
                                                </a>
                                            </div>
                                            <div className="avatar-group-item ng-star-inserted">
                                                <div className="avatar-group-item">
                                                    <a className="d-inline-block">
                                                        <img src="./images/avatar-1.jpg" className="rounded-circle avatar-xs" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <i className="mdi mdi-file-document-outline" style={{ marginRight: "4px" }}></i>
                                                <span className="text-muted">25</span>
                                            </div>
                                            <div className="d-flex mx-4">
                                                <i className="mdi mdi-web-clock" style={{ marginRight: "4px" }}></i>
                                                <span className="text-muted">85</span>
                                            </div>
                                            <div className="d-flex">
                                                <i className="mdi mdi-account-group" style={{ marginRight: "4px" }}></i>
                                                <span className="text-muted">53</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="card border p-2" draggable="true">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="font-title">Inprogress</h6>
                                            <div className="d-flex align-items-center mb-3">
                                                <h6 className="text-muted mb-0">$123</h6>
                                                <p className="text-muted mb-0 font-size-10"
                                                    style={{ marginLeft: "3px" }}>12-09-2021</p>
                                            </div>
                                        </div>
                                        <div className="float-end ms-2">
                                            <span className="badge badge-soft-secondary font-size-10"
                                                style={{ backgroundColor: "#34c38f59" }}
                                            >Approved</span>
                                        </div>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between align-items-center">
                                        <div className="avatar-group float-start">
                                            <div className="avatar-group-item">
                                                <a className="d-inline-block">
                                                    <img src="./images/avatar-1.jpg" className="rounded-circle avatar-xs" />
                                                </a>
                                            </div>
                                            <div className="avatar-group-item ng-star-inserted">
                                                <div className="avatar-group-item">
                                                    <a className="d-inline-block">
                                                        <img src="./images/avatar-1.jpg" className="rounded-circle avatar-xs" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <i className="mdi mdi-file-document-outline" style={{ marginRight: "4px" }}></i>
                                                <span className="text-muted">25</span>
                                            </div>
                                            <div className="d-flex mx-4">
                                                <i className="mdi mdi-web-clock" style={{ marginRight: "4px" }}></i>
                                                <span className="text-muted">85</span>
                                            </div>
                                            <div className="d-flex">
                                                <i className="mdi mdi-account-group" style={{ marginRight: "4px" }}></i>
                                                <span className="text-muted">53</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12" md="9" lg="9">
                                <div className="row">
                                    <div className="col-sm-12 col-md-3 col-lg-3">
                                        <div className="mb-3">
                                            <h4 className="align-self-center mb-0">
                                                Digital Marketing
                                            </h4>
                                            <span className="text-muted">$123</span>
                                            <h6> Assigned Staff: Murali </h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-9 col-lg-9">

                                        <DraggableRangeBar />
                                    </div>
                                </div>

                                <LeadManagementTabs />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

