import './NavBar.css';

const NavBar = ({ logo }) => {
    return (
        <nav>
            <img src={logo} id="logo" alt="" />
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#" id="nav-contact-button">
                CONTACT
            </a>
        </nav>
    );
};

export default NavBar;
