import React from "preact/compat";

function SMSHistory() {

    return (
        <>
            <div className="row border rounded border-2 mt-3 mb-3 border-light p-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="">
                            <span className="font-size-15"> SMS Credits Left </span>
                            <span className="text-danger">0.00</span>
                            <p className="text-danger" style={{ fontSize: "12px", marginTop: "10px" }}> You are running out of SMS credits. </p>
                        </h4>
                    </div>

                    <button className="btn btn-primary">+ Add Credits</button>
                </div>
            </div>
            <div className="col-5 mb-3">
                <lable>
                    Alphanumeric Sender ID
                </lable>
                <input type="text" className="form-control" placeholder="Enter Alphanumeric" />
                <p>
                    Allows you to set your company name or brand as the Sender ID when sending one-way SMS messages.
                </p>
            </div>
        </>
    )
}

export default SMSHistory;