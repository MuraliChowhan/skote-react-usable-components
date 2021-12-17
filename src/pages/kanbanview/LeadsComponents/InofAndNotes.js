import React from "preact/compat";
import {
    Card,
    CardBody,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap";
import './leadsComponents.css';

function InfoAndNotes() {

    return (
        <>
            <Card>
                <CardBody className="border">
                    <Row>
                        <Col sm="12" md="3" lg="3">
                            <h4 className="mb-3 mt-2 border-bottom"> Basic Info </h4>
                            <h6 className="border-bottom pb-0 me-4 mb-3">customer Info</h6>

                            <div className="mb-3 d-flex align-items-center">
                                <i className="far fa-user font-size-20"></i>
                                <span style={{ marginLeft: "2px" }}>Karra Murali Chowhan</span>
                            </div>

                            <div className="mb-3 d-flex align-items-center">
                                <i className="bx bxs-phone-call font-size-20"></i>
                                <span style={{ marginLeft: "2px" }}> +91 9505295331 </span>
                            </div>

                            <div className="mb-3 d-flex align-items-center">
                                <i className="mdi mdi-email-multiple-outline font-size-20"></i>
                                <span style={{ marginLeft: "2px" }}> murali@gmail.com </span>
                            </div>

                            <div className="mb-3">
                                <h6 className="border-bottom pb-0 me-4 mb-3">Company Info</h6>
                                <div className="mb-3 d-flex align-items-center">
                                    <i className="mdi mdi-office-building-outline font-size-20"></i>
                                    <span style={{ marginLeft: "2px" }}> Dyno Co </span>
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <i className="mdi mdi-search-web font-size-20"></i>
                                    <span style={{ marginLeft: "2px" }}> https://dyno.co </span>
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <i className="bx bxs-phone-call font-size-20"></i>
                                    <span style={{ marginLeft: "2px" }}> +91 789 456 1230 </span>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="9" lg="9" className="border-left">
                            <h4 className="mb-3 mt-2 border-bottom"> Notes </h4>

                            <div className="mb-4">
                                <input type="text" className="form-control" placeholder="write your notes here" />
                            </div>

                            <div className="border p-2 mb-3">
                                <span className="fw-500">Murali</span> <span style={{ marginLeft: "5px" }} className="fw-400 text-muted mb-2">Nov 05, 03:57 PM</span>
                                <p className="fw-400 mt-2 text-muted">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam nobis
                                    aut nisi similique consectetur adipisci debitis earum aliquam temporibus, maiores
                                    voluptate vero reiciendis. Quam vitae quidem amet minima sapiente?
                                </p>
                            </div>

                            <div className="border p-2 mb-3">
                                <span className="fw-500">Murali</span> <span style={{ marginLeft: "5px" }} className="fw-400 text-muted mb-2">Nov 05, 03:57 PM</span>
                                <p className="fw-400 mt-2 text-muted">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam nobis
                                    aut nisi similique consectetur adipisci debitis earum aliquam temporibus, maiores
                                    voluptate vero reiciendis. Quam vitae quidem amet minima sapiente?
                                </p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default InfoAndNotes;