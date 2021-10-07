import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/view">
                    Resume Builder Application
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}