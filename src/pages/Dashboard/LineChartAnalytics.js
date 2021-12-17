import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
//actions
import { getEarningChartsData } from "../../store/actions";

import ReactApexChart from "react-apexcharts";

class LineChartAnalytics extends Component {
  constructor(props) {
    super(props);

    this.data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Usage",
          data: [30, 40, 60, 20, 100, 140],
          fill: false,
          title: "Dataset",
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "#556ee6"
        }
      ]
    };

    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
        },
      ],
      options: {
        chart: {
          toolbar: "false",
          dropShadow: {
            enabled: !0,
            color: "#000",
            top: 18,
            left: 7,
            blur: 8,
            opacity: 0.2,
          },
        },
        dataLabels: {
          enabled: !1,
        },
        colors: ["#556ee6"],
        stroke: {
          curve: "smooth",
          width: 3,
        },
      },
      seletedMonth: "jan"
    };
  }


  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state });
    }
  }

  render() {
    const { seletedMonth } = this.state;

    const series = [
      {
        name: "Series 1"
      }
    ];
    return (
      <React.Fragment>
        <Card className="h-100">
          <CardBody>
            <div className="clearfix">
              <div className="float-end">
                <div className="input-group input-group-sm">
                  <select
                    value={seletedMonth}
                    onChange={(e) => {
                      this.setState({ ...this.state, seletedMonth: e.target.value });

                    }}
                    className="form-select form-select-sm">
                    <option value="jan">Jan</option>
                    <option value="dec">Dec</option>
                    <option value="nov">Nov</option>
                    <option value="oct">Oct</option>
                  </select>
                  <label className="input-group-text">Month</label>
                </div>
              </div>
              <h4 className="card-title mb-4">Earning</h4>
            </div>

            <Row>
              <Col lg="4">
                <div className="text-muted">
                  <div className="mb-4">
                    <p>This month</p>
                    <h4>$2453.35</h4>
                    <div>
                      <span className="badge badge-soft-success font-size-12 me-1">
                        {" "}
                        + 0.2%{" "}
                      </span>{" "}
                      From previous period
                    </div>
                  </div>

                  <div>
                    <Link
                      to="#"
                      className="btn btn-primary btn-sm"
                    >
                      View Details{" "}
                      <i className="mdi mdi-chevron-right ms-1"></i>
                    </Link>
                  </div>

                  <div className="mt-4">
                    <p className="mb-2">Last month</p>
                    <h5>$2281.04</h5>
                  </div>
                </div>
              </Col>

              <Col lg="8">
                <div id="line-chart" className="apex-charts" dir="ltr">
                  {/* <ReactApexChart
                    series={series}
                    options={this.state.options}
                    type="line"
                    height={320}
                    className="apex-charts"
                  /> */}

                  <Line data={this.data} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default LineChartAnalytics;