import { DeletePop } from "components/Delete/Delete";
import React, { Component, useState } from "react"
import MetaTags from 'react-meta-tags';
import {
    Table,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import '../../../index.css';
import { ReservationModal } from "./ReservationModal";

function Reservation() {

    const tablecolumns = [{
        id: "B111",
        name: "yxz",
        roomType: "Hall",
        checkin: "12/20/2020, 11:00 AM",
        checkout: "13/20/2020, 11:00 AM",
        room: "201",
        status: "Booked",
        sort: true
    }, {
        id: "B111",
        name: "yxz",
        roomType: "Hall",
        checkin: "12/20/2020, 11:00 AM",
        checkout: "13/20/2020, 11:00 AM",
        room: "201",
        status: "Booked",
        sort: true
    }, {
        id: "B111",
        name: "yxz",
        roomType: "Hall",
        checkin: "12/20/2020, 11:00 AM",
        checkout: "13/20/2020, 11:00 AM",
        room: "201",
        status: "Booked",
        sort: true
    },
    {
        id: "B111",
        name: "yxz",
        roomType: "Hall",
        checkin: "12/20/2020, 11:00 AM",
        checkout: "13/20/2020, 11:00 AM",
        room: "201",
        status: "Booked",
        sort: true
    },
    {
        id: "B111",
        name: "yxz",
        roomType: "Hall",
        checkin: "12/20/2020, 11:00 AM",
        checkout: "13/20/2020, 11:00 AM",
        room: "201",
        status: "Booked",
        sort: true
    },
    {
        id: "B111",
        name: "yxz",
        roomType: "Hall",
        checkin: "12/20/2020, 11:00 AM",
        checkout: "13/20/2020, 11:00 AM",
        room: "201",
        status: "Booked",
        sort: true
    },
    {
        id: "B111",
        name: "yxz",
        roomType: "Hall",
        checkin: "12/20/2020, 11:00 AM",
        checkout: "13/20/2020, 11:00 AM",
        room: "201",
        status: "Booked",
        sort: true
    },
    ];
    const [deleteModal, setDeleteModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });
    const [reservationModal, setReservationModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });
    return (
        <React.Fragment>
            <MetaTags>
                <title>Reservations | EazyRooms - React Admin & Dashboard Template</title>
            </MetaTags>

            <Row className="page-content">
                <Col md={12}>
                    <Card>
                        <CardBody className="p-0">
                            {/* <div className="d-flex justify-content-end">
                                <button className="btn btn-primary"
                                    onClick={() =>
                                        setAmenitiesModal({
                                            modal: true,
                                            modalType: "add",
                                            action: "ADD",
                                            details: "",
                                        })
                                    }
                                    style={{ background: "#556ee6" }}>
                                    <i className="bx bx-plus" />
                                </button>
                            </div> */}
                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Reservation ID</th>
                                            <th>Customer Name</th>
                                            <th>Check In</th>
                                            <th>Check Out</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tablecolumns.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.checkin}</td>
                                                    <td>{item.checkout}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <i className="fas fa-pencil-alt edit-icons"
                                                                onClick={() =>
                                                                    setReservationModal({
                                                                        modal: true,
                                                                        modalType: "delete",
                                                                        action: "delete",
                                                                        details: "",
                                                                    })
                                                                }
                                                            ></i>
                                                            <i className="fas fa-trash delete-icons"
                                                                onClick={() =>
                                                                    setDeleteModal({
                                                                        modal: true,
                                                                        modalType: "delete",
                                                                        action: "delete",
                                                                        details: "",
                                                                    })
                                                                }
                                                                style={{ marginLeft: "4px" }}></i>
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
                </Col>
            </Row>

            <ReservationModal
                setReservationModal={(doc) => setReservationModal(doc)}
                show={reservationModal.modal}
                onHide={() =>
                    setReservationModal({ modal: false, modalType: "", type: "", details: {} })
                }
                params={reservationModal}
            />

            <DeletePop
                setDeleteModal={(doc) => setDeleteModal(doc)}
                show={deleteModal.modal}
                onHide={() =>
                    setDeleteModal({ modal: false, modalType: "", type: "", details: {} })
                }
                params={deleteModal}
            />
        </React.Fragment>
    )
}

export default Reservation
