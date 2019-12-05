import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import "./layout.css";
const Layout = props => {
  return (
    <div>
      <Navbar bg="dark" className="shadow">
        <Navbar.Brand style={{ color: "yellow" }}>
          <span className="fa fa-shopping-bag mx-3 logo"></span>
          {"Z-Bag"}
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <div id="trans"></div>
          {props.auth === true ? (
            <>
              <Nav.Link style={{ color: "yellow" }}>Username</Nav.Link>
              <Nav.Link style={{ color: "yellow" }}>
                <Link to="/cart">
                  <span className="fa fa-shopping-cart">
                    <span className="cartCount">3</span>
                  </span>
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "lightgray" }}>
                <span className="fa fa-sign-out"></span>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link style={{ color: "yellow" }} href="/login">
                Login
              </Nav.Link>
              <Nav.Link style={{ color: "yellow" }}>
                <Link to="/cart">
                  <span className="fa fa-shopping-cart">
                    <span className="cartCount">12</span>
                  </span>
                </Link>
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
      <div>{props.children}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
