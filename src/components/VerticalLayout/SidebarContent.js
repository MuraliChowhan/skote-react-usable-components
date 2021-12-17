import PropTypes from "prop-types";
import React, { Component } from "react";

//Simple bar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.refDiv = React.createRef();
  }

  componentDidMount() {
    this.initMenu();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  // componentDidUpdate() {}

  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop;
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300;
          }
        }
      }
    }, 300);
  };

  activateParentDropdown = item => {
    item.classList.add("active");
    const parent = item.parentElement;

    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      this.scrollElement(item);
      return false;
    }
    this.scrollElement(item);
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <SimpleBar className="h-100" ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">{this.props.t("Menu")}</li>
              <li>
                <Link to="/#">
                  {/* <i className="bx bx-home-circle" /> */}
                  <img src="./images/dashboard-c.png" width="30" height="30" />
                  <span>{this.props.t("Dashboards")}</span>
                </Link>
              </li>
              <li>
                <Link to="/leads">
                  {/* <i className="bx bx-layer" /> */}
                  <img src="./images/leads-c.png" width="30" height="30" />
                  <span>{this.props.t("Leads")}</span>
                </Link>
              </li>
              <li>
                <Link to="/client">
                  {/* <i className="bx bx-play-circle" /> */}
                  <img src="./images/customer-c.png" width="30" height="30" />
                  <span>{this.props.t("Clients")}</span>
                </Link>
              </li>
              <li>
                <Link to="/appointments">
                  {/* <i className="bx bx-hide" /> */}
                  <img src="./images/completed-appintment-c.png" width="30" height="30" />
                  <span>{this.props.t("Appointments")}</span>
                </Link>
              </li>
              <li>
                <Link to="/chat">
                  <img src="./images/chat-c.png" width="30" height="30" />
                  {/* <i className="bx bx-checkbox-square" /> */}
                  <span>{this.props.t("Chat")}</span>
                </Link>
              </li>
              <li>
                <Link to="/requests">
                  <img src="./images/add-task-c.png" width="30" height="30" />
                  {/* <i className="bx bx-mail-send" /> */}
                  <span>{this.props.t("Form builder")}</span>
                </Link>
              </li>
              <li>
                <Link to="/contacts">
                  {/* <i className="bx bx-wifi-0" /> */}
                  <img src="./images/contact-c.png" width="30" height="30" />
                  <span>{this.props.t("Contacts")}</span>
                </Link>
              </li>
              <li>
                <Link to="/push-notification">
                  {/* <i className="bx bx-notification" /> */}
                  <img src="./images/send-mail-c.png" width="30" height="30" />
                  <span>{this.props.t("Push")}</span>
                </Link>
              </li>
              <li>
                <Link to="/finance">
                  <img src="./images/invoice-c.png" width="30" height="30" />
                  {/* <i className="bx bx-cog bxn" /> */}
                  <span>{this.props.t("Finance")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    );
  }
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
  type: PropTypes.string,
};

export default withRouter(withTranslation()(SidebarContent));
