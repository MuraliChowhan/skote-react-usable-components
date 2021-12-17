import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import classnames from "classnames"

class Infrastructure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "1",
            activeTab1: "5",
            activeTab2: "9",
            activeTab3: "13",
            verticalActiveTab: "1",
            verticalActiveTabWithIcon: "1",
            customActiveTab: "1",
            customIconActiveTab: "1",
            activeTabJustify: "5",
            col1: true,
            col2: false,
            col3: false,
            col5: true,
            col6: true,
            col7: true,
            col8: true,
            col9: true,
            col10: false,
            col11: false,
        }
        this.toggle = this.toggle.bind(this)
        this.toggle1 = this.toggle1.bind(this)

        this.t_col1 = this.t_col1.bind(this)
        this.t_col2 = this.t_col2.bind(this)
        this.t_col3 = this.t_col3.bind(this)
        this.t_col5 = this.t_col5.bind(this)
        this.t_col6 = this.t_col6.bind(this)
        this.t_col7 = this.t_col7.bind(this)
        this.t_col8 = this.t_col8.bind(this)
        this.t_col9 = this.t_col9.bind(this)
        this.t_col10 = this.t_col10.bind(this)
        this.t_col11 = this.t_col11.bind(this)

        this.toggle2 = this.toggle2.bind(this)
        this.toggle3 = this.toggle3.bind(this)

        this.toggleVertical = this.toggleVertical.bind(this)
        this.toggleVerticalIcon = this.toggleVerticalIcon.bind(this)
        this.toggleCustom = this.toggleCustom.bind(this)
        this.toggleIconCustom = this.toggleIconCustom.bind(this)
    }

    t_col1() {
        this.setState({
            col1: !this.state.col1,
            col2: false,
            col3: false
        })
    }

    t_col2() {
        this.setState({
            col1: false,
            col2: !this.state.col2,
            col3: false
        })
    }

    t_col3() {
        this.setState({
            col1: false,
            col2: false,
            col3: !this.state.col3
        })
    }

    t_col5() {
        this.setState({ col5: !this.state.col5 })
    }

    t_col6() {
        this.setState({ col6: !this.state.col6 })
    }

    t_col7() {
        this.setState({ col7: !this.state.col7 })
    }

    t_col8() {
        this.setState({
            col6: !this.state.col6,
            col7: !this.state.col7
        })
    }

    t_col9() {
        this.setState({
            col9: !this.state.col9,
            col10: false,
            col11: false
        })
    }

    t_col10() {
        this.setState({
            col10: !this.state.col10,
            col9: false,
            col11: false
        })
    }

    t_col11() {
        this.setState({
            col11: !this.state.col11,
            col9: false,
            col10: false
        })
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            })
        }
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab,
            })
        }
    }

    toggle2(tab) {
        if (this.state.activeTab2 !== tab) {
            this.setState({
                activeTab2: tab,
            })
        }
    }

    toggle3(tab) {
        if (this.state.activeTab3 !== tab) {
            this.setState({
                activeTab3: tab,
            })
        }
    }

    toggleVertical(tab) {
        if (this.state.verticalActiveTab !== tab) {
            this.setState({
                verticalActiveTab: tab,
            })
        }
    }

    toggleVerticalIcon(tab) {
        if (this.state.verticalActiveTabWithIcon !== tab) {
            this.setState({
                verticalActiveTabWithIcon: tab,
            })
        }
    }

    toggleCustom(tab) {
        if (this.state.customActiveTab !== tab) {
            this.setState({
                customActiveTab: tab,
            })
        }
    }

    toggleIconCustom(tab) {
        if (this.state.customIconActiveTab !== tab) {
            this.setState({
                customIconActiveTab: tab,
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Infrastructure</title>
                    </MetaTags>
                    <Container fluid={true}>
                        <Breadcrumbs
                            title="Infrastructures"
                            breadcrumbItem="Infrastructure"
                        />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col md="3">
                                                <Nav pills className="flex-column">
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                'mb-2': true,
                                                                active: this.state.verticalActiveTab === "1"
                                                            })}
                                                            onClick={() => {
                                                                this.toggleVertical("1")
                                                            }}
                                                        >Manage Blocks
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                'mb-2': true,
                                                                active: this.state.verticalActiveTab === "2"
                                                            })}
                                                            onClick={() => {
                                                                this.toggleVertical("2")
                                                            }}
                                                        >
                                                            Manage Floors
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                'mb-2': true,
                                                                active: this.state.verticalActiveTab === "3",
                                                            })}
                                                            onClick={() => {
                                                                this.toggleVertical("3")
                                                            }}
                                                        >
                                                            Manage rooms with checkin and checkout
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                active: this.state.verticalActiveTab === "4"
                                                            })}
                                                            onClick={() => {
                                                                this.toggleVertical("4")
                                                            }}
                                                        >
                                                            Manage Rooms
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                active: this.state.verticalActiveTab === "5"
                                                            })}
                                                            onClick={() => {
                                                                this.toggleVertical("5")
                                                            }}
                                                        >
                                                            Manage Amenities
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </Col>
                                            <Col md="9">
                                                <TabContent activeTab={this.state.verticalActiveTab} className="text-muted mt-4 mt-md-0">
                                                    <TabPane tabId="1">
                                                        <p>
                                                            Raw denim you probably haven&apos;t heard of them jean shorts Austin.
                                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                            butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                            qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                            iphone. Seitan aliquip quis cardigan.
                                                        </p>
                                                        <p>Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                            qui irure terry richardson ex squid.</p>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <p>
                                                            Food truck fixie locavore, accusamus mcsweeney&apos;s marfa nulla
                                                            single-origin coffee squid. Exercitation +1 labore velit, blog
                                                            sartorial PBR leggings next level wes anderson artisan four loko
                                                            farm-to-table craft beer twee. Qui photo booth letterpress,
                                                            commodo enim craft beer mlkshk.
                                                        </p>
                                                        <p className="mb-0"> Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna 8-bit</p>

                                                    </TabPane>
                                                    <TabPane tabId="3">
                                                        <p>
                                                            Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                            sold out mcsweeney&apos;s organic lomo retro fanny pack lo-fi
                                                            farm-to-table readymade. Messenger bag gentrify pitchfork
                                                            tattooed craft beer, iphone skateboard locavore carles etsy
                                                            salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                            Leggings gentrify squid 8-bit cred.
                                                        </p>
                                                        <p className="mb-0">DIY synth PBR banksy irony.
                                                            Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                            mi whatever gluten-free.</p>
                                                    </TabPane>

                                                    <TabPane tabId="4">
                                                        <p>
                                                            Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                            art party before they sold out master cleanse gluten-free squid
                                                            scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                            art party locavore wolf cliche high life echo park Austin. Cred
                                                            vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                            farm-to-table.
                                                        </p>
                                                        <p className="mb-0">Fanny pack portland seitan DIY,
                                                            art party locavore wolf cliche high life echo park Austin. Cred
                                                            vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                            farm-to-table.
                                                        </p>
                                                    </TabPane>
                                                </TabContent>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>


                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Infrastructure
