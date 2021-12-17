import React, { Component, useState, useEffect } from 'react';
import { Modal } from "react-bootstrap";

export const RolesAndPermissionModal = (props) => {
    const tableData = [
        {
            maoduleName: "User",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Role",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Lead",
            module: [
                {
                    permission: "Manage",
                    permissionType: "View"
                },
                {
                    permission: "Create",
                    permissionType: "Move"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Deal",
            module: [
                {
                    permission: "Manage",
                    permissionType: "View"
                },
                {
                    permission: "Create",
                    permissionType: "Move"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Estimation",
            module: [
                {
                    permission: "Manage",
                    permissionType: "View"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Task",
            module: [
                {
                    permission: "Manage",
                    permissionType: "View"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Invoice",
            module: [
                {
                    permission: "Manage",
                    permissionType: "View"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Product",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Expence",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Tax",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Client",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Pipeline",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Stage",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Lead Stage",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Lable",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Source",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Payment",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Expence Category",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Custom Field",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Contract Type",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Contract",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Deal Email",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Deal Call",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Lead Email",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Lead Call",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "MDF",
            module: [
                {
                    permission: "Manage",
                    permissionType: "View"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "MDS Status",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "MDS Type",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "MDS Sub Type",
            module: [
                {
                    permission: "Manage"
                },
                {
                    permission: "Create"
                },
                {
                    permission: "Edit"
                },
                {
                    permission: "Delete"
                }
            ]
        },
        {
            maoduleName: "Other",
            module: [
                {
                    moduleName: "Other",
                    permission: "Manage Invoice Payment",

                }, ,
                {
                    moduleName: "Other",
                    permission: "Create Invoice Payment",
                },
                {
                    moduleName: "Other",
                    permission: "Invoice Add product",

                },
                {
                    moduleName: "Other",
                    permission: "Invoice Edit product",

                },
                {
                    moduleName: "Other",
                    permission: "Invoice Delete product",

                },
                {
                    moduleName: "Other",
                    permission: "Estimation Add product",

                },
                {
                    moduleName: "Other",
                    permission: "Estimation Add product",

                },
                {
                    moduleName: "Other",
                    permission: "Estimation Delete product",

                },
                {
                    moduleName: "Other",
                    permission: "MDF Edit Expense",

                },
                {
                    moduleName: "Other",
                    permission: "MDF Edit Expense",

                },
                {
                    moduleName: "Other",
                    permission: "MDF Delete Expense",

                },
                {
                    moduleName: "Other",
                    permission: "Manage Email Template",

                },
                {
                    moduleName: "Other",
                    permission: "On-Off Email Template",

                },
                {
                    moduleName: "Other",
                    permission: "Buy Plan",

                },
                {
                    moduleName: "Other",
                    permission: "View Order",

                },
                {
                    moduleName: "Other",
                    permission: "Convert Lead To Deal",

                },
            ]
        },
    ]
    // const { params, setRolesPermissions } = props;
    const [checked, setChecked] = useState();

    const CheckBox = (e) => {
        var id = e.target.id;
        var value = e.target.checked;
        setChecked({
            ...checked,
            [id]: value,
        });
    };

    useEffect(() => {
        console.log(checked);
    }, [checked]);

    return (
        <>
            <Modal {...props} className="custom-delete-modal" keyboard={false}>
                <Modal.Header
                    className="border-0 px-4 bg-transparent close-modal h5"
                    closeButton>

                </Modal.Header>
                <Modal.Body className="pt-0" style={{ padding: "30px" }}>
                    <div className="form-group">
                        <label className="custom-text-dark">Role Name</label>
                        <input
                            type="text"
                            value=""
                            className="form-control creditcard"
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label className="mb-3 mt-3">Assign Permissions</label>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <div className="custom-text-dark"> Module </div>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <div className="custom-text-dark"> Permission </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="dull-text-dark">Account</div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label dull-text-dark">System Setting</label>
                                </div>
                            </div>
                        </div>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <div>
                                        {
                                            tableData.map((item, index) =>
                                                <div key={index} className="row align-items-center p-3 px-0 border-top">
                                                    <div key={index} className="col-sm-12 col-md-2">
                                                        {item.maoduleName}
                                                    </div>
                                                    <div className="col-sm-12 col-md-10">
                                                        <div className="row">
                                                            {
                                                                item?.module?.map((doc, index) =>
                                                                    <>
                                                                        {
                                                                            doc.moduleName === "Other" ?
                                                                                <tr className="col-sm-12 col-md-6 col-lg-6 py-1" key={index}>
                                                                                    <div className="dull-text-dark" scope="row">
                                                                                        <div className="form-check">
                                                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                                                            <label className="form-check-label"> {doc.permission}</label>
                                                                                        </div>

                                                                                        {
                                                                                            doc.permissionType ? <div className="form-check">
                                                                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                                                                <label className="form-check-label"> {doc.permissionType}</label>
                                                                                            </div>
                                                                                                : null
                                                                                        }
                                                                                    </div>
                                                                                </tr>
                                                                                :
                                                                                <tr className="col-sm-12 col-md-3" key={index}>
                                                                                    <th className="dull-text-dark" scope="row">
                                                                                        <div className="form-check">
                                                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                                                            <label className="form-check-label"> {doc.permission}</label>
                                                                                        </div>
                                                                                        {
                                                                                            doc.permissionType ? <>
                                                                                                <div className="form-check">
                                                                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                                                                    <label className="form-check-label"> {doc.permissionType}</label>
                                                                                                </div>
                                                                                            </>
                                                                                                : null
                                                                                        }
                                                                                    </th>
                                                                                </tr>
                                                                        }

                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <button
                            type="submit"
                            className="btn btn-danger form-control"
                            style={{ marginRight: "8px" }}
                            // onClick={() =>
                            //     setRolesPermissions({
                            //         modal: false,
                            //         modalType: "New",
                            //         action: "New",
                            //         details: "",
                            //     })
                            // }
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="text-white btn btn-primary form-control"
                        >
                            Update
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
