import milkbottles from './images/desktop/image-gallery-milkbottles.jpg';
import orange from './images/desktop/image-gallery-orange.jpg';
import cone from './images/desktop/image-gallery-cone.jpg';
import sugarcubes from './images/desktop/image-gallery-sugarcubes.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery-container">
            <div
                className="gallery-image"
                style={{
                    backgroundImage: `url(${milkbottles})`,
                }}
            ></div>
            <div
                className="gallery-image"
                style={{
                    backgroundImage: `url(${orange})`,
                }}
            ></div>
            <div
                className="gallery-image"
                style={{
                    backgroundImage: `url(${cone})`,
                }}
            ></div>
            <div
                className="gallery-image"
                style={{
                    backgroundImage: `url(${sugarcubes})`,
                }}
            ></div>
        </section>
    );
};

export default Gallery;
