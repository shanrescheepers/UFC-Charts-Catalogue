import { Navbar, Container, Nav } from 'react-bootstrap'

export function HeaderNav() {
    return (
        <Navbar bg="dark" variant="dark" className='navigation'>

            <Container>

                <Nav className="me-auto">
                    <div className='FightSite'></div>
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