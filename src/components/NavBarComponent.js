

import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function NavBarComponent() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/cart">Cart</Nav.Link>
        </Nav>
        {/* <Router>
            <Routes>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Router> */}
    </Container>
  </Navbar>
  )
}

export default NavBarComponent;