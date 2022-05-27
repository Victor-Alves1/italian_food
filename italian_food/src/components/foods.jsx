import massa from '../../images/massa.jpg'
import couvert from '../../images/couvert.jpg'
import bolinho from '../../images/bolinho.jpg'
import macarrao from '../../images/macarrao.jpg'
import mistura from '../../images/mistura.jpg'
import pizza from '../../images/pizza.jpg'
import salada from '../../images/salada.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Foods = () => {

    const [radioMassa, setRadioMassa]= useState(false)
    const [radioCouvert, setRadioCouvert]= useState(false)
    const [radioBolinho, setRadioBolinho]= useState(false)
    const [radioMacarrao, setRadioMacarrao]= useState(false)
    const [radioMistura, setRadioMistura]= useState(false)
    const [radioPizza, setRadioPizza]= useState(false)
    const [radioSalada, setRadioSalada]= useState(false)

    return (
        <div className='flex'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={massa} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button 
                        variant="outline-primary" 
                        active = {radioMassa}
                        onClick={()=>setRadioMassa(!radioMassa)}
                    >
                        {
                        !radioMassa 
                        ?
                        <span>Put in cart</span>
                        :
                        <span>selected product</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={couvert} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button 
                        variant="outline-primary"
                        active = {radioCouvert} 
                        onClick={()=>setRadioCouvert(!radioCouvert)}
                    >
                        {
                        !radioCouvert 
                        ?
                        <span>Put in cart</span>
                        :
                        <span>selected product</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bolinho} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button 
                        variant="outline-primary"
                        active = {radioBolinho} 
                        onClick={()=>setRadioBolinho(!radioBolinho)}
                    >
                        {
                        !radioBolinho 
                        ?
                        <span>Put in cart</span>
                        :
                        <span>selected product</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={macarrao} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button 
                        variant="outline-primary" 
                        active = {radioMacarrao}
                        onClick={()=>setRadioMacarrao(!radioMacarrao)}
                    >
                        {
                        !radioMacarrao 
                        ?
                        <span>Put in cart</span>
                        :
                        <span>selected product</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mistura} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button 
                        variant="outline-primary" 
                        active = {radioMistura}
                        onClick={()=>setRadioMistura(!radioMistura)}
                    >
                        {
                        !radioMistura 
                        ?
                        <span>Put in cart</span>
                        :
                        <span>selected product</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pizza} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button 
                        variant="outline-primary"
                        active = {radioPizza} 
                        onClick={()=>setRadioPizza(!radioPizza)}
                    >
                        {
                        !radioPizza 
                        ?
                        <span>Put in cart</span>
                        :
                        <span>selected product</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={salada} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button 
                        variant="outline-primary"
                        active = {radioSalada} 
                        onClick={()=>setRadioSalada(!radioSalada)}
                    >
                        {
                        !radioSalada 
                        ?
                        <span>Put in cart</span>
                        :
                        <span>selected product</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
            
            {/* <div className='radios-input'>
                <input type="radio" name="info-comida" id="menu1" />
                <input type="radio" name="info-comida" id="menu2" />
                <input type="radio" name="info-comida" id="menu3" />
                <input type="radio" name="info-comida" id="menu4" />
                <input type="radio" name="info-comida" id="menu5" />
                <input type="radio" name="info-comida" id="menu6" />
                <input type="radio" name="info-comida" id="menu7" />
            </div>

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
            </label> */}
        </div>
    );
}
 
export default Foods;