import './Hero.css';
import alliphones from "../../assets/alliphones.png";

function Hero(){
    return(
        <div className='hero-container'>
            <div className='phone-heading'>
                <h1 className='heroheading'> IPHONE 14 PRO</h1>
            </div>
            <div className='iphoneall'>
                <img src={alliphones}></img>
            </div>
            <div className='choose-button'>
                <h1>ВЫБРАТЬ</h1>
            </div>
        </div>
    );
}

export default Hero;