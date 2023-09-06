import React,{useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';
import HeaderCart from './Cart/HeaderCart';
import AuthContext from '../authCtx/auth-context';

const NavBar = (props) => {
  const ctx = useContext(AuthContext);
  const isLoggedIn=ctx.isLoggedIn;
  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // Remove underlines from links
  };
const history=useHistory();
if(!isLoggedIn){
  history.replace('/login');
}
  return (
    <Navbar bg='dark' variant='dark' className="fixed-top" style={{ zIndex: 1000 }}>
      <Navbar.Collapse>
        <Nav className="mx-auto">
          <Nav.Item className="mx-3"> {/* Use mx-3 to add margin */}
            <Nav.Link as={Link} to="/home" style={linkStyle}>
              Home
            </Nav.Link>
          </Nav.Item>
          {isLoggedIn &&  <Nav.Item className="mx-3">
           <Nav.Link as={Link} to="/products" style={linkStyle}>
              Store
            </Nav.Link>
          </Nav.Item>}
          <Nav.Item className="mx-3"> {/* Use mx-3 to add margin */}
            <Nav.Link as={Link} to="/about" style={linkStyle}>
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="mx-3"> {/* Use mx-3 to add margin */}
            <Nav.Link as={Link} to="/login" style={linkStyle}>
              Login
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
