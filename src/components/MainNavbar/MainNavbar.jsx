import {Container, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


function MainNavbar(props) {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#">Azeno Flashcards</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to='/'><Nav.Link>Decks</Nav.Link></LinkContainer>
                    <Nav.Link href="#features">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;