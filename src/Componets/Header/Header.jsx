import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/">Home</Link>
        <Link to="/studentData">Add Data</Link>
        <Link to="/viewData">Viwe Data</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header