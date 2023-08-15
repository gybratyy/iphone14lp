import './Purchase.css';
import iphone from "../../assets/purchase.jpg";

function Purchase(){
    return(
        <div className='purchase'>

            <div className='purchase-content' >
                <div className='purchase-heading'>
                    <h1>Хочешь IPHONE 14 PRO?</h1>
                </div>

                <div className='purchase-input'>
                    <div className='input-name'>
                        <h1>Ваше имя</h1>
                        <hr />
                    </div>
                    <div className='input-number'>
                        <h1>Номер телефона</h1>
                        <hr />
                    </div>
                    <div className='callback'>
                        <h1>В ближайшее время наш менеджер свяжется с Вами</h1>
                    </div>
                </div>
                
                <div className='purchase-button'>
                    <h1>ЗАКАЗАТЬ</h1>
                </div>                
            </div>
            <div className='purchase-image'>
                <img src={iphone} alt='iPhone'/>
            </div>
        </div>
    );
}
export default Purchase;