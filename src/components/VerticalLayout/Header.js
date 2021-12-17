import PropTypes from 'prop-types'
import React, { Component } from "react"
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import { Link } from "react-router-dom"

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import RightSidebar from '../CommonForBoth/RightSidebar'

import { Button, Modal } from 'react-bootstrap';

// import images
import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"


import logo from "../../assets/images/logo.svg"
import logoLightSvg from "../../assets/images/logo-light.svg"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import { toggleRightSidebar } from "../../store/actions"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
      open: false,
      position: 'right',
    }

    this.state = {
      show: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }


  handleModal(id) {
    this.setState({ show: !this.state.show, modalName: id })
  }

  handleModal2(id) {
    this.setState({ show: !this.state.show, modalName: id })
  }

  handleModal3(id) {
    this.setState({ show: !this.state.show, modalName: id })
  }

  handleModal4(id) {
    this.setState({ show: !this.state.show, modalName: id })
  }


  handleModal5(id) {
    this.setState({ show: !this.state.show, modalName: id })
  }

  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback()
  }
  /** 
   * Right sidebar drawer 
  * */

  toggleRightDrawer() {
    this.setState({ position: 'right' });
    this.setState({ open: !this.state.open });
  }
  closeDrawer() {
    this.setState({ open: false });
  }
  onDrawerClose() {
    this.setState({ open: false });
  }


  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar()
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box d-lg-none d-md-block">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                onClick={this.toggleMenu}
                className="btn btn-sm px-3 font-size-16 header-item"
                id="vertical-menu-btn"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>

              <Dropdown
                className="dropdown-mega d-none d-lg-block ms-2"
                isOpen={this.state.megaMenuDrp}
                toggle={() => {
                  this.setState({ megaMenuDrp: !this.state.megaMenuDrp })
                }}
              >
                <DropdownToggle
                  className="btn header-item"
                  caret
                  tag="button"
                >
                  {" "}
                  {this.props.t("Create New")}{" "}
                  <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-megamenu" style={{ width: "30px" }}>
                  <Row>
                    <Col sm={8}>
                      <Row>
                        <Col md={4}>
                          <ul className="list-unstyled megamenu-list">
                            <li style={{ cursor: "pointer" }}
                              onClick={() => this.handleModal('task')}>
                              <span>{this.props.t("Tasks")}</span>
                            </li>
                            <li
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleModal2('lead')}>
                              <a>{this.props.t("Lead")}</a>
                            </li>
                            <li
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleModal3('client')}>
                              <a>{this.props.t("Client")}</a>
                            </li>
                            <li
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleModal4('invoice')}>
                              <a>{this.props.t("Invoice")}</a>
                            </li>
                            <li
                              style={{ cursor: "pointer" }}
                              onClick={() => this.handleModal5('appointment')}>
                              <a>{this.props.t("Appointments")}</a>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>

                  </Row>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch })
                  }}
                  type="button"
                  className="btn header-item noti-icon"
                  id="page-header-search-dropdown"
                >
                  <i className="mdi mdi-message-processing-outline"></i>
                </button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* <LanguageDropdown /> */}


              <Dropdown
                className="d-none d-lg-inline-block ms-1">
                <DropdownToggle
                  className="btn header-item noti-icon"
                  tag="button"
                >
                  <Link to="/chat"> <i className="mdi mdi-message-processing-outline"></i></Link>
                </DropdownToggle>
              </Dropdown>

              <Dropdown
                className="d-none d-lg-inline-block ms-1">
                <DropdownToggle
                  className="btn header-item noti-icon"
                  tag="button"
                >
                  <Link to="/tasks">  <i className="bx bx-task"></i></Link>
                </DropdownToggle>
              </Dropdown>

              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  data-toggle="fullscreen"
                >
                  <Link to="/calender">  <i className="bx bx-calendar"></i></Link>
                </button>
              </div>

              <NotificationDropdown />
              <ProfileMenu />

              <div
                // onClick={this.toggleRightDrawer} disabled={this.state.open}
                className="dropdown d-inline-block"
              >
                <button
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle"
                >
                  <Link to="/settings"><i className="bx bx-cog bx-spin"></i></Link>
                </button>
              </div>
            </div>
          </div>


          <Modal show={this.state.show && this.state.modalName === "task"} onHide={() => this.handleModal()}>
            <Modal.Header closeButton className="modal-title mt-0 h5">Add New Task</Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label>Task Title</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Related To</label>
                      <select className="form-control">
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Illinois</option>
                        <option>Utah</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Date</label>
                      <input type="date" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Priority</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Assinged Staff</label>
                      <select className="form-control">
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Illinois</option>
                        <option>Utah</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Task Status</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                    <div className="mb-3">
                      <label>Description</label>
                      <textarea row="3" type="text" className="form-control" placeholder="task title" />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-light" onClick={() => this.handleModal()}>Close</Button>
              <Button className="btn btn-success" onClick={() => this.handleModal()}>Create</Button>
            </Modal.Footer>
          </Modal>


          {/* Lead modal */}

          <Modal show={this.state.show && this.state.modalName === "lead"} onHide={() => this.handleModal2()}>
            <Modal.Header closeButton className="modal-title mt-0 h5">Add New Lead</Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h4 className="mb-3">Add New Lead</h4>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label>Salutation</label>
                      <select className="form-control">
                        <option>Mr.</option>
                        <option>Mrs</option>
                        <option>Ms.</option>
                        <option>Br.</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Pipeline</label>
                      <input type="date" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Pre sales</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Assinged to</label>
                      <select className="form-control">
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Illinois</option>
                        <option>Utah</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Pipeline Stage</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                    <h4 className="gtitle border-bottom">Communication</h4>
                    <div className="col-6 mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="task title" />
                    </div>
                    <h4 className="gtitle border-bottom">Professional</h4>
                    <div className="col-6 mb-3">
                      <label>Company Name</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Address</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>City</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>State</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Country</label>
                      <select className="form-control">
                        <option>India</option>
                        <option>America</option>
                        <option>Newzeland</option>
                        <option>Australia</option>
                        <option>Switzerland</option>
                        <option>England</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Time Zone</label>
                      <select className="form-control">
                        <option>Asia/Kolkata</option>
                        <option>Asia/Delhi</option>
                        <option>Asia/Dubai</option>
                        <option>Asia/Jakarta</option>
                      </select>
                    </div>

                    <h4 className="gtitle border-bottom">Requirment</h4>
                    <div className="col-6 mb-3">
                      <label>Product</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Amount quoted</label>
                      <input type="email" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Currency</label>
                      <select className="form-control">
                        <option>Indian rupees</option>
                        <option>American dollar</option>
                        <option>Euro</option>
                        <option>Algeria dinar</option>
                        <option>Argentina pisos</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Source</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                  </div>
                </div>

              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-light" onClick={() => this.handleModal2()}>Close</Button>
              <Button className="btn btn-success" onClick={() => this.handleModal2()}>Create</Button>
            </Modal.Footer>
          </Modal>



          {/* Client modal */}

          <Modal show={this.state.show && this.state.modalName === "client"} onHide={() => this.handleModal3()}>
            <Modal.Header closeButton className="modal-title mt-0 h5">Add New Client</Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label>Select Pipeline</label>
                      <select className="form-control">
                        <option>India</option>
                        <option>Alaska</option>
                        <option>Illinois</option>
                        <option>Utah</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Select Stage</label>
                      <select className="form-control">
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Illinois</option>
                        <option>Utah</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>


                    <div className="col-6 mb-3">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Price Estimation</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Service</label>
                      <select className="form-control">
                        <option>Product development</option>
                        <option>Digital marketing</option>
                        <option>Application development</option>
                        <option>Tetsing Applications</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-light" onClick={() => this.handleModal3()}>Close</Button>
              <Button className="btn btn-success" onClick={() => this.handleModal3()}>Create</Button>
            </Modal.Footer>
          </Modal>



          {/* Client Invoices */}

          <Modal show={this.state.show && this.state.modalName === "invoice"} onHide={() => this.handleModal4()}>
            <Modal.Header closeButton className="modal-title mt-0 h5">Add New Invoices</Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label>Select Pipeline</label>
                      <select className="form-control">
                        <option>India</option>
                        <option>Alaska</option>
                        <option>Illinois</option>
                        <option>Utah</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Select Stage</label>
                      <select className="form-control">
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Illinois</option>
                        <option>Utah</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>


                    <div className="col-6 mb-3">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Price Estimation</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Service</label>
                      <select className="form-control">
                        <option>Product development</option>
                        <option>Digital marketing</option>
                        <option>Application development</option>
                        <option>Tetsing Applications</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-light" onClick={() => this.handleModal4()}>Close</Button>
              <Button className="btn btn-success" onClick={() => this.handleModal4()}>Create</Button>
            </Modal.Footer>
          </Modal>



          {/* Client Invoices */}

          <Modal show={this.state.show && this.state.modalName === "appointment"} onHide={() => this.handleModal5()}>
            <Modal.Header closeButton className="modal-title mt-0 h5">Add New Appointments</Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>
                    <div className="col-6 mb-3">
                      <label>Category</label>
                      <select className="form-control">
                        <option>Category-1</option>
                        <option>Category-2</option>
                        <option>Category-3</option>
                        <option>Category-4</option>
                      </select>
                    </div>

                    <div className="col-6 mb-3">
                      <label>Service</label>
                      <select className="form-control">
                        <option>service-1</option>
                        <option>service-2</option>
                        <option>service-3</option>
                        <option>service-4</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label>Assigned Staff</label>
                      <select className="form-control">
                        <option>Staff-1</option>
                        <option>Staff-2</option>
                        <option>Staff-3</option>
                        <option>Staff-4</option>
                      </select>
                    </div>

                    <div className="col-6 mb-3">
                      <label>Meeting Type</label>
                      <select className="form-control">
                        <option>meeting-1</option>
                        <option>meeting-2</option>
                        <option>meeting-3</option>
                        <option>meeting-4</option>
                      </select>
                    </div>

                    <div className="col-6 mb-3">
                      <label>Meeting details</label>
                      <select className="form-control">
                        <option>details-1</option>
                        <option>details-2</option>
                        <option>details-3</option>
                        <option>details-4</option>
                      </select>
                    </div>

                    <div className="col-6 mb-3">
                      <label>Date</label>
                      <input type="date" className="form-control" placeholder="task title" />
                    </div>

                    <div className="col-6 mb-3">
                      <label>Payment Type</label>
                      <input type="text" className="form-control" placeholder="task title" />
                    </div>

                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-light" onClick={() => this.handleModal5()}>Close</Button>
              <Button className="btn btn-success" onClick={() => this.handleModal5()}>Create</Button>
            </Modal.Footer>
          </Modal>

        </header>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
        >
          <RightSidebar onClose={this.onDrawerClose} />
        </ReactDrawer>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withTranslation()(Header)
)

Header.propTypes = {
  t: PropTypes.any,
  toggleMenuCallback: PropTypes.any,
  toggleRightSidebar: PropTypes.func
}