import './Hero.css';
import arrowIcon from './images/icon-arrow-down.svg';

const Hero = ({ showMobileNav }) => {
    return (
        <section id="hero-container">
            {showMobileNav && (
                <div className="mobile-nav-container">
                    <a href="#" className="nav-mobile">
                        About
                    </a>
                    <a href="#" className="nav-mobile">
                        Services
                    </a>
                    <a href="#" className="nav-mobile">
                        Projects
                    </a>
                    <a
                        href="#"
                        id="nav-contact-button-mobile"
                        className="nav-mobile"
                    >
                        CONTACT
                    </a>
                </div>
            )}
            <h1>WE ARE CREATIVES</h1>
            <img src={arrowIcon} alt="" />
        </section>
    );
};

export default Hero;
