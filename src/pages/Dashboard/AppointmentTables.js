import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
    Container,
    Row,
    Col,
    Card,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardBody,
    Media,
    Table,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class AppointmentTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assets: [
                {
                    icon: "mdi mdi-bitcoin",
                    color: "warning",
                    title: "BTC",
                    investRate: "1.2601",
                    investPrice: "6225.74",
                    price: "7525.47",
                    loansRate: "0.1512",
                    loansPrice: "742.32",
                    totalRate: "4.2562",
                    totalPrice: "6425.42",
                },
                {
                    icon: "mdi mdi-ethereum",
                    color: "primary",
                    title: "ETH",
                    investRate: "0.0814",
                    investPrice: "3256.29",
                    price: "4235.78",
                    loansRate: "0.0253",
                    loansPrice: "675.04",
                    totalRate: "0.0921",
                    totalPrice: "4536.24",
                },
                {
                    icon: "mdi mdi-litecoin",
                    color: "info",
                    title: "LTC",
                    investRate: "0.0682",
                    investPrice: "2936.14",
                    price: "3726.06",
                    loansRate: "0.0234",
                    loansPrice: "523.17",
                    totalRate: "0.0823",
                    totalPrice: "3254.23",
                },
                {
                    icon: "mdi mdi-bitcoin",
                    color: "warning",
                    title: "BTC",
                    investRate: "1.2601",
                    investPrice: "6225.74",
                    price: "7525.47",
                    loansRate: "0.1512",
                    loansPrice: "742.32",
                    totalRate: "4.2562",
                    totalPrice: "6425.42",
                },
                {
                    icon: "mdi mdi-ethereum",
                    color: "primary",
                    title: "ETH",
                    investRate: "0.0814",
                    investPrice: "3256.29",
                    price: "4235.78",
                    loansRate: "0.0253",
                    loansPrice: "675.04",
                    totalRate: "0.0921",
                    totalPrice: "4536.24",
                },
            ],
            isMenu: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState(prevState => ({
            isMenu: !prevState.isMenu,
        }))
    }

    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <title>Lending | Skote - React Admin & Dashboard Template</title>
                </MetaTags>
                {/* Render Breadcrumb */}
                <Card>
                    <CardBody>
                        <div className="d-flex justify-content-between">
                            <h4 className="card-title mb-4">Last booked appointments</h4>
                            <div className="float-end d-flex">
                                <Link to="/appointments">
                                    <i className="mdi mdi-open-in-new me-3 fa-2x asas" style={{ color: "#495057" }}></i>
                                </Link>
                                <div className="input-group input-group-sm">
                                    <select
                                        className="form-select form-select-sm">
                                        <option value="jan">Jan</option>
                                        <option value="dec">Dec</option>
                                        <option value="nov">Nov</option>
                                        <option value="oct">Oct</option>
                                    </select>
                                    <label className="input-group-text">Month</label>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <Table className="table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Tome & Date</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.assets.map((asset, key) => (
                                        <tr key={key}>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-xs me-3">
                                                        <span
                                                            className={
                                                                "avatar-title rounded-circle bg-soft bg-" +
                                                                asset.color +
                                                                " text-" +
                                                                asset.color +
                                                                " font-size-18"
                                                            }
                                                        >
                                                            <i className={asset.icon}></i>
                                                        </span>
                                                    </div>
                                                    <span>{asset.title}</span>
                                                </div>
                                            </th>
                                            <td>
                                                <div className="text-muted">
                                                    $ {asset.price}
                                                </div>
                                            </td>
                                            <td>
                                                <h5 className="font-size-14 mb-1">
                                                    {asset.investRate}
                                                </h5>
                                                <div className="text-muted">
                                                    ${asset.investPrice}
                                                </div>
                                            </td>
                                            <td>
                                                <h5 className="font-size-14 mb-1">
                                                    {asset.loansRate}
                                                </h5>
                                                <div className="text-muted">
                                                    ${asset.loansPrice}
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        )
    }
}

export default AppointmentTable
