import React from "preact/compat";
import './contacts.css';

function ContactDetails() {

    const data = [
        {
            icon: "./images/avatar-1.jpg",
            count: "40",
            name: "David Henry",
            email: "david@gmail.com",
            mobileNumer: "9231302393"

        },
        {
            icon: "./images/avatar-2.jpg",
            count: "40",
            name: "Michael",
            email: "michael@gmail.com",
            mobileNumer: "9231302393"
        },
        {
            icon: "./images/avatar-3.jpg",
            count: "40",
            name: "Pieterson",
            email: "pieterson@gmail.com",
            mobileNumer: "9231302393"
        },
        {
            icon: "./images/avatar-4.jpg",
            count: "40",
            name: "Smith",
            email: "smith@gmail.com",
            mobileNumer: "9231302393"
        },

    ]

    return (
        <>
            <div className="page-content">
                <div className="d-flex justify-content-between">
                    <h4 className="mb-0 font-size-18">User grid</h4>
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item ng-star-inserted">Contacts</li>
                        <li className="breadcrumb-item active ng-star-inserted">User grid</li>
                    </ol>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="btn btn-primary ms-auto mb-2"


                    >Add user</div>
                </div>

                <div className="row">
                    {
                        data.map((item, index) =>
                            <div key={index} className="col-sm-12 col-md-3 col-lg-3 py-2 ">
                                <div className="card p-3">
                                    <div className="text-center">
                                        <img src={item.icon} width="40" height="40" style={{ borderRadius: "30px" }} />
                                    </div>
                                    <div className="text-center">
                                        <h5 className="font-size-15 mb-1">{item.name}</h5>
                                        <a className="text-dark">{item.email}</a>
                                        <div className="py-3">{item.mobileNumer}</div>
                                        <div className="d-flex justify-content-center">
                                            <span className="badge bg-primary font-size-11 m-1">Javacript</span>
                                            <span className="badge bg-primary font-size-11 m-1">Python</span>
                                        </div>
                                        <div className="d-flex justify-content-between pt-3">
                                            <i className="bx bx-message-square-dots"></i>
                                            <i className="bx bx-user-circle"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="text-center my-3">
                    <i className="bx bx-hourglass bx-spin mr-2 text-success"></i>
                    <span className="text-success">Load more...</span>
                </div>
            </div>
            
        </>
    )
}

export default ContactDetails;