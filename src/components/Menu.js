import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Menu() {

  let cartCount = useSelector(state => state.cart.value);


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">FAKE STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Electr</Nav.Link> */}
            <Link className='nav-link' to='/'>HOME</Link>
            <Link className='nav-link' to='/fakestore-electronics/electronics'>Electronic</Link>
            <Link className='nav-link' to='/fakestore-electronics/jewelery'>JEWELERY</Link>
            <Link className='nav-link' to="/fakestore-electronics/men's clothing">MENS</Link>
            <Link className='nav-link' to="/fakestore-electronics/women's clothing">WOMENS</Link>
            <Link className='nav-link' to='/fakestore-search'>SEARCH</Link>
            <Link className='nav-link' to='/fakestore-filter'>FILTER</Link>
            <Link className='nav-link' to='/cart'>CART({cartCount.length})</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;