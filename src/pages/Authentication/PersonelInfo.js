import React from "react";
function PersonelInfo() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title mb-4">Personal Information</h4>
                    <p className="text-muted mb-4">
                        Hi Im Cynthia Price,has been the industrys standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.
                    </p>

                    <div className="row border-bottom mb-3">
                        <div className="col-sm-12 col-md-3 col-lg-3" style={{ fontWeight: "600" }}>
                            Full Name:
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            Murali
                        </div>
                    </div>
                    <div className="row border-bottom mb-3">
                        <div className="col-sm-12 col-md-3 col-lg-3" style={{ fontWeight: "600" }}>
                            E-mail:
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            murali@gmail.com
                        </div>
                    </div>
                    <div className="row border-bottom mb-3">
                        <div className="col-sm-12 col-md-3 col-lg-3" style={{ fontWeight: "600" }}>
                            User-Type:
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            ClientAdmin
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonelInfo;