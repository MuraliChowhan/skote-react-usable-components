import React, { useState } from "react";
import './kanbanview.css';
import { ViewModal } from "./ViewModal";
import { Link } from "react-router-dom";

export const KanbanView = (props) => {
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

    const onDragCard = (e) => {
        e.dataTransfer.setData("text", e.target.id);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDropCard = (e) => {
        e.preventDefault();
        if (e.target.className == 'card p-2 h-100 mb-0') {
            let data = e.dataTransfer.getData("text")
            e.target.appendChild(document.getElementById(data));
        }
    }

    return (
        <>
            <div className="page-content">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mb-0 font-size-18">LEAD</div>
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">
                                    <a>CRM</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a>Leads</a>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="d-flex mb-3 align-items-center border-bottom pb-2">
                        <div className="row w-100">
                            <div className="col-3">
                                <div className="form-group me-3">
                                    <label className="mb-0">PipeLine</label>
                                    <select className="form-control">
                                        <option>Alaska</option>
                                        <option>Hwaii</option>
                                        <option>California</option>
                                        <option>Nevada</option>
                                        <option>Oregon</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <label className="mb-0">Sort by</label>
                                    <select className="form-control">
                                        <option>Name</option>
                                        <option>City</option>
                                        <option>Date</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="text-muted cursor" style={{ marginRight: "5px" }}>
                                <a className="text-muted cursor">Manage </a>
                            </div>
                            <Link to="/settings">
                                <i className="bx bxs-edit-alt" style={{ marginRight: "10px" }}></i>
                            </Link>
                            <div className="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" className="btn btn-secondary">
                                    <i className="bx bx-list-ul"></i>
                                </button>
                                <button type="button" className="btn btn-secondary">
                                    <i className="bx bxs-grid"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                        <div>
                            <div className="kanban-header">
                                Sprints
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="kanban-header">
                                Properties
                            </div>
                            <div className="kanban-header mx-3">
                                Filters
                            </div>
                            <div className="kanban-header mx-3">
                                Sort
                            </div>
                            <div className="input-group custom-search">
                                <input type="text" className="p-2 form-control border-0" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                                <span className="input-group-text px-4 searchbar-bg-color border-0" id="basic-addon1"><i className="fas fa-search text-white"></i></span>
                            </div>
                        </div>
                    </div> */}
                    <div className="d-flex" style={{ overflowY: "auto", overflowY: "hidden" }}>
                        {
                            kanbanData.map((item, index) =>
                                <div key={index} className="col-sm-12 col-md-3 col-lg-3 reomve-border mb-5" style={{ marginRight: "6px" }}>
                                    <div className="card mb-1 p-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <h6 className="card-title mb-0 d-flex align-self-start" style={{ fontWeight: "600" }}>{item.name}</h6>
                                                <small className="text-muted text-small d-flex align-items-center font-weight-bold">(2)
                                                    <span className="dot mx-1"> </span> $1500
                                                </small>
                                            </div>
                                            <i className="fas fa-plus"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    setViewModal({
                                                        modal: true,
                                                        modalType: "poc",
                                                        action: "New",
                                                        details: "",
                                                    })
                                                }
                                            ></i>
                                        </div>
                                    </div>
                                    <div
                                        className="card p-2 h-100 mb-0"
                                        data-status={item.name}
                                        onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDropCard(e, item.name)}
                                    >
                                        <div className="d-flex justify-content-end">
                                            {/* <i className="cursor-pointer far fa-eye"
                                            onClick={() =>
                                                setViewModal({
                                                    modal: true,
                                                    modalType: "poc",
                                                    action: "New",
                                                    details: "",
                                                })
                                            }
                                        >
                                        </i> */}
                                        </div>
                                        <div id={`card${item._id}`} className="card border p-2"
                                            draggable="true"
                                            onDragStart={(e) => onDragCard(e, item)}>

                                            <div className="d-flex justify-content-between">
                                                <div>
                                                   <Link to="/lead-management"> <h6 className="font-title">{item.name}</h6> </Link>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h6 className="text-muted mb-0">$123</h6>
                                                        <p className="text-muted mb-0 font-size-10" style={{ marginLeft: "3px" }}>12-09-2021</p>
                                                    </div>
                                                </div>
                                                <div className="float-end ms-2">
                                                    <span className="badge badge-soft-secondary font-size-10" style={{ backgroundColor: item.bgcolor }}>{item.status}</span>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">
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
                                                        <span className="text-muted" >53</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {
                                        item.name === "Pending" ?
                                            <div className="mt-2 d-flex justify-content-end cursor-pointer">
                                                <i className="fas fa-plus"></i>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                <ViewModal
                    setViewModal={(doc) => setViewModal(doc)}
                    show={viewModal.modal}
                    onHide={() =>
                        setViewModal({
                            modal: false,
                            modalType: "",
                            type: "",
                            details: {},
                        })
                    }
                    params={viewModal}
                />
            </div>
        </>
    );
};

