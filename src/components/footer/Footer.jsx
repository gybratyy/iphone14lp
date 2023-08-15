import './Footer.css';
import logo from '../../assets/applelogo.jpg'


function Footer(){
    return(<div className='footer'>
        <div className='footer-content'>
        <h1 className='conf-policy'>Политика конфиденциальности</h1>
        <div><img src={logo} alt='apple logo'></img></div>
        <h1 className='contact-number'>+38 050-456-56-56</h1></div>
    </div>);
}

export default Footer;