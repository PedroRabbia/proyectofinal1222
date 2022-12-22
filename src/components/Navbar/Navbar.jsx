import './navbar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from "react-router-bootstrap";
import Logo from '../../assets/logo_batuk.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComp = () => {
    return(
        <Navbar className='navbar-container' expand='lg'>
            <Container>
                <LinkContainer to='/' className='logo-container'>
                    <Navbar.Brand><img src={Logo} alt='Logo' className='logo' /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav' className='navbar-items navbar-collapse text-uppercase'>
                    <Nav>
                        <LinkContainer to='/categoria/woman'>
                            <Nav.Link className='navbar-link'>Woman</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/categoria/man'>
                            <Nav.Link className='navbar-link'>Man</Nav.Link>
                        </LinkContainer>
                        <Nav.Link className='navbar-link'>Huoky</Nav.Link>
                        <LinkContainer to='/cart' >
                            <div className='cart-container'>
                                <CartWidget />
                            </div>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}