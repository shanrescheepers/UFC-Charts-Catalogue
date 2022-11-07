import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from "../images/fs.svg";
export function HeaderNav() {
    return (
        <Navbar bg="dark" variant="dark" className='navigation'>

            <Container>

                <Nav className="me-auto">
                    <img src={logo} className="Logo"></img>
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