import React, { Component, useState } from 'react';
import { Modal } from "react-bootstrap";

export const StaffModal = (props) => {
    const [manualPassword, setManualPassword] = useState(false);
    const CreatePasswordmanually = () => {
        setManualPassword(true);
    }
    return (
        <>
            <Modal size="lg" {...props} className="cl" keyboard={false}>
                <Modal.Header
                    className="border-0 px-4 bg-transparent close-modal h5"
                    closeButton>

                </Modal.Header>
                <Modal.Body className="pt-0" style={{ padding: "30px" }}>
                    {
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group mb-3">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        value=""
                                        className="form-control p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group mb-3">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        value=""
                                        className="form-control p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group mb-3">
                                    <label>E-mail</label>
                                    <input
                                        type="number"
                                        value=""
                                        className="form-control p-2"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group mb-3">
                                    <label>Phone</label>
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Staff</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group mb-3">
                                    <label>Role Assigned</label>
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Staff</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group mb-3">
                                    <label>Status</label>
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Staff</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Auto-generate password
                                        </label>
                                    </div>
                                    <div className="form-check"
                                        onClick={() => CreatePasswordmanually()}
                                    >
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Create password manually
                                        </label>
                                    </div>
                                    {
                                        manualPassword ?
                                            <input type="text" className="form-control mt-3" placeholder="Enter Password" />
                                            :
                                            null
                                    }
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary form-control p-2 w-25">
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
