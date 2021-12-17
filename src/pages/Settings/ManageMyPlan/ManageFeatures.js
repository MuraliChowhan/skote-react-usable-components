import React, { } from "preact/compat";

function ManageFeatures() {

    return (
        <>
            <div className="feature ng-star-inserted">
                <div className="container-fluid">
                    <div className="row">
                        <div className="card border p-3">
                            <div className="featureinfo">
                                <div className="featureinfo1 d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="fiicon">
                                            <i className="fas fa-gift text-primary fa-2x"></i>
                                        </div>
                                        <div className="fcontent" style={{ marginLeft: "10px" }}>
                                            <h3>Coupons </h3>
                                            <p>If you want to offer a discount or even a free appointment to your customers - </p>
                                            <p> all you need to do is to define the discount for each coupon.</p>

                                            <button className="btn btn-outline-primary fconbtn">Configure</button>
                                            <button className="btn btn-default">View Documentation</button>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end">
                                        <span className="text-success">
                                            <i className="far fa-check-circle"></i>
                                            Active
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-light actbtnp">Deactivate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageFeatures;