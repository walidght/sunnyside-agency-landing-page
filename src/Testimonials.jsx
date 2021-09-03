import Testimonial from './Testimonial';
import './Testimonials.css';
import emily from './images/image-emily.jpg';
import jennie from './images/image-jennie.jpg';
import thomas from './images/image-thomas.jpg';

const Testimonials = () => {
    /**{ image, altMssg, text, name, position } */
    return (
        <section className="testimonials-container">
            <h2>CLIENT TESTIMONIALS</h2>
            <div className="testimonials-cards-container">
                <Testimonial
                    image={emily}
                    altMssg="Emily R image"
                    text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    name="Emily R."
                    position="Marketing Director"
                />
                <Testimonial
                    image={thomas}
                    altMssg="Emily R image"
                    text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                    name="Thomas S."
                    position="Chief Operating Officer"
                />
                <Testimonial
                    image={jennie}
                    altMssg="Emily R image"
                    text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    name="Jennie F."
                    position="Business Owner"
                />
            </div>
        </section>
    );
};

export default Testimonials;
