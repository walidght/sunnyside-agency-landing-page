import './Hero.css';
import arrowIcon from './images/icon-arrow-down.svg';

const Hero = () => {
    return (
        <section id="hero-container">
            <h1>WE ARE CREATIVES</h1>
            <img src={arrowIcon} alt="" />
        </section>
    );
};

export default Hero;
