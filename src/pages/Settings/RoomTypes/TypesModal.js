import React, { Component } from 'react';
import { Modal } from "react-bootstrap";

export const BlocksModal = (props) => {
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
                                <label>Block Name</label>
                                <input
                                    type="text"
                                    value=""
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
