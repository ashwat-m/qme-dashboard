import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #00ADD2; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFF;
    &:hover { color: black; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #FFF;
    &:hover { color: black; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">QMe Ads: Influencer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Campaigns</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">Browse Database</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
