import React, { Component, useState } from "react"
import MetaTags from 'react-meta-tags'
import { Card, CardBody, Table } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../Bookings/bookings.scss";
// import './subscription.css';
import { DeletePop } from "components/Delete/Delete";
import { BookingsModal } from "./BookingsModal";
// import { SubscriptionModal } from "./SubscriptionModal";

function Bookings() {

    const planData = [
        {
            name: "kmc kumar",
            roomNo: "231",
            request: "3",
            status: "Active",
            requestdate: "12/02/2021",
        },
        {

            name: "kmc kumar",
            roomNo: "231",
            request: "3",
            status: "Active",
            requestdate: "12/02/2021",
        },
        {
            name: "kmc kumar",
            roomNo: "231",
            request: "3",
            status: "Active",
            requestdate: "12/02/2021",
        },
        {
            name: "kmc kumar",
            roomNo: "231",
            request: "3",
            status: "Active",
            requestdate: "12/02/2021",
        },
        {
            name: "kmc kumar",
            roomNo: "231",
            request: "3",
            status: "Active",
            requestdate: "12/02/2021",
        },
        {
            name: "kmc kumar",
            roomNo: "231",
            request: "3",
            status: "Active",
            requestdate: "12/02/2021",
        },

    ];

    const [deleteModal, setDeleteModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    const [subscriptionModal, setSubscriptionModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Bookings </title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs title="Tables" breadcrumbItem="Bookings" />
                    <Card>
                        <CardBody>
                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Room number</th>
                                            <th>Requests</th>

                                            <th>Request Date</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            planData.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    {/* <td>{item.billngType}</td> */}
                                                    <td>{item.roomNo}</td>
                                                    <td>{item.request}</td>

                                                    <td>{item.requestdate}</td>
                                                    <td>
                                                        {
                                                            item.status === "Active" ?
                                                                <div className="activeStatus" style={{ fontSize: "11px" }}>Complete</div>
                                                                :
                                                                <div className="activeStatus" style={{ fontSize: "11px" }}>Complete</div>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            item.status === "Complete" ?
                                                                <div className="activeStatus" style={{ fontSize: "11px" }}>Complete</div>
                                                                :
                                                                <div className="inactiveStatus" style={{ fontSize: "11px" }}>Pending</div>
                                                        }
                                                    </td>

                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </div>


                <BookingsModal
                    setSubscriptionModal={(doc) => setSubscriptionModal(doc)}
                    show={subscriptionModal.modal}
                    onHide={() =>
                        setSubscriptionModal({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={subscriptionModal}
                />

                <DeletePop
                    setDeleteModal={(doc) => setDeleteModal(doc)}
                    show={deleteModal.modal}
                    onHide={() =>
                        setDeleteModal({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={deleteModal}
                />
            </div>
        </React.Fragment>
    )
}

export default Bookings