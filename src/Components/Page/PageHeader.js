import React from "react";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Search from '../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


function PageHeader() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"> Mobile Mart</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Search />
      <Nav>
        <Nav.Link href="/cart">My Cart</Nav.Link>
        <Nav.Link href="/cart">
          <FontAwesomeIcon icon={faCartPlus} size="1x" /> 
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default PageHeader;
