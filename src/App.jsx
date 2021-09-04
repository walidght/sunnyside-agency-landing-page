import logo from './images/logo.svg';
import Hero from './Hero';
import NavBar from './NavBar';
import Services from './Services';
import Footer from './Footer';
import Gallery from './Gallery';
import Cards from './Cards';
import Testimonials from './Testimonials';
import './App.css';
import { useState } from 'react';

function App() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <div className="App">
            <nav>
                <NavBar logo={logo} setShowMobileNav={setShowMobileNav} />
            </nav>
            <main>
                <Hero showMobileNav={showMobileNav} />
                <Services />
                <Cards />
                <Testimonials />
                <Gallery />
            </main>
            <footer>
                <Footer logo={logo} />
            </footer>
        </div>
    );
}

export default App;
