import './Contact.css';
import RightColumn from '../assets/right col.png';
import Phone from '../assets/phone icon.svg';
import Location from '../assets/locationic.svg';
import Insta from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Pinterest from '../assets/Pinterest.svg';
import Tele from '../assets/Telegram.svg';

const Contact = () => {
    return ( 
        <>
        <div className="contact">
            <div className="right-column">
                <img src={RightColumn} alt="Right"/>
                <div className="followa">
                <div className="followh3">
                    <h3>Follow us</h3>
                </div>
                <div className="follow-vl"></div>
                <div className="follow-ic">
                    <img src={Insta} alt="instagram icon" /><img src={Pinterest} alt="pinterest icon" /><img src={Facebook} alt="facebook icon" /><img src={Twitter} alt="twitter icon" /><img src={Tele} alt="telegram icon" />
                </div>
                <div className="follow-vl"></div>
            </div>               
            </div>
            
            <div className="left-column">
                <div className="top-block">
                    <h2>To Contact Us</h2>
                    <div className="form-block">
                        <form>
                            <label>We will call you back</label><br />
                            <div className="contact-block">
                                <input type="text" placeholder='+380 XX XXX XX XX'/>
                                <button>BLOCK A CALL</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="bottom-block">
                    <div className="column1-wrapper">
                        <div className="column1">
                            <h3>Phone</h3>
                        </div>
                        <div className="column1-vl"></div>
                        <div className="phone-no">
                            <div className="phone"><img src={Phone} alt="phone icon" /> <p>+380980099777</p></div>
                            <div className="phone"><img src={Phone} alt="phone icon" /> <p>+380980099111</p></div>
                        </div>
                    </div> 
                    <div className="column2">
                        <div className="add">
                            <h3>Address</h3>
                        </div>
                        <div className="location">
                            <p>Opening hours: 8 to 11 p.m.</p>
                            <div className="loc">
                                <img src={Location} alt="location icon" /><p>15/4 Khreshchatyk Street, Kyiv </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom block 1440px */}

                <div className="bottom-block-1440">
                    <div className="phone-address-block">
                        <div className="phone-d">
                            <h3>Phone</h3>
                        </div>
                        <div className="address-d">
                            <h3>Address</h3>
                        </div>
                    </div>

                    <div className="phoneno-address-block">
                        <div className="phone-no">
                            <div className="phone"><img src={Phone} alt="phone icon" /> <p>+380980099777</p></div>
                            <div className="phone"><img src={Phone} alt="phone icon" /> <p>+380980099111</p></div>
                        </div>

                        <div className="address-no">
                            <p>Opening hours: 8 to 11 p.m.</p>
                            <div className="loc">
                                <img src={Location} alt="location icon" /><p>15/4 Khreshchatyk Street, Kyiv </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
        </>
     );
}
 
export default Contact;