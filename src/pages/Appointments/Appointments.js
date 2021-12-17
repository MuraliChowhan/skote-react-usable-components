import React from "preact/compat";
import {
    Table
} from "reactstrap";
function Appointments() {

    const tablecolumns = [{
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Active",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    }, {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Active",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    }]
    return (
        <>
            <div className="page-content">
                <div className="d-flex justify-content-between">
                    <h4 className="mb-0 font-size-18">User List</h4>
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item ng-star-inserted">Contacts</li>
                        <li className="breadcrumb-item active ng-star-inserted">User grid</li>
                    </ol>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="search-box chat-search-box w-100 mb-3">
                            <span className="position-relative w-100" id="basic-addon1">
                                <i className="bx bx-search-alt search-icon"></i>
                            </span>
                            <input type="text" className="form-control border border-3 border-light rounded" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <button className="btn btn-primary w-md mx-5">
                            <i className="fas fa-sliders-h"></i>
                        </button>
                    </div>
                </div>


                <Table className="table mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Meeting Type</th>
                            <th>Staff</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tablecolumns.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.taskName}</td>
                                    <td>{item.dueDate}</td>
                                    <td>
                                        <span className="badge badge-soft-danger">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-success">
                                            {item.priority}
                                        </span>
                                    </td>
                                    <td>{item.related}</td>
                                    <td>{item.related}</td>
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
        </>
    )
}

export default Appointments;