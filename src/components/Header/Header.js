import React,{useState} from 'react'
import './Header.css'
import {Nav, Container, Navbar} from 'react-bootstrap'

function Header() {

  const moveScroll = (pos) => {
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    });
  }

    return (
        <Navbar className="navbar" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">FEstudy</Navbar.Brand>
            <Nav className="me-auto navItem">
              <Nav.Link onClick={()=>{moveScroll(0)}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{moveScroll(710)}}>Profile</Nav.Link>
              <Nav.Link onClick={()=>{moveScroll(1440)}}>Skills</Nav.Link>
              <Nav.Link onClick={()=>{moveScroll(2160)}}>Project</Nav.Link>
              <Nav.Link onClick={()=>{moveScroll(2480)}}>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
}

export default Header
