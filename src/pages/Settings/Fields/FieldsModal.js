
import React, { Component } from 'react';
import { Modal } from "react-bootstrap";

export const FieldsModal = (props) => {

    return (
        <>
            <Modal {...props} className="custom-delete-modal" keyboard={false}>
                <Modal.Header
                    className="border-0 px-4 bg-transparent close-modal h5"
                    closeButton>
                    Add cutsom fields
                </Modal.Header>
                <Modal.Body className="pt-0" style={{ padding: "30px" }}>
                    {
                        <div>
                            <div className="form-group mb-3">
                                <label>Field Name</label>
                                <input
                                    type="text"
                                    value=""
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Field Type</label>
                                <input
                                    type="text"
                                    value=""
                                    className="form-control p-2"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Place holder</label>
                                <input
                                    type="text"
                                    value=""
                                    className="form-control p-2"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Field values</label>
                                <input
                                    type="text"
                                    value=""
                                    className="form-control p-2"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Feature</label>
                                <input
                                    type="text"
                                    value=""
                                    className="form-control p-2"
                                />
                            </div>

                            <div className="d-flex justify-content-end">
                                <button
                                    type="submit"
                                    className="btn btn-light"
                                >
                                    Cancel
                                </button>
                                <button
                                    style={{ marginLeft: "10px" }}
                                    type="submit"
                                    className="btn btn-success"
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

