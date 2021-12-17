import { DeletePop } from "components/Delete/Delete";
import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import {
    Table,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap";
import '../../../index.css';
import './Roles.css';
import { RolesAndPermissionModal } from "./RolesModal";
import Breadcrumbs from "components/Common/Breadcrumb";
function Roles() {

    const roleAndPermissionBody = [
        {
            id: "EZY210",
            roleName: "Employee",
            permissions: [
                {
                    perName: "Update profile",
                },
                {
                    perName: "Change password",
                },
                {
                    perName: "Manage Lead",
                },
                {
                    perName: "Create Lead",
                },
                {
                    perName: "Delete Lead",
                },
                {
                    perName: "View Lead",
                },
                {
                    perName: "Delete product",
                },
                {
                    perName: "Edit Product",
                },
                {
                    perName: "Edit MDF",
                },
                {
                    perName: "Add MDF",
                },
                {
                    perName: "View MDF",
                },
                {
                    perName: "Create Invoice",
                },
                {
                    perName: "Delete Invoice",
                },
                {
                    perName: "Update Invoice",
                },
                {
                    perName: "Add Tax",
                },
                {
                    perName: "Edit Tax",
                },
                {
                    perName: "Delete Tax",
                },
                {
                    perName: "Create Deal",
                },
                {
                    perName: "Edit Deal",
                },
                {
                    perName: "Delet Deal",
                },
                {
                    perName: "Move MDF",
                },
                {
                    perName: "Create inovice payment",
                },
                {
                    perName: "Manage Invoice payment",
                },
            ],
            edit: "far fa-edit",
            delete: "far fa-trash-alt",
        }

    ];

    const [deleteModal, setDeleteModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    const [roleModal, setRoleModal] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: "",
        details: {},
    });

    return (
        <React.Fragment>
            <MetaTags>
                <title>Roles And Permission | EazyRooms - React Admin & Dashboard Template</title>
            </MetaTags>

            <Breadcrumbs title="Tables" breadcrumbItem="Roles and permissions" />
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody className="p-0">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary"
                                    onClick={() =>
                                        setRoleModal({
                                            modal: true,
                                            modalType: "role",
                                            action: "role",
                                            details: "",
                                        })
                                    }
                                >+ Add Roles</button>
                            </div>
                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Roles</th>
                                            <th>Permissions</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            roleAndPermissionBody.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>
                                                        <ul className="list-unstyled" style={{ width: "100%" }}>
                                                            <div className="row">
                                                                {item?.permissions?.map((item, index) => (
                                                                    <div key={index} className="custom-columns col-sm-12 col-md-2 col-lg-2" style={{ marginRight: "12px" }}>
                                                                        {
                                                                            <li
                                                                                className="permissionTypes text-truncate mt-2 mb-2"
                                                                                style={{ marginRight: "3px" }}
                                                                                key={index} >
                                                                                {" "}
                                                                                {item?.perName}
                                                                            </li>
                                                                        }
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <i className="fas fa-pencil-alt edit-icons"
                                                                onClick={() =>
                                                                    setRoleModal({
                                                                        modal: true,
                                                                        modalType: "role",
                                                                        action: "role",
                                                                        details: "",
                                                                    })
                                                                }
                                                            ></i>
                                                            <i className="fas fa-trash delete-icons"
                                                                onClick={() =>
                                                                    setDeleteModal({
                                                                        modal: true,
                                                                        modalType: "delete",
                                                                        action: "delete",
                                                                        details: "",
                                                                    })
                                                                }
                                                                style={{ marginLeft: "4px" }}></i>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <RolesAndPermissionModal
                setRoleModal={(doc) => setRoleModal(doc)}
                show={roleModal.modal}
                onHide={() =>
                    setRoleModal({ modal: false, modalType: "", type: "", details: {} })
                }
                params={roleModal}
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
export default Roles;
