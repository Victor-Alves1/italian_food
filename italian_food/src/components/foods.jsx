import massa from '../../images/massa.jpg'
import couvert from '../../images/couvert.jpg'
import bolinho from '../../images/bolinho.jpg'
import macarrao from '../../images/macarrao.jpg'
import mistura from '../../images/mistura.jpg'
import pizza from '../../images/pizza.jpg'
import salada from '../../images/salada.jpg'

const Foods = () => {
    return (
        <div className='flex'>
            <div className='w-comida'>
                <img src={massa} alt="" />
            </div>
            <div className='w-comida'>
                <img src={couvert} alt="" />
            </div>
            <div className='w-comida'>
                <img src={bolinho} alt="" />
            </div>
            <div className='w-comida'>
                <img src={macarrao} alt="" />
            </div>
            <div className='w-comida'>
                <img src={mistura} alt="" />
            </div>
            <div className='w-comida'>
                <img src={pizza} alt="" />
            </div>
            <div className='w-comida'>
                <img src={salada} alt="" />
            </div>
        </div>
    );
}
 
export default Foods;