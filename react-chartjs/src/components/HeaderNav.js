import { Navbar, Container, Nav } from 'react-bootstrap'

export function HeaderNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Fight Site</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="comparison">Comparison</Nav.Link>
                    <Nav.Link href="timeline">Timeline</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}