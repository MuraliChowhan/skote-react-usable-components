import React, { Component, useState } from "react"
import MetaTags from 'react-meta-tags'
import { Card, CardBody, Table } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../Bookings/bookings.scss";
import './subscription.css';
import { DeletePop } from "components/Delete/Delete";
import { SubscriptionModal } from "./SubscriptionModal";

function Subcriptions() {

    const planData = [
        {
            title: "101",
            price: "chary",
            billngType: "One time",
            hotelName: "Kritunga",
            contact: "9382481493",
            noRooms: "15",
            plan: "Monthly",
            expirydate: "12/12/2021",
            requests: "20",
            address: "Hyderabad, Madhapur",
            planStartDate: "27/11/2021",
            status: "Active",
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Price (USD)-USD",
            title: "102",
            price: "Bheeshma",
            billngType: "One time",
            hotelName: "Kritunga",
            contact: "9382481493",
            noRooms: "15",
            plan: "Monthly",
            expirydate: "12/12/2021",
            requests: "20",
            address: "Hyderabad, Madhapur",
            planStartDate: "27/11/2021",
            status: "Inactive",
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Billing Type",
            title: "102",
            price: "Gourav",
            billngType: "One time",
            hotelName: "Kritunga",
            contact: "9382481493",
            noRooms: "15",
            plan: "Monthly",
            expirydate: "12/12/2021",
            requests: "20",
            address: "Hyderabad, Madhapur",
            planStartDate: "27/11/2021",
            status: "Active",
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Feature",
            title: "102",
            price: "Riya",
            billngType: "One time",
            hotelName: "Kritunga",
            contact: "9382481493",
            noRooms: "15",
            plan: "Monthly",
            expirydate: "12/12/2021",
            requests: "20",
            address: "Hyderabad, Madhapur",
            planStartDate: "27/11/2021",
            status: "Active",
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Modules",
            title: "102",
            price: "Gautham",
            billngType: "One time",
            hotelName: "Kritunga",
            contact: "9382481493",
            noRooms: "15",
            plan: "Monthly",
            expirydate: "12/12/2021",
            requests: "20",
            address: "Hyderabad, Madhapur",
            planStartDate: "27/11/2021",
            status: "Active",
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Action",
            title: "102",
            price: "Revanth",
            billngType: "One time",
            hotelName: "Kritunga",
            contact: "9382481493",
            noRooms: "15",
            plan: "Monthly",
            expirydate: "12/12/2021",
            requests: "20",
            address: "Hyderabad, Madhapur",
            planStartDate: "27/11/2021",
            status: "Active",
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"]
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
                    <title>Subscription </title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs title="Tables" breadcrumbItem="Subscription" />
                    <Card>
                        <CardBody>
                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name of Poc</th>
                                            <th>Contact</th>
                                            <th>Hotel Name</th>
                                            <th>No Of Rooms</th>
                                            <th>Plan</th>
                                            <th>Expiry Date</th>
                                            <th>No Of Requests</th>
                                            <th>Address</th>
                                            <th>Plan Start Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            planData.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.title}</td>
                                                    <td>{item.price}</td>
                                                    {/* <td>{item.billngType}</td> */}
                                                    <td>{item.contact}</td>
                                                    <td>{item.hotelName}</td>
                                                    <td>{item.noRooms}</td>
                                                    <td>{item.plan}</td>
                                                    <td>{item.expirydate}</td>
                                                    <td>{item.requests}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.planStartDate}</td>
                                                    <td>
                                                        {
                                                            item.status === "Active" ?
                                                                <div className="activeStatus">Active</div>
                                                                :
                                                                <div className="inactiveStatus">Inactive</div>
                                                        }
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <i className="fas fa-pencil-alt edit-icons"
                                                                onClick={() =>
                                                                    setSubscriptionModal({
                                                                        modal: true,
                                                                        modalType: "New",
                                                                        action: "New",
                                                                        details: "",
                                                                    })
                                                                }

                                                            ></i>
                                                            <i className="fas fa-trash delete-icons" style={{ marginLeft: "4px" }}
                                                                onClick={() =>
                                                                    setDeleteModal({
                                                                        modal: true,
                                                                        modalType: "New",
                                                                        action: "New",
                                                                        details: "",
                                                                    })
                                                                }
                                                            ></i>
                                                        </div>
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


                <SubscriptionModal
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

export default Subcriptions