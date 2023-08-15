import './Info.css'
import phone from "../../assets/infopurple.jpg"


function Info(){
    return(
        <div className='infosec'>
            <div className='whatsnew'>
                <h1>
                ЧТО НОВОГО
                </h1>
            </div>
            <div className='whatsnew-card'>
                <div className='text'>
                    <p className='inf'>Все модели оснащены однокристальной системой A16 Bionic, 48-<br></br>мегапиксельной основной камерой и экранами ProMotion с защитой Ceramic<br></br>Shield и частотным диапазоном 1 — 120 Гц, а также ускоренной памятью<br></br>LPDDR5. Дизайн линейки обновлен, на фронтальной панели смартфонов два<br></br>выреза. </p>
                    <p className='inf'>Все iPhone 14 в США будут продаваться без лотка для SIM-карт: производитель<br></br>заявляет, что улучшенная технология eSIM позволит перенести старые<br></br>электронные сим-карты на новые смартфоны.</p>
                    <p className='inf'>Обновлены фронтальная камера (она снабжена автофокусом и быстрее<br></br>распознает пользователя в условиях недостаточной освещенности) и сенсор<br></br>основной камеры.
</p>
                    <p className='important'>iPhone 14 Pro вышел в новом дизайне — без<br></br>фирменной «челки». Также в ассортименте появился<br></br>новый цвет. В смартфоне, в отличие от «обычных» 14-х<br></br>айфонов, установлен процессор A16 Bionic, который<br></br>может за секунду производить 4 трлн операций с<br></br>фото.</p>
                </div>
                <div className='phoneimg'>
                    <img src={phone}/>
                </div>
            </div>
        </div>
    );
}
export default Info;