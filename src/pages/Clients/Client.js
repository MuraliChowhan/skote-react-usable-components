import React, { useState } from "preact/compat";
import {
    Table
} from "reactstrap";
import ClientModal from "./ClientsModal";

function ClientsTable() {
    // const [clientModal, setClientModal] = useState({
    //     modal: false,
    //     type: "",
    //     action: "",
    //     modalType: "",
    //     details: {},
    // });
    const tablecolumns = [{
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Pending",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    }, {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Waiting",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    },
    {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Complete",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    },
    {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Approved",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    }
    ]
    return (
        <>
            <div className="page-content">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Clients</h4>
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item ng-star-inserted">Contacts</li>
                        <li className="breadcrumb-item active ng-star-inserted">User grid</li>
                    </ol>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="search-box me-2 mb-2 d-inline-block">
                            <span className="position-relative" id="basic-addon1">
                                <i className="bx bx-search-alt search-icon"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <button className="btn btn-primary mb-2 mr-2"
                        // onClick={() =>
                        //     setClientModal({
                        //         modal: true,
                        //         modalType: "edit",
                        //         action: "Block",
                        //         details: "",
                        //     })
                        // }
                        >
                            + Add New Clients
                        </button>
                    </div>
                </div>

                <Table className="table mb-0 border">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Client Project</th>
                            <th>Assinged Staff</th>
                            <th>Budget</th>
                            <th>Status</th>
                            <th>Due date</th>
                            <th>Detalis</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tablecolumns.map((item, index) =>
                                <tr key={index}>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                            </label>
                                        </div>
                                    </td>
                                    <td>{item.taskName}</td>
                                    <td>
                                        <div className="avatar-group float-start">
                                            <div className="avatar-group-item">
                                                <a className="d-inline-block">
                                                    <img src="./images/avatar-1.jpg" className="rounded-circle avatar-xs" />
                                                </a>
                                            </div>
                                            <div className="avatar-group-item ng-star-inserted">
                                                <a className="d-inline-block">
                                                    <img className="rounded-circle avatar-xs" src="./images/avatar-1.jpg" />
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            item.status === "Complete" ?
                                                <span className="badge font-size-10 badge-soft-success">
                                                    {item.status}
                                                </span> :
                                                null
                                        }
                                        {
                                            item.status === "Waiting" ?
                                                <span className="badge badge-soft-secondary font-size-10">
                                                    {item.status}
                                                </span> :
                                                null
                                        }
                                        {
                                            item.status === "Pending" ?
                                                <span className="badge font-size-10 badge-soft-warning">
                                                    {item.status}
                                                </span> :
                                                null
                                        }
                                        {
                                            item.status === "Approved" ?
                                                <span className="badge font-size-10 badge-soft-primary">
                                                    {item.status}
                                                </span> :
                                                null
                                        }
                                    </td>
                                    <td>{item.related}</td>
                                    <td>
                                        12/03/2021
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <i className="mdi mdi-file-document-outline"></i>
                                                <span className="text-muted">25</span>
                                            </div>
                                            <div className="d-flex">
                                                <i className="mdi mdi-web-clock"></i>
                                                <span className="text-muted">10</span>
                                            </div>
                                            <div className="d-flex">
                                                <i className="mdi mdi-account-group"></i>
                                                <span className="text-muted">5</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <i className="fas fa-edit"></i>
                                            <i className="fas fa-trash-alt" style={{ marginLeft: "5px" }}></i>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>

            {/* 
            <ClientModal
                setClientModal={(doc) => setClientModal(doc)}
                show={clientModal.modal}
                onHide={() =>
                    setClientModal({ modal: false, modalType: "", type: "", details: {} })
                }
                params={clientModal}
            /> */}
        </>
    )
}

export default ClientsTable;