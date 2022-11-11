import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from "../images/fs.svg";
import '../styles/HeaderNav.css';
export function HeaderNav() {
    return (
        <Navbar style={{ backgroundColor: '#0E1925' }} className='navigation'>
            <div className='navigationlogo'>
                <img src={logo} className="Logo"></img>
                <p style={{ color: 'white' }}>Home of all MMA fighter stats</p>
            </div>
            <Container>

                <Nav className="me-auto">

                    <ul className='navlinks'>
                        <li className='dashboard'> <Nav.Link href="/"></Nav.Link></li><br></br>
                        <li className='comp'> <Nav.Link href="comparison"></Nav.Link></li>
                        <br></br>
                        <li className='timeline'> <Nav.Link href="timeline"></Nav.Link></li>
                    </ul>
                </Nav>
            </Container>
        </Navbar >
    )

}