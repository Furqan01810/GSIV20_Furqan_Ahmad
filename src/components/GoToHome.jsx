import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class GoToHome extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"> ← Go to homepage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    );
  }
}

export default GoToHome;
