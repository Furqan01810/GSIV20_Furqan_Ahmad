import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Error404 extends Component {
  render() {
    return (
      <Container fluid>
        <h1>Error 404 - Page doesn't exist</h1>{" "}
        <Link to="/">Go to homepage</Link>
      </Container>
    );
  }
}

export default Error404;
