import React from "react";
import {  useLocation } from 'react-router-dom'

import {  Container, Form, FormGroup, InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup } from "reactstrap";

function Header() {
    let location = useLocation();

    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body" style={{display: 'flex'}}>
            <div className="text-white font-weight-bold">
                {location.pathname.substr(1).charAt(0).toUpperCase() + location.pathname.substr(1).slice(1)}
            </div>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-auto justify-content-end">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search..." type="text" />
                </InputGroup>
              </FormGroup>
            </Form> 
            </div>
          </Container>
        </div>
      </>
    );
  }


export default Header;
