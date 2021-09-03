import './Testimonial.css';

const Testimonial = ({ image, altMssg, text, name, position }) => {
    return (
        <div className="testimonial-container">
            <img src={image} alt={altMssg} className="testimonial-image" />
            <p className="testimonial-text">{text}</p>
            <p className="testimonial-name">{name} </p>
            <p className="testimonial-position">{position} </p>
        </div>
    );
};

export default Testimonial;
