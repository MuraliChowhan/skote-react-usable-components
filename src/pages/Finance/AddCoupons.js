import MultiSelectDropdown from "components/Multiselect/Multiselect";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class AddCoupons extends Component {
    constructor(props) {
        super(props)

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
        this.state = {
            show: false
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Link className="d-flex align-items-center mb-3" style={{ fontSize: "15px" }} to="/finance">
                        <i className="fas fa-arrow-left"
                            style={{ color: "#74788d", marginRight: "10px", cursor: "pointer" }}
                        ></i> Back
                    </Link>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-8 col-lg-8 offset-2">
                                <h4 className="mb-3">Add Coupons</h4>
                                <div className="mb-3">
                                    <label>Coupon Code</label>
                                    <input type="text" className="form-control" placeholder="Enter coupon code" />
                                </div>
                                <div className="mb-3">
                                    <label>Expiration Date</label>
                                    <input type="date" className="form-control" placeholder="Enter coupon code" />
                                </div>
                                <div className="mb-3">
                                    <label>Usage Limit</label>
                                    <input type="text" className="form-control" placeholder="Enter coupon code" />
                                </div>
                                <div classnames="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Coupon has no usage limit
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label>Limit Per User</label>
                                    <input type="text" className="form-control" placeholder="Enter coupon code" />
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Coupon has no limit per user
                                        </label>
                                    </div>
                                    <MultiSelectDropdown />

                                </div>
                                <div className="mb-3">
                                    <label>Discount Type</label>
                                    <select className="form-control">
                                        <option>Percentage Amount</option>
                                        <option>Fixed Amount</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label>Percentage amount (%)</label>
                                    <input type="text" className="form-control" placeholder="Enter coupon code" />
                                </div>

                                <div className="mb-3">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch1"
                                            onClick={() => checkCoupons()}
                                        />
                                        <label style={{ marginLeft: "4px" }} className="custom-control-label" htmlFor="customSwitch1">Send coupon to customers</label>
                                    </div>
                                </div>

                                {
                                    this.state.show ? null :
                                        <div>
                                            <div className="custom-control custom-radio align-items-center">
                                                <input type="radio" name="radioDisabled" id="customRadioDisabled2" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadioDisabled2" style={{ marginLeft: "10px" }}>Manually select customers</label>
                                            </div>
                                            <div className="custom-control custom-radio align-items-center">
                                                <input type="radio" name="radioDisabled" id="customRadioDisabled2" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadioDisabled2" style={{ marginLeft: "10px" }}>Manually select customers</label>
                                            </div>
                                        </div>
                                }
                                <div className="d-flex mt-3">
                                    <Link to="/finance">
                                        <button className="btn btn-primary">Create coupon</button>
                                    </Link>
                                    <button className="btn btn-light" style={{ marginLeft: "5px" }}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default AddCoupons
