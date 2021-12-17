import { DeletePop } from "components/Delete/Delete";
import { iteratee } from "lodash";
import React, { Component, useState } from "react"
import MetaTags from 'react-meta-tags';
import {
    Table,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import '../../../index.css';
import { AmenitiesModal } from "./AmenitiesModal";
import "./companysettings.css";

function CompanySettings() {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
    const tablecolumns = [{
        image: "./cam.jpg",
        name: "xyz",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    }, {
        image: "./cam.jpg",
        name: "yzx",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    }, {
        image: "./cam.jpg",
        name: "zxy",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        image: "./cam.jpg",
        name: "yxz",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        image: "./cam.jpg",
        name: "yzx",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        image: "./cam.jpg",
        name: "yxz",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    {
        image: "./cam.jpg",
        name: "xyz",
        status: "Active",
        createdBy: "12/02/2021",
        createdStatus: "12/02/2021",
        sort: true
    },
    ];
    const [deleteModal, setDeleteModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });
    const [amenitiesModal, setAmenitiesModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };


    return (
        <React.Fragment>
            <MetaTags>
                <title>Blocks | EazyRooms - React Admin & Dashboard Template</title>
            </MetaTags>

            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody className="p-0">
                            <div className="table-responsive">
                                <h4 className="border-bottom pb-2 border-2"> Company Settings </h4>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-8 col-lg-8"></div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="custom-border">
                                        <div className="kv-avatar">
                                            <label style={{ cursor: "pointer" }}
                                                htmlFor="upload-photo">
                                                <span>Change Company logo</span>
                                            </label>
                                            <input
                                                type="file"
                                                name="photo"
                                                id="upload-photo" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" placeholder="Enter company name" />
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <label className="form-label mt-2"></label>
                                            <select className="form-control">
                                                <option className="d-flex">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xm2_9YDrcDrbN7aIug8qpVGnfv1GLx6jbQ&usqp=CAU" width="30" />
                                                    india
                                                </option>
                                                <option className="d-flex">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xm2_9YDrcDrbN7aIug8qpVGnfv1GLx6jbQ&usqp=CAU" width="30" />
                                                    india
                                                </option>
                                                <option className="d-flex">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Xm2_9YDrcDrbN7aIug8qpVGnfv1GLx6jbQ&usqp=CAU" width="30" />
                                                    india
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <label className="form-label">Company Mobile no:</label>
                                            <input type="text" className="form-control" placeholder="Enter your number" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label className="form-label">Company Email</label>
                                    <input type="text" className="form-control" placeholder="Enter company name" />
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label className="form-label">Company Website</label>
                                    <input type="text" className="form-control" placeholder="Enter your number" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <label className="form-label">Email Address</label>
                                    <input type="text" className="form-control" placeholder="Email address" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <label className="form-label">Description</label>
                                    <textarea type="text" rows="3" className="form-control" placeholder="Add company description" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <label className="form-label">G-Map Location</label>
                                    </div>

                                    {inputList.map((x, i) => {
                                        return (
                                            <div key={i} className="row mb-3">
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <input
                                                        className="form-control"
                                                        name="firstName"
                                                        placeholder="Ex: Schools"
                                                        value={x.firstName}
                                                        // onChange={handleFormData("hospital")}
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <input
                                                        className="form-control ml10"
                                                        name="lastName"
                                                        placeholder="School Name"
                                                        value={x.lastName}
                                                        // onChange={handleFormData("hospital")}
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                    <div className="d-flex justify-content-end mt-2">
                                                        {
                                                            inputList.length !== 1 &&
                                                            <button
                                                                className="border-0 bg-transparent"
                                                                onClick={() => handleRemoveClick(i)}><i className="fas fa-times" style={{ color: "red", fontSize: "12px" }}></i></button>}
                                                        {inputList.length - 1 === i &&
                                                            <button className="btn btn-primary btn-sm" onClick={handleAddClick}>
                                                                <i className="fas fa-plus" style={{ color: "#fff", fontSize: "12px" }}></i>
                                                            </button>}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                </div>
                            </div>

                            <div className="mt-4 text-end align-items-middle border-top border-2 pt-3"></div>

                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary btn-sm">
                                    <i className="mdi mdi-content-save font-size-16 align-middle me-1"></i>
                                    Update
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <AmenitiesModal
                setAmenitiesModal={(doc) => setAmenitiesModal(doc)}
                show={amenitiesModal.modal}
                onHide={() =>
                    setAmenitiesModal({ modal: false, modalType: "", type: "", details: {} })
                }
                params={amenitiesModal}
            />

            <DeletePop
                setDeleteModal={(doc) => setDeleteModal(doc)}
                show={deleteModal.modal}
                onHide={() =>
                    setDeleteModal({ modal: false, modalType: "", type: "", details: {} })
                }
                params={deleteModal}
            />
        </React.Fragment>
    )
}

export default CompanySettings
