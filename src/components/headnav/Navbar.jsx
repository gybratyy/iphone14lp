import './Navbar.css';
import logo from "../../assets/applelogo.jpg"

function Navbar(){
    return(<div className='headnav'>
<div className='headnav-content'>
    <div className='headnav-sections'>
    <h1>Что новoго</h1><h1>Цвет</h1><h1>Заказать</h1>
    </div>
    <div className='headnav-brand'>
        <img src={logo} alt='logo'></img>
    </div>
    <div className='headnav-contacts'>
    <h1>+38 050-456-56-56</h1>
    </div>
</div>
    </div>);
    
}
export default Navbar;