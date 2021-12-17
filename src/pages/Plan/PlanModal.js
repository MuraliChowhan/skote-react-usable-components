import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import MultiSelectDropdown from 'components/Multiselect/Multiselect';
import MultipleSelectCheckbox from './MultipleSelectCheckbox';
export const PlanModal = (props) => {
    return (
        <>
            <Modal {...props} className="custom-delete-modal" keyboard={false}>
                <Modal.Header
                    className="border-0 px-4 bg-transparent close-modal h5"
                    closeButton>
                    Edit
                </Modal.Header>
                <Modal.Body className="pt-0" style={{ padding: "30px" }}>
                    {
                        <div>
                            <div className="form-group mb-3">
                                <label>Title</label>
                                <input
                                    type="text"
                                    value=""
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-6 col0lg-6">
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            value=""
                                            className="form-control p-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col0lg-6">
                                    <div className="form-group">
                                        <label>Billing Type</label>
                                        <MultiSelectDropdown />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Storage (GB)</label>
                                        <input
                                            type="text"
                                            value=""
                                            className="form-control p-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Projects</label>
                                        <input
                                            type="text"
                                            value=""
                                            className="form-control p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label>Tasks Name</label>
                                <input
                                    type="text"
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Team member</label>
                                <input
                                    type="text"
                                    className="form-control p-2"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <MultipleSelectCheckbox />
                            </div>

                            <div className="d-flex justify-content-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary form-control p-2"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};
