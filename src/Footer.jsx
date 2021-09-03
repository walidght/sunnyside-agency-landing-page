import './Footer.css';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as IconFacebook } from './images/icon-facebook.svg';
import { ReactComponent as IconInstagram } from './images/icon-instagram.svg';
import { ReactComponent as IconPinterest } from './images/icon-pinterest.svg';
import { ReactComponent as IconTwitter } from './images/icon-twitter.svg';

const Footer = ({ logo }) => {
    return (
        <section className="footer-container">
            <Logo id="footer-logo" />
            <div id="footer-links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
            <div id="footer-socials">
                <IconFacebook className="footer-icon" />
                <IconInstagram className="footer-icon" />
                <IconTwitter className="footer-icon" />
                <IconPinterest className="footer-icon" />
            </div>
        </section>
    );
};

export default Footer;
