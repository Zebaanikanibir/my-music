import React from 'react';
import {Nav, Navbar, Container, Spinner} from 'react-bootstrap';
import image from '../../../Images/image 52.png';
import image1 from '../../../Images/Vector (Stroke).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
const HeadNavbar = () => {
    return (
        
        <div>
            <Navbar id="navbar" expand="lg" sticky="top">
                <Navbar.Brand href="#home" id="brand">
                    <img src={image} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav className="ms-auto">
                        <a className="nav-a mr-5 ms-5 text-white" href="/"><FontAwesomeIcon icon={faSearch} /></a>
                        <a className="nav-a mr-5 ms-5 text-white" href="/">Search</a>
                        <a className="nav-a mr-5 ms-5 text-white" href="/login">Help</a>
                        <a className="nav-a mr-5 ms-5 text-white" href="/dashboard">Account</a>
                        <a className="nav-a mr-5 ms-5 text-white" href="/dashboard"><img src={image1} alt="" /></a>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
   
};

export default HeadNavbar;