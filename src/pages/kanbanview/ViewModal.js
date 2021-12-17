import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";

export const ViewModal = (props) => {
    return (
        <>
            <Modal {...props} className="custom-modal-changes" keyboard={false}>
                <Modal.Header
                    className="border-0 bg-transparent close-modal h5"
                    closeButton >
                    <span data-toggle="tooltip" data-placement="top" title="View details">Add Lead</span>
                </Modal.Header>
                <Modal.Body className="">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <label className="mb-0">Select PipeLine</label>
                            <select className="form-control">
                                <option>Alaska</option>
                                <option>Hwaii</option>
                                <option>California</option>
                                <option>Nevada</option>
                                <option>Oregon</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <label className="mb-0">Select Stage</label>
                            <select className="form-control">
                                <option>Alaska</option>
                                <option>Hwaii</option>
                                <option>California</option>
                                <option>Nevada</option>
                                <option>Oregon</option>
                            </select>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <label className="mb-0">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <label className="mb-0">Phone</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <label className="mb-0">Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <label className="mb-0">Price Estimation</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                            <label className="mb-0">Service</label>
                            <select className="form-control">
                                <option>Alaska</option>
                                <option>Hwaii</option>
                                <option>California</option>
                                <option>Nevada</option>
                                <option>Oregon</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-light" style={{ marginRight: "5px" }}>Cancel</button>
                        <button className="btn btn-success">Save</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
