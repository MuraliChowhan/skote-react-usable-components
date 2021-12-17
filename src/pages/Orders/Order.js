import React, { Component } from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags'

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
    PaginationProvider, PaginationListStandalone,
    SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../Bookings/bookings.scss";

// Table data
const products = [

    { "id": 1, "name": "Airi Satou", "roomnumber": "Accountant", "items": "Tokyo", "amount": "$120", "status": "33", "requestdate": "2008/11/28", "action": "$162,700" },

    { "id": 2, "name": "Angelica Ramos", "roomnumber": "Chief Executive Officer (CEO)", "items": "London", "amount": "$120", "status": "47", "requestdate": "2009/10/09", "action": "$1,200,000" },

    { "id": 3, "name": "Ashton Cox", "roomnumber": "Junior Technical Author", "items": "San Francisco", "status": "66", "amount": "$120", "requestdate": "2009/01/12", "action": "$86,000" },

    { "id": 4, "name": "Bradley Greer", "roomnumber": "Software Engineer", "items": "London", "status": "41", "amount": "$120", "requestdate": "2012/10/13", "action": "$132,000" },

    { "id": 5, "name": "Brenden Wagner", "roomnumber": "Software Engineer", "items": "San Francisco", "status": "28", "amount": "$120", "requestdate": "2011/06/07", "action": "$206,850" },

    { "id": 6, "name": "Brielle Williamson", "roomnumber": "Integration Specialist", "items": "New York", "status": "61", "amount": "$120", "requestdate": "2012/12/02", "action": "$372,000" },

    { "id": 7, "name": "Bruno Nash", "roomnumber": "Software Engineer", "items": "London", "status": "38", "amount": "$120", "requestdate": "2011/05/03", "action": "$163,500" },

    { "id": 8, "name": "Caesar Vance", "roomnumber": "Pre-Sales Support", "items": "New York", "status": "21", "amount": "$120", "requestdate": "2011/12/12", "action": "$106,450" },

    { "id": 9, "name": "Cara Stevens", "roomnumber": "Sales Assistant", "items": "New York", "status": "46", "amount": "$120", "requestdate": "2011/12/06", "action": "$145,600" },

    { "id": 10, "name": "Cedric Kelly", "roomnumber": "Senior Javascript Developer", "items": "Edinburgh", "status": "22", "amount": "$120", "requestdate": "2012/03/29", "action": "$433,060" },

    { "id": 11, "name": "Marshall", "roomnumber": "Regional Director", "items": "San Francisco", "status": "36", "amount": "$120", "requestdate": "2008/10/16", "action": "$470,600" },

    { "id": 12, "name": "Hurst", "roomnumber": "Javascript Developer", "items": "San Francisco", "status": "39", "amount": "$120", "requestdate": "2009/09/15", "action": "$205,500" },

    { "id": 13, "name": "Rios", "roomnumber": "Personnel Lead", "items": "Edinburgh", "status": "35", "amount": "$120", "amount": "$120", "requestdate": "2012/09/26", "action": "$217,500" },

    { "id": 14, "name": "Snider", "roomnumber": "Customer Support", "items": "New York", "status": "27", "amount": "$120", "amount": "$120", "requestdate": "2011/01/25", "action": "$112,000" },

    { "id": 15, "name": "Wilder", "roomnumber": "Sales Assistant", "items": "Sidney", "status": "23", "requestdate": "2010/09/20", "action": "$85,600", "amount": "$120", },

    { "id": 16, "name": "Camacho", "roomnumber": "Support Engineer", "items": "San Francisco", "status": "47", "requestdate": "2009/07/07", "amount": "$120", "action": "$87,500" },

    { "id": 17, "name": "Green", "roomnumber": "Chief Operating Officer (COO)", "items": "San Francisco", "status": "48", "amount": "$120", "requestdate": "2010/03/11", "action": "$850,000" },

    { "id": 18, "name": "Winters", "roomnumber": "Accountant", "items": "Tokyo", "status": "63", "amount": "$120", "requestdate": "2011/07/25", "action": "$170,750" },

    { "id": 19, "name": "Cortez", "roomnumber": "Team Leader", "items": "San Francisco", "status": "22", "amount": "$120", "requestdate": "2008/10/26", "action": "$235,500" }

];

class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            sizePerPage: 10,
            productData: products
        }
    }

    render() {
        const columns = [{
            dataField: 'name',
            text: 'Name',
            sort: true
        }, {
            dataField: 'roomnumber',
            text: 'Room Number',
            sort: true
        }, {
            dataField: 'items',
            text: 'Items',
            sort: true
        },
        {
            dataField: 'amount',
            text: 'Amount',
            sort: true
        },
        {
            dataField: 'status',
            text: 'Status',
            sort: true
        },
        {
            dataField: 'requestdate',
            text: 'Request Date',
            sort: true
        },
        {
            dataField: 'action',
            text: 'Action',
            sort: true
        }];

        const defaultSorted = [{
            dataField: 'id',
            order: 'asc'
        }];

        const pageOptions = {
            sizePerPage: 10,
            totalSize: products.length, // replace later with size(customers),
            custom: true,
        }

        // Custom Pagination Toggle
        const sizePerPageList = [
            { text: '5', value: 5 },
            { text: '10', value: 10 },
            { text: '15', value: 15 },
            { text: '20', value: 20 },
            { text: '25', value: 25 },
            { text: 'All', value: (this.state.productData).length }];

        // Select All Button operation
        const selectRow = {
            mode: 'checkbox'
        }

        const { SearchBar } = Search;

        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Orders | EazyRooms - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <div className="container-fluid">
                        <Breadcrumbs title="Tables" breadcrumbItem="Orders" />

                        <Row>
                            <Col className="col-12">
                                <Card>
                                    <CardBody>
                                        <PaginationProvider
                                            pagination={paginationFactory(pageOptions)}
                                            keyField='id'
                                            columns={columns}
                                            data={this.state.productData}
                                        >
                                            {({ paginationProps, paginationTableProps }) => (
                                                <ToolkitProvider
                                                    keyField='id'
                                                    columns={columns}
                                                    data={this.state.productData}
                                                    search
                                                >
                                                    {toolkitProps => (
                                                        <React.Fragment>
                                                            <Row className="mb-2">
                                                                <Col md="4">
                                                                    <div className="search-box me-2 mb-2 d-inline-block">
                                                                        <div className="position-relative">
                                                                            <SearchBar
                                                                                {...toolkitProps.searchProps}
                                                                            />
                                                                            <i className="bx bx-search-alt search-icon" />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col xl="12">
                                                                    <div className="table-responsive">
                                                                        <BootstrapTable
                                                                            keyField={"id"}
                                                                            responsive
                                                                            bordered={false}
                                                                            striped={false}
                                                                            defaultSorted={defaultSorted}
                                                                            selectRow={selectRow}
                                                                            classes={
                                                                                "table align-middle table-nowrap"
                                                                            }
                                                                            headerWrapperClasses={"thead-light"}
                                                                            {...toolkitProps.baseProps}
                                                                            {...paginationTableProps}
                                                                        />

                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row className="align-items-md-center mt-30">
                                                                <Col className="inner-custom-pagination d-flex">
                                                                    <div className="d-inline">
                                                                        <SizePerPageDropdownStandalone
                                                                            {...paginationProps}
                                                                        />
                                                                    </div>
                                                                    <div className="text-md-right ms-auto">
                                                                        <PaginationListStandalone
                                                                            {...paginationProps}
                                                                        />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </React.Fragment>
                                                    )
                                                    }
                                                </ToolkitProvider>
                                            )
                                            }</PaginationProvider>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Orders