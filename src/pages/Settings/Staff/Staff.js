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
import { StaffModal } from "./StaffModal";

function Staff() {

    const tablecolumns = [{
        id: "001",
        name: "giffy",
        phone: "9133838393",
        status: "Active",
        sort: true
    }, {
        id: "001",
        name: "giffy",
        phone: "9133838393",
        status: "Active",
        sort: true
    }, {
        id: "001",
        name: "giffy",
        phone: "9133838393",
        status: "Active",
        sort: true
    }
    ];

    const [deleteModal, setDeleteModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });
    const [staffModal, setStaffModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    return (
        <React.Fragment>
            <MetaTags>
                <title>Blocks | EazyRooms - React Admin & Dashboard Template</title>
            </MetaTags>

            <div className="d-flex justify-content-between mb-2 align-items-center pb-2 border-2 border-bottom">
                <h4>Manage Staff</h4>
                <button className="btn btn-outline-primary btn-sm mb-2 me-2 ng-star-inserted"
                    onClick={() =>
                        setStaffModal({ modal: true, modalType: "", type: "", details: {} })
                    }
                >+ Add new</button>
            </div>

            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody className="p-0">
                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tablecolumns.map((item, index) =>
                                                <tr key={index}>
                                                    <td>
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded-circle ng-star-inserted">
                                                                MC
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <i className="bx bx-message-square-dots" style={{ marginLeft: "10px", fontSize: "20px" }}></i>
                                                        <i className="bx bx-user-circle" style={{ marginLeft: "10px", fontSize: "20px" }}></i>
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

                <StaffModal
                    setStaffModal={(doc) => setStaffModal(doc)}
                    show={staffModal.modal}
                    onHide={() =>
                        setStaffModal({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={staffModal}
                />

                <DeletePop
                    setDeleteModal={(doc) => setDeleteModal(doc)}
                    show={deleteModal.modal}
                    onHide={() =>
                        setDeleteModal({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={deleteModal}
                />
            </Row>

        </React.Fragment>
    )
}

export default Staff
