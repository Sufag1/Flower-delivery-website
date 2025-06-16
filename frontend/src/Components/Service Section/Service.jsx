import './Service.css';
import ServiceImg from '../../assets/image (1).png';
import ContentImg from '../../assets/content.jpg';

const Service = () => {
    return ( 
        <>
        <div className="service">
            <h1>Our Service</h1>
            <img src={ServiceImg} alt="Service banner" />

            <div className="left-column">
                <h4>service</h4>
            </div>
            <div className="hp">
                <h2>Flower Subcriptions</h2>
                <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                <div className="hp-btn">
                    <button>SUBSCRIBE NOW</button>
                </div>
            </div>
            

            <div className="service-content">
                <img src={ContentImg} alt="content banner" />
                <div className="wedding-text">
                    <h4>service</h4>
                    <h2>Wedding & Event Decor</h2>
                    <p>Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                    <div className="wedding-btn">
                        <button className='inq-btn'>Inquire Now</button>
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Service;