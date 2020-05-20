import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo1.png'
function PageHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="100"
          height="50"
          className="d-inline-block align-top"
        />{"  "}
        Mobile Mart
      </Navbar.Brand>
    </Navbar>
  );
}

export default PageHeader;