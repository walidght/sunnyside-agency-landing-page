import './NavBar.css';
import mobileNavButton from './images/icon-hamburger.svg';

const NavBar = ({ logo, setShowMobileNav }) => {
    return (
        <nav>
            <img src={logo} id="logo" alt="" />
            <a href="#" className="nav-pc">
                About
            </a>
            <a href="#" className="nav-pc">
                Services
            </a>
            <a href="#" className="nav-pc">
                Projects
            </a>
            <a href="#" id="nav-contact-button" className="nav-pc">
                CONTACT
            </a>

            <button
                className="nav-mobile"
                onClick={() => {
                    setShowMobileNav((prevStat) => !prevStat);
                }}
            >
                <img src={mobileNavButton} alt="" />
            </button>
        </nav>
    );
};

export default NavBar;
