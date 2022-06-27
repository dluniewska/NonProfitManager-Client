import React from 'react'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>NonProfitManager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Transporty">
                <NavDropdown.Item href="#">Lista</NavDropdown.Item>
                <NavDropdown.Item href="#">Dodaj transport</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Zgłoszenia Użytkowników 
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ankiety">
                <NavDropdown.Item href="#">Lista</NavDropdown.Item>
                <NavDropdown.Item href="#">Dodaj ankietę</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Ankiety Użytkowników 
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate("/addAnimal")}>Dodaj Zwierzęta</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Ustawienia</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header