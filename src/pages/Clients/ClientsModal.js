import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
function ClientModal() {
    <>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
            <Modal.Header closeButton className="modal-title mt-0 h5">Add New Department</Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter tasks title" />
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <label>Description</label>
                        <input rows="3" type="text" className="form-control" placeholder="write here..." />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-light" onClick={() => this.handleModal()}>Close</Button>
                <Button className="btn btn-success" onClick={() => this.handleModal()}>Save</Button>
            </Modal.Footer>
        </Modal>
    </>

}

export default ClientModal;