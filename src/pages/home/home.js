import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './home.css'


const Home = () => {


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

            <div className="text-center" style={{ color: "white" }}>
                <h2 className="slogan">Secure the Bag, at the Lowest Cost</h2>
                <p className="subtext mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
            <div className="text-center mt-4">
                <button className="btn signUpBtn">
                    Join now
                </button>
            </div>

            <div className="socials">
                <span className="fa fa-facebook-square mx-3"></span>
                <span className="fa fa-twitter-square mx-3"></span>
                <span className="fa fa-instagram mx-3"></span>
            </div>
        </div>
    )
}

export default Home