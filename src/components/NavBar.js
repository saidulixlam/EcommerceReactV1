import { Nav, Container, Navbar } from 'react-bootstrap';
import Cart from './Cart/Cart';
const linkStyle = {
    color: 'white', // Set the font color to white
};

const NavBar = () => {
    return (
        <Navbar bg='dark' variant='dark' className="fixed-top" style={{ zIndex: 1000 }}>
            <Container>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <Nav>
                        <Nav.Link href="#home" style={linkStyle}>Home</Nav.Link>
                        <Nav.Link href="#store" style={linkStyle}>Store</Nav.Link>
                        <Nav.Link href="#about" style={linkStyle}>About</Nav.Link>
                    </Nav>
                    <div className="ml-auto">
                        <Cart />
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavBar;