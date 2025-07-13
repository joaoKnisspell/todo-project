import logo from "../assets/Logo.png"
import Container from "../components/container"

export default function Header(){
    return <Container as="header">
        <img className="h-12" alt="ToDo List Logo" src={logo} />
    </Container>
}