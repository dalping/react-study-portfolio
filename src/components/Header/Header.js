import React,{useState} from 'react'
import './Header.css'
import {Nav, Container, Navbar} from 'react-bootstrap'

function Header(props) {

  const moveScroll = (pos) => {
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    });
  }

  const pageHandler = (page) => {
    props.handleScroll(page)
  }

    return (
        <Navbar className="navbar" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav className="me-auto navItem">
              <Nav.Link onClick={()=>{pageHandler("MAIN")}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{pageHandler("PROFILE")}}>Profile</Nav.Link>
              <Nav.Link onClick={()=>{pageHandler("SKILL")}}>Skills</Nav.Link>
              <Nav.Link onClick={()=>{pageHandler("PROJECT")}}>Project</Nav.Link>
              <Nav.Link onClick={()=>{pageHandler("CONTACT")}}>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
}

export default Header
