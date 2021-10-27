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

  const handleScroll = (scrollRef) => {
    console.log(scrollRef.current)
    scrollRef.current[5].scrollIntoView({behavior:'smooth'});
  }

    return (
        <Navbar className="navbar" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav className="me-auto navItem">
              <Nav.Link onClick={()=>{handleScroll(0)}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{handleScroll(1)}}>Profile</Nav.Link>
              <Nav.Link onClick={()=>{handleScroll(2)}}>Skills</Nav.Link>
              <Nav.Link onClick={()=>{handleScroll(3)}}>Project</Nav.Link>
              <Nav.Link onClick={()=>{handleScroll(4)}}>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
}

export default Header
