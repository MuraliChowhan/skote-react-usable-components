import React from "preact/compat";
import {
    Table
} from "reactstrap";

function NotificationTable() {

    const tablecolumns = [
        {
            id: "01",
            role: "Software Engineer",
            team: "Engineering",
            status: ""
        },
        {
            id: "02",
            role: "Data Engineer",
            team: "Engineering",
            status: ""
        }
    ]


    return (
        <>

            <Table className="table mb-0">
                <thead style={{ backgroundColor: "#f8f9fa" }}>
                    <tr>
                        <th>Notification</th>
                        <th>Trigger</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tablecolumns.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.role}</td>
                                <td>{item.team}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customSwitchsizesm"
                                    />
                                </td>
                                <td>
                                    <i className="fas fa-ellipsis-v"></i>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default NotificationTable;