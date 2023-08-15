import './Colors.css';

import black from'../../assets/black.jpg';
import gold from'../../assets/gold.jpg';
import purple from'../../assets/purple.jpg';
import silver from'../../assets/silver.jpg';


function Colors(){
    return(
        <div className='colors'>
            <div className='heading'>
                <h1>ВЫБЕРИ СВОЙ ЦВЕТ</h1>
            </div>
        
        <div className='carousel'>
            <div className='phone' id='silver'>
                <img src={silver} alt='Silver'/>
                <h1>Silver</h1>
                <h3>Серебристый</h3>
            </div>
            <div className='phone' id='purple'>
                <img src={purple} alt='Purple'/>
                <h1>Deep purple</h1>
                <h3>Темно фиолетовый</h3>
            </div>
            <div className='phone' id='gold'>
                <img src={gold} alt='Gold'/>
                <h1>Gold</h1>
                <h3>Серебристый</h3>
            </div>
            <div className='phone' id='black'>
                <img src={black} alt='Black'/>
                <h1>Black</h1>
                <h3>Космический черный</h3>
            </div>
            
            
            
            
        </div>
        </div>
    );
}
export default Colors;