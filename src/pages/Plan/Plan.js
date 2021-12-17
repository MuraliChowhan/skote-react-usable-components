import React, { Component, useState } from "react"
import MetaTags from 'react-meta-tags'
import { Card, CardBody, Table } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../Bookings/bookings.scss";
import './Plan.css';
// Table data
import { DeletePop } from "components/Delete/Delete";
import { PlanModal } from "./PlanModal";
// import SelectCheckbox from "Checknbox/Index";
function Plan() {

    const planData = [
        {
            header: "Title",
            title: "Large",
            price: "30",
            billngType: "One time",
            feature: [
                {
                    storage: "Storage",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Projects",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Tasks",
                    unlimited: "Unlimited"
                }
            ],
            module: [
                {
                    moduleName: "Project",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Tasks",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Gantt",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "TimeSheet",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Team members",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Clients",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Invoices",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "Payments",
                    checkIcon: "far fa-times-circle"
                }
            ],
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Price (USD)-USD",
            title: "Large",
            price: "30",
            billngType: "One time",
            feature: [
                {
                    storage: "Storage",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Projects",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Tasks",
                    unlimited: "Unlimited"
                }
            ],
            module: [
                {
                    moduleName: "Project",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Tasks",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Gantt",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "TimeSheet",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Team members",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Clients",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Invoices",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "Payments",
                    checkIcon: "far fa-times-circle"
                }
            ],
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Billing Type",
            title: "Large",
            price: "30",
            billngType: "One time",
            feature: [
                {
                    storage: "Storage",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Projects",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Tasks",
                    unlimited: "Unlimited"
                }
            ],
            module: [
                {
                    moduleName: "Project",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Tasks",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Gantt",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "TimeSheet",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Team members",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Clients",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Invoices",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "Payments",
                    checkIcon: "far fa-times-circle"
                }
            ],
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Feature",
            title: "Large",
            price: "30",
            billngType: "One time",
            feature: [
                {
                    storage: "Storage",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Projects",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Tasks",
                    unlimited: "Unlimited"
                }
            ],
            module: [
                {
                    moduleName: "Project",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Tasks",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Gantt",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "TimeSheet",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Team members",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Clients",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Invoices",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "Payments",
                    checkIcon: "far fa-times-circle"
                }
            ],
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Modules",
            title: "Large",
            price: "30",
            billngType: "One time",
            feature: [
                {
                    storage: "Storage",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Projects",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Tasks",
                    unlimited: "Unlimited"
                }
            ],
            module: [
                {
                    moduleName: "Project",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Tasks",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Gantt",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "TimeSheet",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Team members",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Clients",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Invoices",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "Payments",
                    checkIcon: "far fa-times-circle"
                }
            ],
            edit: "far fa-edit",
            delete: "fas fa-trash",
            serviceTypes: ["Alexa", "whatsapp", "VIP Support"],
        },
        {
            header: "Action",
            title: "Large",
            price: "30",
            billngType: "One time",
            feature: [
                {
                    storage: "Storage",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Projects",
                    unlimited: "Unlimited"
                },
                {
                    storage: "Tasks",
                    unlimited: "Unlimited"
                }
            ],
            module: [
                {
                    moduleName: "Project",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Tasks",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Gantt",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "TimeSheet",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Team members",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Clients",
                    checkIcon: "fas fa-check-circle"
                },
                {
                    moduleName: "Invoices",
                    checkIcon: "far fa-times-circle",
                },
                {
                    moduleName: "Payments",
                    checkIcon: "far fa-times-circle"
                }
            ],
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
    const [planModal, setPlanModal] = useState({
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
                    <title>Plan </title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs title="Tables" breadcrumbItem="Plan" />
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-end">
                                <div className="addPlan"
                                    onClick={() =>
                                        setPlanModal({
                                            modal: true,
                                            modalType: "New",
                                            action: "New",
                                            details: "",
                                        })
                                    }
                                > <i className="fas fa-plus"></i> Add Plan</div>
                            </div>
                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Price (USD)-USD</th>
                                            <th>Billing Type</th>
                                            <th>Feature</th>
                                            <th>Modules</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            planData.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.title}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.billngType}</td>
                                                    <td style={{ paddingBottom: "100px" }}>{item?.feature?.map((doc, index) =>
                                                        <div key={index}>
                                                            <div className="storage-text">{doc.storage}</div>
                                                            <div className="limited-text">{doc.unlimited}</div>
                                                        </div>
                                                    )}</td>
                                                    <td>{item?.module?.map((doc, index) =>
                                                        <div key={index}>
                                                            <div className="my-1">
                                                                {
                                                                    doc.checkIcon === "far fa-times-circle" ?
                                                                        <><i className={doc.checkIcon} style={{ color: "red", fontSize: "20px", marginRight: "4px" }}></i>  {doc.moduleName}</>
                                                                        :
                                                                        <><i className={doc.checkIcon} style={{ color: "#63ed7a", fontSize: "20px", marginRight: "4px" }}></i>
                                                                            {doc.moduleName}</>
                                                                }

                                                            </div>
                                                        </div>
                                                    )}</td>

                                                    <td>
                                                        <div className="d-flex">
                                                            <i className="fas fa-pencil-alt edit-icons"
                                                                onClick={() =>
                                                                    setPlanModal({
                                                                        modal: true,
                                                                        modalType: "edit",
                                                                        action: "edit",
                                                                        details: "",
                                                                    })
                                                                }
                                                            ></i>
                                                            <i className="fas fa-trash delete-icons" style={{ marginLeft: "4px" }}
                                                                onClick={() =>
                                                                    setDeleteModal({
                                                                        modal: true,
                                                                        modalType: "delete",
                                                                        action: "delete",
                                                                        details: "",
                                                                    })
                                                                }
                                                            ></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* <SelectCheckbox /> */}
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

                <PlanModal
                    setPlanModal={(doc) => setPlanModal(doc)}
                    show={planModal.modal}
                    onHide={() =>
                        setPlanModal({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={planModal}
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

export default Plan