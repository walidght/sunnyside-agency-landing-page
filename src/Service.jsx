import './Service.css';

const Service = ({
    title,
    paragraph,
    button,
    image,
    flexDirection,
    linkClass,
    left,
    right,
}) => {
    return (
        <section className="service-container" style={{ flexDirection }}>
            <div className="service-text-container">
                <h2>{title}</h2>
                <p>{paragraph} </p>
                <a href="#" className={linkClass}>
                    {button}{' '}
                </a>
            </div>
            <div
                className="service-image-container"
                style={{
                    backgroundImage: `url(${image})`,
                    left,
                    right,
                }}
            ></div>
        </section>
    );
};

export default Service;
