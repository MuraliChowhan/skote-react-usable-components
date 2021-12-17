import React from "preact/compat";
import EmailTemplates from "../Emailtemplates/EmailTemplates";

function SMSTemplates() {

    return (
        <>
            <div className="border-bottom pb-2 border-2">
                <h4 className="border-bottom pb-2 border-2"> Email Settings </h4>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="btn-group" role="group">
                        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" defaultChecked />
                        <label className="btn btn-primary" htmlFor="btncheck1">Customer</label>

                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                        <label className="btn btn-primary" htmlFor="btncheck2">Employee</label>
                    </div>
                    <div className="form-group form-check" style={{ marginLeft: "10px" }}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Appointment Approved</label>
                    </div>
                </div>
                <div className="text-primary">Send Test Email</div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <ul className="fa-ul">
                        <li className="border-bottom active my-2 pb-2">
                            <span className="fa-li border-bottom pb-2">
                                <i className="fa-check-circle fas text-primary"></i>
                            </span>
                            Appointment Approved
                        </li>
                        <li className="border-bottom active my-2 pb-2">
                            <span className="fa-li border-bottom pb-2">
                                <i className="fa-check-circle fas text-primary"></i>
                            </span>
                            Appointment Approved
                        </li>
                        <li className="border-bottom active my-2 pb-2">
                            <span className="fa-li border-bottom pb-2">
                                <i className="fa-check-circle fas text-primary"></i>
                            </span>
                            Appointment Approved
                        </li>

                        <li className="border-bottom active my-2 pb-2">
                            <span className="fa-li border-bottom pb-2">
                                <i className="fa-check-circle fas text-primary"></i>
                            </span>
                            Appointment Approved
                        </li>
                        <li className="border-bottom active my-2 pb-2">
                            <span className="fa-li border-bottom pb-2">
                                <i className="fa-check-circle fas text-primary"></i>
                            </span>
                            Appointment Approved
                        </li>
                        <li className="border-bottom active my-2 pb-2">
                            <span className="fa-li border-bottom pb-2">
                                <i className="fa-check-circle fas text-primary"></i>
                            </span>
                            Appointment Approved
                        </li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <EmailTemplates />
                </div>
            </div>
        </>
    )
}

export default SMSTemplates;