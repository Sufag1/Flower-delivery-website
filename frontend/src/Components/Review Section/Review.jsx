import './Review.css';
import Google from '../../assets/google logo.svg';
import SlideNav from '../../assets/Slide Nav.svg';


const Review = () => {
    return ( 
        <div className="review-content">
            <img src={Google} alt="google logo" />
            <h4>REVIEWS</h4>
            <h2>Our Clients say</h2>
            <i>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</i>
            <p>– Ronald Richards</p>
            <img className='slidenav' src={SlideNav} alt="slide nav" />
            <div className="review-btn">
                <button>READ REVIEWS</button>
            </div>
        </div>
     );
}
 
export default Review;