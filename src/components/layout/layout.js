import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Layout = (props) => {

    return (
        <div>
            <Navbar bg="dark" className="shadow">
                <Navbar.Brand style={{ color: "yellow" }}>
                    <span className="fa fa-shopping-bag mx-3 logo"></span>
                    {'Z-Bag'}
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link style={{ color: "yellow" }}>Home</Nav.Link>
                    <Nav.Link style={{ color: "yellow" }} >Login</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <div>
                {props.children}
            </div>
        </div>


    )
}

export default Layout