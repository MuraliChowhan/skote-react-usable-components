import React, { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import {
    Table
} from "reactstrap";

function TopbarTasks() {
    const [hideShow, setHideShow] = useState(true);
    const hideShowFilter = () => {
        setHideShow(!hideShow);
    }

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
    }, {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Active",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    },
    {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Active",
        dueDate: "12/02/2021",
        related: "Amazon",
        sort: true,
        priority: "High"
    },
    {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Active",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "Low"
    },
    {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Active",
        dueDate: "12/02/2021",
        related: "Zoho",
        sort: true,
        priority: "High"
    },
    {
        id: "100",
        taskName: "2",
        blockName: "1",
        status: "Active",
        dueDate: "12/02/2021",
        related: "clickdesk",
        sort: true,
        priority: "High"
    }]

    const dropdownOptions = {
        options: [{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }]
    };

    return (
        <>
            <div className="page-content">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">TASKS</h4>
                        </div>
                        <div className="containerf-fluid">
                            <div className="card">
                                <div className="card-body mt-2">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-9 col-lg-9">
                                            <div className="search-box chat-search-box w-100 mb-3">
                                                <span className="position-relative w-100" id="basic-addon1">
                                                    <i className="bx bx-search-alt search-icon"></i>
                                                </span>
                                                <input type="text" className="form-control border border-3 border-light rounded" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3">
                                            <button className="btn btn-primary w-md mx-5"
                                                onClick={hideShowFilter}
                                            >
                                                <i className="fas fa-sliders-h"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        hideShow ? <div className="row mb-3">
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <Multiselect
                                                    options={dropdownOptions.options}
                                                    selectedValues={dropdownOptions.selectedValue}
                                                    displayValue="name"
                                                />
                                            </div>
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <Multiselect
                                                    options={dropdownOptions.options}
                                                    selectedValues={dropdownOptions.selectedValue}
                                                    displayValue="name"
                                                />
                                            </div>
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <Multiselect
                                                    options={dropdownOptions.options}
                                                    selectedValues={dropdownOptions.selectedValue}
                                                    displayValue="name"
                                                />
                                            </div>
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <Multiselect
                                                    options={dropdownOptions.options}
                                                    selectedValues={dropdownOptions.selectedValue}
                                                    displayValue="name"
                                                />
                                            </div>
                                        </div>
                                            :
                                            null
                                    }


                                    <div className="table-responsive">
                                        <Table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Task Name</th>
                                                    <th>Due Date</th>
                                                    <th>Status</th>
                                                    <th>Priority</th>
                                                    <th>Related To</th>
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
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopbarTasks;