import { iteratee } from "lodash";
import React from "preact/compat";
import './fields.css';
import { useState } from "react";
import { FieldsModal } from "./FieldsModal";
import { DeletePop } from "components/Delete/Delete";
function Fields() {
    const [fieldsModal, setFieldsModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    const [deleteModal, setDeleteModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    const fieldsData = [
        {
            name: "Name",
            phone: "Phone",
            email: "Email",
            service: "Service",
            cardName: "Appointment",
            cardInfo: "Appointment Information"
        },
        {
            name: "Name",
            phone: "Phone",
            email: "Email",
            service: "Service",
            cardName: "Appointment",
            cardInfo: "Appointment Information"
        },
        {
            name: "Name",
            phone: "Phone",
            email: "Email",
            service: "Service",
            cardName: "Appointment",
            cardInfo: "Appointment Information"
        },
        {
            name: "Name",
            phone: "Phone",
            email: "Email",
            service: "Service",
            cardName: "Appointment",
            cardInfo: "Appointment Information"
        }
    ]

    return (
        <>
            <h4>Fields</h4>

            <div className="d-flex flow-y side-scroll">
                {
                    fieldsData.map((item, index) =>
                        <div key={index} className="card-col col-scroll card me-3 border border-light" style={{ width: "600px" }}>
                            <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom bg-light">
                                <h5 className="text-muted">
                                    {item.cardName}
                                </h5>
                                <div>
                                    <i className="mdi mdi-plus font-size-15 cursor me-2"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            setFieldsModal({
                                                modal: true,
                                                modalType: "Add",
                                                action: "Add",
                                                details: "",
                                            })
                                        }
                                    ></i>
                                    <i className="mdi mdi-dots-vertical font-size-15 cursor"></i>
                                </div>
                            </div>

                            <div className="px-3">
                                <h6 className="mt-3">{item.cardInfo}</h6>
                                <div className="card px-2 my-3 w-100 border py-2 hover input-border">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0 font-size-15 fw-500">{item.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="card px-2 my-3 w-100 border py-2 hover ng-star-inserted">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0 font-size-15 fw-500">Phone</p>
                                        <div className="icons">
                                            <i style={{ cursor: "pointer" }} className="bx bxs-pencil font-size-15 me-2 text-muted hover-active cursor ng-star-inserted"
                                                onClick={() =>
                                                    setFieldsModal({
                                                        modal: true,
                                                        modalType: "Add",
                                                        action: "Add",
                                                        details: "",
                                                    })
                                                }
                                            ></i>
                                            <i style={{ cursor: "pointer" }} className="bx bxs-trash text-danger font-size-15 text-muted hover-active cursor ng-star-inserted"
                                                onClick={() =>
                                                    setDeleteModal({ modal: true, modalType: "", type: "", details: {} })
                                                }
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                <FieldsModal
                    setFieldsModal={(doc) => setFieldsModal(doc)}
                    show={fieldsModal.modal}
                    onHide={() =>
                        setFieldsModal({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={fieldsModal}
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
        </>
    )
}

export default Fields;