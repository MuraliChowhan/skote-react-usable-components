import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Collapse,
    Container,
    Row,
    Label,
    Input,
    FormGroup,
    Form,
    Modal,
    Button
} from "reactstrap";
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";


class PipelineSettings extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };

        this.state = {
            rows: [],
            rows1: [],
        };
        this.state = {
            show: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            activeTab: "1",
            activeTab1: "5",
            activeTab2: "9",
            activeTab3: "13",
            verticalActiveTab: "1",
            verticalActiveTabWithIcon: "1",
            customActiveTab: "1",
            customIconActiveTab: "1",
            activeTabJustify: "5",
            col1: true,
            col2: false,
            col3: false,
            col5: true,
            col6: true,
            col7: true,
            col8: true,
            col9: true,
            col10: false,
            col11: false,
        }
        this.toggle = this.toggle.bind(this)

        this.t_col1 = this.t_col1.bind(this)
        this.t_col2 = this.t_col2.bind(this)
        this.t_col3 = this.t_col3.bind(this)
        this.t_col5 = this.t_col5.bind(this)
        this.t_col6 = this.t_col6.bind(this)
        this.t_col7 = this.t_col7.bind(this)
        this.t_col8 = this.t_col8.bind(this)
        this.t_col9 = this.t_col9.bind(this)
        this.t_col10 = this.t_col10.bind(this)
        this.t_col11 = this.t_col11.bind(this)


        this.toggleVertical = this.toggleVertical.bind(this)
        this.toggleVerticalIcon = this.toggleVerticalIcon.bind(this)
        this.toggleCustom = this.toggleCustom.bind(this)
        this.toggleIconCustom = this.toggleIconCustom.bind(this)
    }

 handleModal() {
        this.setState({ show: !this.state.show })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    t_col1() {
        this.setState({
            col1: !this.state.col1,
            col2: false,
            col3: false
        })
    }

    t_col2() {
        this.setState({
            col1: false,
            col2: !this.state.col2,
            col3: false
        })
    }

    t_col3() {
        this.setState({
            col1: false,
            col2: false,
            col3: !this.state.col3
        })
    }

    t_col5() {
        this.setState({ col5: !this.state.col5 })
    }

    t_col6() {
        this.setState({ col6: !this.state.col6 })
    }

    t_col7() {
        this.setState({ col7: !this.state.col7 })
    }

    t_col8() {
        this.setState({
            col6: !this.state.col6,
            col7: !this.state.col7
        })
    }

    t_col9() {
        this.setState({
            col9: !this.state.col9,
            col10: false,
            col11: false
        })
    }

    t_col10() {
        this.setState({
            col10: !this.state.col10,
            col9: false,
            col11: false
        })
    }

    t_col11() {
        this.setState({
            col11: !this.state.col11,
            col9: false,
            col10: false
        })
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            })
        }
    }

    toggleVertical(tab) {
        if (this.state.verticalActiveTab !== tab) {
            this.setState({
                verticalActiveTab: tab,
            })
        }
    }

    toggleVerticalIcon(tab) {
        if (this.state.verticalActiveTabWithIcon !== tab) {
            this.setState({
                verticalActiveTabWithIcon: tab,
            })
        }
    }

    toggleCustom(tab) {
        if (this.state.customActiveTab !== tab) {
            this.setState({
                customActiveTab: tab,
            })
        }
    }

    toggleIconCustom(tab) {
        if (this.state.customIconActiveTab !== tab) {
            this.setState({
                customIconActiveTab: tab,
            })
        }
    }

    handleAddRow = () => {
        const item = {
            name: "",
        };
        this.setState({
            rows: [...this.state.rows, item],
        });
    };

    handleAddRowNested = () => {
        const item1 = {
            name1: "",
        };
        this.setState({
            rows1: [...this.state.rows1, item1],
        });
    };

    handleRemoveRow = (e, idx) => {
        if (idx === "01") {
            document.getElementById("addr" + idx).style.display = "block";
        } else if (typeof idx != "undefined") {
            document.getElementById("addr" + idx).style.display = "none";
        }
    };

    handleRemoveRowNested = (e, idx) => {
        document.getElementById("nested" + idx).style.display = "none";
    };

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-between border-bottom mb-3">
                    <h4 className="pb-2 border-2"> Pipeline Settings </h4>
                    <button className="btn btn-outline-primary btn-sm mb-2 me-2"
                        onClick={() => this.handleModal()}
                    >+ Add new </button>
                </div>
                <h5 className="text-muted text-uppercase">
                    LEADS (3)
                </h5>

                <Row>
                    <Card>
                        <CardHeader>
                            <div className="d-flex gap-2 flex-wrap">
                                <Link
                                    to="#"
                                    onClick={this.t_col5}
                                    style={{ cursor: "pointer" }}
                                    className="btn btn-link p-0 collapsed"
                                >
                                    <h5>Pre sales</h5>{" "}
                                </Link>

                            </div>

                            <Collapse isOpen={this.state.col5}>
                                <div className="row card card-shadow p-3 mb-3">Closed</div>
                                <div className="row card card-shadow p-3 mb-3">Closed</div>

                                <div className="inner-repeater mb-4">
                                    <table style={{ width: "100%" }}>
                                        <tbody>
                                            {this.state.rows1?.map((item1, idx) => (
                                                <tr id={"nested" + idx} key={idx}>
                                                    <td>
                                                        <Row className="inner mb-3">
                                                            <Col md="10" className="col-8">
                                                                <Input
                                                                    type="text"
                                                                    className="inner form-control"
                                                                    placeholder={
                                                                        "Enter your phone no... " +
                                                                        (idx + 2)
                                                                    }
                                                                />
                                                            </Col>
                                                            <Col md="2" className="col-4">
                                                                <Button
                                                                    onClick={e =>
                                                                        this.handleRemoveRowNested(e, idx)
                                                                    }
                                                                    color="primary"
                                                                    className="btn-block inner"
                                                                    style={{ width: "100%" }}
                                                                >
                                                                    {" "}
                                                                    Delete
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button
                                        onClick={this.handleAddRowNested}
                                        className="btn btn-outline-info inner col-sm-12">
                                        Add Number
                                    </button>
                                </div>
                            </Collapse>
                        </CardHeader>
                    </Card>
                </Row>

                <Row>
                    <Card>
                        <CardHeader>
                            <div className="d-flex gap-2 flex-wrap">
                                <Link
                                    to="#"
                                    onClick={this.t_col6}
                                    style={{ cursor: "pointer" }}
                                    className="btn btn-link p-0 collapsed"
                                >
                                    <h5>Web side leads</h5>{" "}
                                </Link>
                            </div>

                            <Collapse isOpen={this.state.col6}>
                                <div className="row card card-shadow p-3 mb-3">Closed</div>
                                <div className="row card card-shadow p-3 mb-3">Closed</div>

                                <button className="btn btn-outline-info inner col-sm-12">+ Add stage</button>
                            </Collapse>

                        </CardHeader>
                    </Card>
                </Row>

                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton className="modal-title mt-0 h5">Add New Task</Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label>Task Title</label>
                            <input type="text" className="form-control" placeholder="Enter tasks title" />
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Priority</label>
                                <select className="form-control">
                                    <option>High</option>
                                    <option>Low</option>
                                    <option>Medium</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Assinged Staff</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label>Task Status</label>
                                <select className="form-control">
                                    <option>Not Sorted</option>
                                    <option>Inprogess</option>
                                    <option>Completed</option>
                                    <option>Cancelled</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <label>Description</label>
                                <textarea rows="3" type="text" className="form-control" placeholder="write here..." />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-light" onClick={() => this.handleModal()}>Close</Button>
                        <Button className="btn btn-success" onClick={() => this.handleModal()}>Create</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default PipelineSettings
