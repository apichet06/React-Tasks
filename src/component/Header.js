import { Navbar, Container } from 'react-bootstrap';
// import Logo from '../images/Job-Transparent-Free-PNG.png'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { SiWorkplace } from "react-icons/si";
export default function Header(props) {
    const { isDarkMode, setIsDarkMode } = props

    const test = () => {
        setIsDarkMode(!isDarkMode);
    }

    const navbarColor = isDarkMode ? "dark" : "light";



    return (
        <Navbar bg={navbarColor} expand="lg" variant={navbarColor} fixed="top" className='navbar-with-shadow'>
            <Container>
                <Navbar.Brand href="#home">
                  <SiWorkplace/> Task Management
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        โหมด : <span className="icon" onClick={test}> {isDarkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
}

<header>
    <div className="logo">
        <span>Tak Management</span>
    </div>
    <div className="theme-container">
        <span>โหมดกลางคืน</span> 
    </div>
</header>
