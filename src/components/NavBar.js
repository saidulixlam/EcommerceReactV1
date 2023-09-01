import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderCart from './Cart/HeaderCart';

const NavBar = (props) => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // Remove underlines from links
  };

  return (
    <Navbar bg='dark' variant='dark' className="fixed-top" style={{ zIndex: 1000 }}>
      <Navbar.Collapse>
        <Nav className="mx-auto">
          <Nav.Item className="mx-3"> {/* Use mx-3 to add margin */}
            <Nav.Link as={Link} to="/" style={linkStyle}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3"> {/* Use mx-3 to add margin */}
            <Nav.Link as={Link} to="/store" style={linkStyle}>
              Store
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3"> {/* Use mx-3 to add margin */}
            <Nav.Link as={Link} to="/about" style={linkStyle}>
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3"> {/* Use mx-3 to add margin */}
            <Nav.Link as={Link} to="/contact" style={linkStyle}>
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <HeaderCart onClick={props.onClick} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
