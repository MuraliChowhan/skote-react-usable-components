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
import { DeletePop } from "components/Delete/Delete";
// import { FloorModal } from "./FloorName";
import { FloorsModal } from "./FloorModal";

function Floors() {
    const tablecolumns = [{
        roomName: "100",
        floorName: "2",
        blockName: "1",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    }, {
        roomName: "100",
        floorName: "2",
        blockName: "1",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    }, {
        roomName: "100",
        floorName: "2",
        blockName: "1",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        roomName: "100",
        floorName: "2",
        blockName: "1",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        roomName: "100",
        floorName: "2",
        blockName: "1",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        roomName: "100",
        floorName: "2",
        blockName: "1",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        roomName: "100",
        floorName: "2",
        blockName: "1",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
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

    const [floorModal, setFloorModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    return (
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody className="p-0">
                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Floor Name</th>
                                            <th>Block Name</th>
                                            <th>Status</th>
                                            <th>Created By</th>
                                            <th>Created Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tablecolumns.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.roomName}</td>
                                                    <td>{item.floorName}</td>
                                                    <td>{item.blockName}</td>
                                                    <td>{item.status}</td>
                                                    <td>{item.createdBy}</td>
                                                    <td>{item.createdStatus}</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <i className="fas fa-pencil-alt edit-icons"
                                                                onClick={() =>
                                                                    setFloorModal({
                                                                        modal: true,
                                                                        modalType: "edit",
                                                                        action: "edit",
                                                                        details: "",
                                                                    })
                                                                }
                                                            ></i>
                                                            <i className="fas fa-trash delete-icons"
                                                                onClick={() =>
                                                                    setDeleteModal({
                                                                        modal: true,
                                                                        modalType: "edit",
                                                                        action: "edit",
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

                <FloorsModal
                    setPlanModal={(doc) => setFloorModal(doc)}
                    show={floorModal.modal}
                    onHide={() =>
                        setFloorModal({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={floorModal}
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


export default Floors
