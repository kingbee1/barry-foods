import React from 'react'
import logo from '../images/logo.png'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
  return (
   
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <img src={logo} alt="logo" /> */}
        <Navbar.Brand href="#">Mama's Palace</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lunch</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Dinner</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                VIP Date Package
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Login</Button>
            <Button variant="outline-success">Register</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header


{/* <nav className='Navbar'>
      <div>
        <div className='log flex justify'>
          <img src={logo} alt="logo" />
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Menu</p>

          <p>Search</p>
            <button className='login-btn'>Login</button>
            <button className='reg-btn'>Register</button>
        </div>
      </div>
  
    </nav>
  */}