import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router';

const Header = () => {
  return (
    <div style={{marginLeft: '10%', marginRight:'10%'}}>
    <Navbar bg="primary" expand="lg" style={{borderRadius: 3}}>
      <Container style={{paddingLeft:'0.5%'}}>
          <Nav className="me-auto">
            <Nav.Link href="/professional"  style={{color:'white'}}>Professional</Nav.Link>
            <Nav.Link href="/professional-type"  style={{color:'white'}}>Professional Type</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  );
}

export default Header;