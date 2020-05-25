import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "../Search/SearchBar";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import { Link } from "react-bootstrap-icons";
import { logoutuser } from "../../actions/loginAction";
import { withRouter } from "react-router-dom";
import { toastr } from "react-redux-toastr";


class PageHeader extends Component{
  handleOnClickLogoutUser = () => {
    this.props.logoutUser()
    toastr.message('Logout Successfully')
    this.props.history.push("/")
  }
  render() {
    let isUserLoggedIn = this.props.isLoggedIn ? (
      <Nav>
      <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => this.handleOnClickLogoutUser()} style={{color: 'black'}} >Logout</NavDropdown.Item>
      </NavDropdown> 
      <Navbar.Text>
        Signed In: {this.props.user.name}
        </Navbar.Text>
      </Nav>
    ): (
      <Nav.Link href="/login"> Login </Nav.Link>
    )
    let pathName = window.location.pathname
    let navBar =  pathName !== "/login" ? (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"> Mobile Mart</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav>
        <SearchBar />
        <Nav>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/cart">
            <FontAwesomeIcon icon={faCartPlus} size="1x" />
          </Nav.Link>
            {isUserLoggedIn}
        </Nav>
      </Navbar>
    ) : (
      <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"> Mobile Mart</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav>
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          <h4> Login</h4>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>

    )
    return (
      <div>
        {navBar}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.loginReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutuser())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageHeader));
