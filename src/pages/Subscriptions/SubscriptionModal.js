import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import MultiSelectDropdown from 'components/Multiselect/Multiselect';
export const SubscriptionModal = (props) => {
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
                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Hotel Name</label>
                                        <input
                                            type="text"
                                            value=""
                                            className="form-control p-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>No of Rooms</label>
                                        <input
                                            type="text"
                                            value=""
                                            className="form-control p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label>Plan</label>
                                <input
                                    type="text"
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Expiry Date</label>
                                <input
                                    type="date"
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>No.of Requests</label>
                                <input
                                    type="text"
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Plan Start Date</label>
                                <input
                                    type="text"
                                    className="form-control p-2"
                                />
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
