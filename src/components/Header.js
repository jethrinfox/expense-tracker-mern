import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const Header = () => {

    const { isLoggedIn, logOut } = useContext(GlobalContext)

    return (
        <Navbar id="navbar" expand="lg" bg="light" >
            <Container className="container">
                <Navbar.Brand as={Link} to="/">Expense Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {isLoggedIn && <Nav.Link as={Link} to="/">Home</Nav.Link>}
                        {isLoggedIn && <Nav.Link onClick={() => logOut()}>LogOut</Nav.Link>}
                        {!isLoggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {!isLoggedIn && <Nav.Link as={Link} to="/signup">Sign-up</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
