import { Navbar, Container, Nav } from 'react-bootstrap'
import '../styles/HeaderNav.css'

export function HeaderNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="flex-column">

                    <ul>
                        <li><Nav.Link href="/">Dashboard</Nav.Link></li>
                        <li> <Nav.Link href="comparison">Comparison</Nav.Link></li>
                        <li> <Nav.Link href="timeline">Timeline</Nav.Link></li>
                    </ul>

                </Nav>
            </Container>
        </Navbar>
    )
    //     <Navbar bg="dark" variant="dark">
    //         <Container>
    //             <Navbar.Brand>Fight Site</Navbar.Brand>
    //             <Nav className="me-auto">
    //                 <Nav.Link href="/">Dashboard</Nav.Link>
    //                 <Nav.Link href="comparison">Comparison</Nav.Link>
    //                 <Nav.Link href="timeline">Timeline</Nav.Link>
    //             </Nav>
    //         </Container>
    //     </Navbar>
    // )

}