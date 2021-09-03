import './Card.css';

const Card = ({ color, title, text, image }) => {
    return (
        <div
            className="card-container"
            style={{ color, backgroundImage: `url(${image})` }}
        >
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default Card;
