import Card from './Card';
import './Cards.css';
import graphicDesignImage from './images/desktop/image-graphic-design.jpg';
import photographyImage from './images/desktop/image-photography.jpg';

const Cards = () => {
    return (
        <div className="cards-container">
            <Card
                title="Graphic design"
                text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
                color="hsl(167, 40%, 24%)"
                image={graphicDesignImage}
            />
            <Card
                title="Photography"
                text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                color="hsl(198, 62%, 26%)"
                image={photographyImage}
            />
        </div>
    );
};

export default Cards;
