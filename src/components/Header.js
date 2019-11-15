import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Search } from "./";

const Header = props => {
  const { search, location, text } = props;

  const renderSearch = () => {
    return (
      <>
        <Search search={search} />
      </>
    );
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand style={{ color: "white" }}>{text}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link>
            <Link to="/" style={{ color: "#FFF" }}>
              MOVIES
            </Link>
          </Nav.Link> */}
        </Nav>
        {location.pathname === "/" ? renderSearch() : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
