import Service from './Service';
import transform from './images/desktop/image-transform.jpg';
import standout from './images/desktop/image-stand-out.jpg';

const Services = () => {
    return (
        <section>
            <Service
                className="service-link-yellow"
                title="Transform your brand"
                paragraph="We are creatives Transform your brand We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                button="LEARN MORE"
                image={transform}
                flexDirection="row"
                linkClass="service-container-yellow"
                left="auto"
                right="0"
            />
            <Service
                className="service-link-yellow"
                title="Stand out to the right audience"
                paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                button="LEARN MORE"
                image={standout}
                flexDirection="row-reverse"
                linkClass="service-container-red"
                left="0"
                right="auto"
            />
        </section>
    );
};

export default Services;
