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
            
            <input type="radio" name="info-comida" id="menu1" />
            <input type="radio" name="info-comida" id="menu2" />
            <input type="radio" name="info-comida" id="menu3" />
            <input type="radio" name="info-comida" id="menu4" />
            <input type="radio" name="info-comida" id="menu5" />
            <input type="radio" name="info-comida" id="menu6" />
            <input type="radio" name="info-comida" id="menu7" />

            <label htmlFor="menu1">
                <div className='w-comida'>
                    <img src={massa} alt="" />
                    <div className='info-comida'>
                        <h1>
                            Lorem ipsum
                        </h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur eveniet accusamus facilis eaque amet accusantium mollitia perferendis! Molestiae ipsum sunt dicta tempore natus aliquam obcaecati, ullam temporibus eaque recusandae.
                        </p>
                    </div>
                </div>
            </label>
            <label htmlFor="menu2">
                <div className='w-comida'>
                    <img src={couvert} alt="" />
                    <div className='info-comida'>
                        <h1>
                            Lorem ipsum
                        </h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur eveniet accusamus facilis eaque amet accusantium mollitia perferendis! Molestiae ipsum sunt dicta tempore natus aliquam obcaecati, ullam temporibus eaque recusandae.
                        </p>
                    </div>
                </div>
            </label>
            <label htmlFor="menu3">
                <div className='w-comida'>
                    <img src={bolinho} alt="" />
                    <div className='info-comida'>
                        <h1>
                            Lorem ipsum
                        </h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur eveniet accusamus facilis eaque amet accusantium mollitia perferendis! Molestiae ipsum sunt dicta tempore natus aliquam obcaecati, ullam temporibus eaque recusandae.
                        </p>
                    </div>
                </div>
            </label>
            <label htmlFor="menu4">
                <div className='w-comida'>
                    <img src={macarrao} alt="" />
                    <div className='info-comida'>
                        <h1>
                            Lorem ipsum
                        </h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur eveniet accusamus facilis eaque amet accusantium mollitia perferendis! Molestiae ipsum sunt dicta tempore natus aliquam obcaecati, ullam temporibus eaque recusandae.
                        </p>
                    </div>
                </div>
            </label>
            <label htmlFor="menu5">
                <div className='w-comida'>
                    <img src={mistura} alt="" />
                    <div className='info-comida'>
                        <h1>
                            Lorem ipsum
                        </h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur eveniet accusamus facilis eaque amet accusantium mollitia perferendis! Molestiae ipsum sunt dicta tempore natus aliquam obcaecati, ullam temporibus eaque recusandae.
                        </p>
                    </div>
                </div>
            </label>
            <label htmlFor="menu6">
                <div className='w-comida'>
                    <img src={pizza} alt="" />
                    <div className='info-comida'>
                        <h1>
                            Lorem ipsum
                        </h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur eveniet accusamus facilis eaque amet accusantium mollitia perferendis! Molestiae ipsum sunt dicta tempore natus aliquam obcaecati, ullam temporibus eaque recusandae.
                        </p>
                    </div>
                </div>
            </label>
            <label htmlFor="menu7">
                <div className='w-comida'>
                    <img src={salada} alt="" />
                    <div className='info-comida'>
                        <h1>
                            Lorem ipsum
                        </h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, pariatur eveniet accusamus facilis eaque amet accusantium mollitia perferendis! Molestiae ipsum sunt dicta tempore natus aliquam obcaecati, ullam temporibus eaque recusandae.
                        </p>
                    </div>
                </div>
            </label>
        </div>
    );
}
 
export default Foods;