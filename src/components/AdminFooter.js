import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <hr />
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="2">
            <div className="copyright text-center text-xl-left text-muted">
              <b> © AVA{" "}
                2019
              </b>
            </div>
          </Col>

          <Col xl="9">
            <Nav className="nav-footer justify-content-center justify-content-xl-start">
              <NavItem>
                <NavLink
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Legal Issues
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Updates
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xl="1">
            <div className="justify-content-xl-end text-center ">
            <FacebookIcon />
            <TwitterIcon />
            </div>
            
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
