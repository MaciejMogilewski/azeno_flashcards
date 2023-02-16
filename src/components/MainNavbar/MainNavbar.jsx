import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import useLogout from "../../hooks/useLogout";

function MainNavbar(props) {
   const logout = useLogout();

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#">Azeno Flashcards</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to='/'><Nav.Link>Decks</Nav.Link></LinkContainer>
                    <LinkContainer to='/register'><Nav.Link>Register</Nav.Link></LinkContainer>
                    <LinkContainer to='/login'><Nav.Link>Login</Nav.Link></LinkContainer>
                    <LinkContainer to='/flashcards'><Nav.Link>Flashcards</Nav.Link></LinkContainer>
                    <LinkContainer to='/require'><Nav.Link>Require</Nav.Link></LinkContainer>

                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;