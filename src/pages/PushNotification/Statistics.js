import { iteratee } from "lodash";
import React from "preact/compat";
import {
    Table
} from "reactstrap";
import './pushnotification.css';

function Statistics() {

    const data = [
        {
            icon: "fas fa-eye",
            count: "40",
            name: "Impressions"

        },
        {
            icon: "fas fa-mouse-pointer",
            count: "40",
            name: "Impressions"
        },
        {
            icon: "fas fa-mouse",
            count: "40",
            name: "Impressions"
        },
        {
            icon: "fas fa-database",
            count: "40",
            name: "Impressions"
        },

    ]

    return (
        <>
            <div className="row my-5">
                <div className="stheader1 col-sm-12 col-md-8 col-lg-8">
                    <h3>Statistics</h3>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <input type="date" className="form-control" />
                </div>
            </div>

            <div className="row">
                {
                    data.map((item, index) =>
                        <div key={index} className="col-sm-12 col-md-3 col-lg-3 py-2 shadow-lg">
                            <div className="crad">
                                <div className="d-flex">
                                    <div className="iconbg">
                                        <i className={item.icon} style={{ color: "#1947ba", fontSize: "1.5rem" }}></i>
                                    </div>

                                    <div className="countText">
                                        {item.count}
                                        <p style={{ fontSize: "12px" }}>
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Statistics;