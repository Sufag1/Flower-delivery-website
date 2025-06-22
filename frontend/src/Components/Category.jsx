import './Category.css';
import Fresh from '../assets/fresh.png';
import Dried from '../assets/dried.png';
import Live from '../assets/live plants.png';
import Aroma from '../assets/aroma.png';
import Fresheners from '../assets/fresheners.png'


const Category = () => {
    return ( 
        <>
        <div className="all-flowers">

            <div className="fresh all">
                <div className="fresh-text">
                    <h3>Fresh Flowers</h3>
                    <div className="shop-arrow"> <p>Shop now   <span>&#8594;</span></p></div>
                </div>
                <div className="fresh-img">
                    <img src={Fresh} alt="fresh flowers link" />
                </div>
            </div>

            <div className="dried all">
                <div className="dried-img">
                    <img src={Dried} alt="dried flowers link" />
                </div>
                <div className="dried-text">
                    <h3>Dried Flowers</h3>
                    <div className="shop-arrow"><p><span>&#8592;</span>    Shop now</p></div>
                </div>
            </div>
            
            <div className="live all">
                 <div className="live-text">
                    <h3>Live Plants </h3>
                    <div className="shop-arrow"><p>Shop now   <span>&#8594;</span></p></div>
                </div>
                <div className="live-img">
                    <img src={Live} alt="live plants flowers link" />
                </div>
            </div>
           
           <div className="aroma all">
                <div className="aroma-img">
                <img src={Aroma} alt="aroma plants flowers link" />
                </div>
                <div className="aroma-text">
                    <h3>Aroma Candels</h3>
                    <div className="shop-arrow "><p><span>&#8592;</span>   Shop now</p></div>
                </div>
           </div>
            

            <div className="fresheners all">
                 <div className="fresheners-text">
                    <h3>Fresheners</h3>
                    <div className="shop-arrow"><p>Shop now   <span>&#8594;</span></p></div>
                    
                </div>
                <div className="fresheners-img">
                    <img src={Fresheners} alt="fresheners flowers link" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Category;