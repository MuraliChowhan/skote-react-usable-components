import PropTypes from 'prop-types';
import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";

// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation";

// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

// actions
import { editProfile, resetProfileFlag } from "../../store/actions";
import Welcome from './Welcome';
import ProfileCards from './ProfileCards';
import ChangePassword from './ChangePassword';
import PersonelInfo from './PersonelInfo';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", name: "", idx: 1 }

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
  }

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.editProfile(values)
  }

  componentDidMount() {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        this.setState({
          name: obj.displayName,
          email: obj.email,
          idx: obj.uid,
        })
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        this.setState({ name: obj.username, email: obj.email, idx: obj.uid })
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props !== prevProps) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        this.setState({
          name: obj.displayName,
          email: obj.email,
          idx: obj.uid,
        })
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        this.setState({ name: obj.username, email: obj.email, idx: obj.uid })
      }
      setTimeout(() => {
        this.props.resetProfileFlag();
      }, 3000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumb title="EazyRooms" breadcrumbItem="Profile" />

            <Row>
              <Col lg="4">

                <Welcome />

                <ChangePassword />
              </Col>
              <Col lg="8">
                <ProfileCards />
                <PersonelInfo />
                {/* 
                <ProfileCards /> */}
              </Col>
            </Row>

          </Container>
        </div>
      </React.Fragment>
    )
  }
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
  resetProfileFlag: PropTypes.func
}

const mapStateToProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStateToProps, { editProfile, resetProfileFlag })(UserProfile)
)
