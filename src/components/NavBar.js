import React, { useContext,useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import HeaderCart from './Cart/HeaderCart';
import AuthContext from '../authCtx/auth-context';

const NavBar = (props) => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const ctx = useContext(AuthContext);
  const isLoggedIn = ctx.isLoggedIn;
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  const history = useHistory();

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const handleNavItemClick = () => {
    // Close the Navbar when a link is clicked
    setIsNavbarExpanded(false);
  };
  
  if (!isLoggedIn) {
    history.replace('/login');
  }

  const logoutHandler = () => {
    ctx.logout();
    localStorage.removeItem('token');
    // setIsNavbarExpanded(false);
  };

  return (
    <React.Fragment>
      <Navbar expanded={isNavbarExpanded}
        bg="dark" variant="dark" expand="lg" className="fixed-top " style={{ zIndex: 1000 }} collapseOnSelect>
        <Container fluid>
          <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
              <Nav.Item className="mx-5">
                <Nav.Link as={Link} to="/home" style={linkStyle} onClick={handleNavItemClick}>
                  Home
                </Nav.Link>
              </Nav.Item>
              {isLoggedIn && (
                <Nav.Item className="mx-5">
                  <Nav.Link as={Link} to="/products" style={linkStyle} onClick={handleNavItemClick}>
                    Store
                  </Nav.Link>
                </Nav.Item>
              )}
              <Nav.Item className="mx-5">
                <Nav.Link as={Link} to="/about" style={linkStyle} onClick={handleNavItemClick}>
                  About
                </Nav.Link>
              </Nav.Item>

              {isLoggedIn && (
                <Nav.Item className="mx-5">
                   <Nav.Link as={Link} to="/add" style={linkStyle} onClick={handleNavItemClick}>
                    Add
                  </Nav.Link>
                </Nav.Item>
              )}
              {!isLoggedIn && (
                <Nav.Item className="mx-5">
                  <Nav.Link as={Link} to="/login" style={linkStyle} onClick={handleNavItemClick}>
                    Login
                  </Nav.Link>
                </Nav.Item>
              )}
              {isLoggedIn && (
                <Nav.Item className="mx-5">
                  <Nav.Link onClick={logoutHandler} style={linkStyle}>
                    Logout
                  </Nav.Link>
                </Nav.Item>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="position-fixed top-0 end-0 m-1" style={{ zIndex: 1000 }}>
        <HeaderCart onClick={props.onClick} />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
