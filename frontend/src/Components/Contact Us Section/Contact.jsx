import './Contact.css';
import RightColumn from '../../assets/Right colum.png';
import Phone from '../../assets/phone icon.svg';
import Location from '../../assets/locationic.svg';

const Contact = () => {
    return ( 
        <>
        <div className="contact">
            <div className="right-column">
                <img src={RightColumn} alt="Right" />
            </div>
            <div className="left-column">
                <div className="top-block">
                    <h2>To Contact Us</h2>
                    <div className="form-block">
                        <form>
                            <label>We will call you back</label><br /><br />
                            <input type="text" placeholder='+380 XX XXX XX XX'/>
                            <button>BLOCK A CALL</button>
                        </form>
                    </div>
                </div>

                <div className="bottom-block">
                    <div className="column1">
                        <h3>Phone</h3>
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

            </div>

        </div>
        </>
     );
}
 
export default Contact;