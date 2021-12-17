import React, { useState } from "preact/compat";

function WorkingHours() {
    // const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

    // const handleInputChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const list = [...inputList];
    //     list[index][name] = value;
    //     setInputList(list);
    // };

    // const handleRemoveClick = index => {
    //     const list = [...inputList];
    //     list.splice(index, 1);
    //     setInputList(list);
    // };

    // const handleAddClick = () => {
    //     setInputList([...inputList, { firstName: "", lastName: "" }]);
    // };

    return (
        <>
            <h4 className="border-bottom pb-2 border-2">Working Hours</h4>

            <div className="card px-2 mb-0 py-3 border mb-3">
                <div className="d-flex justify-content-between align-items-center px-2">
                    <span className="d-flex"> <i className="mdi mdi-calendar me-2"></i><h5>Monday</h5></span>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="ng-star-inserted">
                    <div
                        style={{ marginLeft: "1px", marginRight: "-2px" }}
                        className="row d-flex justify-content-between align-items-center ng-untouched ng-pristine ng-valid">
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 p-2 d-flex justify-content-end">
                            <i className="bx bxs-trash text-danger font-size-20"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card px-2 mb-0 py-3 border mb-3">
                <div className="d-flex justify-content-between align-items-center px-2">
                    <span className="d-flex"> <i className="mdi mdi-calendar me-2"></i><h5>Tueday</h5></span>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="ng-star-inserted">
                    <div
                        style={{ marginLeft: "1px", marginRight: "-2px" }}
                        className="row d-flex justify-content-between align-items-center ng-untouched ng-pristine ng-valid">
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 p-2 d-flex justify-content-end">
                            <i className="bx bxs-trash text-danger font-size-20"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card px-2 mb-0 py-3 border mb-3">
                <div className="d-flex justify-content-between align-items-center px-2">
                    <span className="d-flex"> <i className="mdi mdi-calendar me-2"></i><h5>Wednesday</h5></span>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="ng-star-inserted">
                    <div
                        style={{ marginLeft: "1px", marginRight: "-2px" }}
                        className="row d-flex justify-content-between align-items-center ng-untouched ng-pristine ng-valid">
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 p-2 d-flex justify-content-end">
                            <i className="bx bxs-trash text-danger font-size-20"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card px-2 mb-0 py-3 border mb-3">
                <div className="d-flex justify-content-between align-items-center px-2">
                    <span className="d-flex"> <i className="mdi mdi-calendar me-2"></i><h5>Thursday</h5></span>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="ng-star-inserted">
                    <div
                        style={{ marginLeft: "1px", marginRight: "-2px" }}
                        className="row d-flex justify-content-between align-items-center ng-untouched ng-pristine ng-valid">
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 p-2 d-flex justify-content-end">
                            <i className="bx bxs-trash text-danger font-size-20"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card px-2 mb-0 py-3 border mb-3">
                <div className="d-flex justify-content-between align-items-center px-2">
                    <span className="d-flex"> <i className="mdi mdi-calendar me-2"></i><h5>Friday</h5></span>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="ng-star-inserted">
                    <div
                        style={{ marginLeft: "1px", marginRight: "-2px" }}
                        className="row d-flex justify-content-between align-items-center ng-untouched ng-pristine ng-valid">
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 p-2 d-flex justify-content-end">
                            <i className="bx bxs-trash text-danger font-size-20"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card px-2 mb-0 py-3 border mb-3">
                <div className="d-flex justify-content-between align-items-center px-2">
                    <span className="d-flex"> <i className="mdi mdi-calendar me-2"></i><h5>Saturday</h5></span>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="ng-star-inserted">
                    <div
                        style={{ marginLeft: "1px", marginRight: "-2px" }}
                        className="row d-flex justify-content-between align-items-center ng-untouched ng-pristine ng-valid">
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 p-2 d-flex justify-content-end">
                            <i className="bx bxs-trash text-danger font-size-20"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card px-2 mb-0 py-3 border mb-3">
                <div className="d-flex justify-content-between align-items-center px-2">
                    <span className="d-flex"> <i className="mdi mdi-calendar me-2"></i><h5>Sunday</h5></span>
                    <i className="fas fa-plus"></i>
                </div>

                <div className="ng-star-inserted">
                    <div
                        style={{ marginLeft: "1px", marginRight: "-2px" }}
                        className="row d-flex justify-content-between align-items-center ng-untouched ng-pristine ng-valid">
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 p-2">
                            <div className="form-group d-flex justify-content-between align-self-center bg-light p-2 rounded">
                                <label className="mt-2 ms-2">Start Time</label>
                                <select className="form-select form-control-sm w-25 ng-pristine ng-valid ng-touched">
                                    <option className="ng-star-inserted">00:00</option>
                                    <option className="ng-star-inserted">00:30</option>
                                    <option className="ng-star-inserted">01:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 p-2 d-flex justify-content-end">
                            <i className="bx bxs-trash text-danger font-size-20"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* {inputList.map((x, i) => {
                return (
                    <div key={} className="box">
                        <input
                            name="firstName"
                            placeholder="Enter First Name"
                            value={x.firstName}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <input
                            className="ml10"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={x.lastName}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div>
                    </div>
                );
            })} */}
        </>
    )
}

export default WorkingHours;