import React from "preact/compat";
import {
    Table,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap";

function SMSSettingsTab() {
    const tablecolumns = [{
        date: "Nov 12, 2021",
        customer: "Mark",
        phone: "9133822838",
        credits: "2",
        message: "Approved"
    }, {
        date: "Nov 12, 2021",
        customer: "Mark",
        phone: "9133822838",
        credits: "2",
        message: "Approved"
    },
    {
        date: "Nov 12, 2021",
        customer: "Mark",
        phone: "9133822838",
        credits: "2",
        message: "Approved"
    },
    {
        date: "Nov 12, 2021",
        customer: "Mark",
        phone: "9133822838",
        credits: "2",
        message: "Approved"
    }]
    return (
        <>
            <div className="row mb-3">
                <div className="col-sm-12 col-md-11 col-lg-11">
                    <input className="form-control" placeholder="search..." />
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1">
                    <button className="btn btn-primary">
                        <i className="mdi mdi-filter"></i>
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <Table className="table mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Credits</th>
                            <th>Messae</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tablecolumns.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.customer}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.credits}</td>
                                    <td>{item.message}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default SMSSettingsTab;