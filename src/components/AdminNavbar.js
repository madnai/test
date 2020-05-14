import React, { useState } from "react";

import {
  Navbar,
  Nav,
  Container,
  Media,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from "reactstrap";
import profile from '../assets/img/theme/team-4-800x800.jpg';

function AdminNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
          <NavbarBrand href="/" className="text-white">AVA</NavbarBrand>    
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem> 
                <NavLink href="/cryptocurrency">Cryptocurrency</NavLink>
                </NavItem>
                <NavItem> 
                <NavLink href="/analytics" class="active-link">Analytics</NavLink>
                </NavItem>
            </Nav>   
            <Media className="align-items-center">
                    <Media className="ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm text-white font-weight-bold" style={{paddingRight: '10px'}}>
                        John Doe
                        </span>
                    </Media>
                    <span className="avatar avatar-sm rounded-circle">
                        <img
                        alt="..."
                        src={profile}
                        />
                    </span>
                </Media>    
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }


export default AdminNavbar;
