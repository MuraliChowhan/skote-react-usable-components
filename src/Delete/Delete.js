import React, { Component } from "react"
import { Modal } from "reactstrap";

class Delete extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Modal
                    show={this.state.isOpen} onHide={this.closeModal}
                    // {...props} 
                    className="custom-delete-modal" keyboard={false}>
                    <Modal.Header
                        className="border-0 bg-transparent close-modal h5"
                        closeButton
                    >
                        Delete
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex justify-content-center text-center">
                            {/* <div className="delete-icon-bg text-center mb-3">
              <i className="fas fa-trash text-white w-100"></i>
            </div> */}
                            <i className="fas fa-exclamation deleteIcon"></i>
                            {/* <i className="fas fa-exclamation-circle" style={{ fontSize: "80px", color: "#ce2837" }}></i> */}
                        </div>
                        <div className="text-center delete-text mb-3">
                            Are you sure.?
                        </div>

                        <div className="delete-text-desc">
                            You want to delete this Plan? All users under this plan will be added to the Default Plan.
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn danger-button">
                                Delete
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Delete;