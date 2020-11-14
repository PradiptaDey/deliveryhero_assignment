import React from "react";
import { Nav, Navbar, Tab, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";

function App() {

  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar>
      <Tab.Container id="left-tabs-example">
        <Row>
          <Col sm={12}>
            <Tab.Content>
              <Routes />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;