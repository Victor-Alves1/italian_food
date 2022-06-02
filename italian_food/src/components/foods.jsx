import massa from '../../images/massa.jpg'
import couvert from '../../images/couvert.jpg'
import bolinho from '../../images/bolinho.jpg'
import macarrao from '../../images/macarrao.jpg'
import mistura from '../../images/mistura.jpg'
import pizza from '../../images/pizza.jpg'
import salada from '../../images/salada.jpg'
import meat from '../../images/meat.jpg'

import Carousel from 'react-bootstrap/Carousel'
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
    const [radioMeat, setRadioMeat]= useState(false)


    return (
        <>
            <div className='carousel visibility-large-screen' >
                <Carousel variant='dark' indicators={false}>
                    <Carousel.Item>
            
                        <div className='Carousel-card'>
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={massa} alt='Italian food photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem officia at alias labore, magnam voluptatum mollitia temporibus odio laboriosam modi eum architecto soluta perferendis et ex odit ducimus distinctio?
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
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={couvert} alt='Couvert photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus fuga commodi pariatur soluta, nam architecto ea omnis inventore molestiae, exercitationem iure numquam veritatis et repudiandae distinctio tempore porro placeat.
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
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={bolinho} alt='Bolinho photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad, quibusdam, pariatur omnis illo reiciendis ab excepturi fuga ea quam aliquid quo nobis id neque recusandae nesciunt, aliquam autem sit?
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
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={macarrao} alt='Macarrao photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, maiores placeat facere doloribus officia fugit ut explicabo non ipsa consequatur, voluptates minus nulla asperiores, delectus cum et suscipit. Rem, facere!
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
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className='Carousel-card'>
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={mistura} alt='Mistura photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem officia at alias labore, magnam voluptatum mollitia temporibus odio laboriosam modi eum architecto soluta perferendis et ex odit ducimus distinctio?
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
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={pizza} alt='Pizza photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus fuga commodi pariatur soluta, nam architecto ea omnis inventore molestiae, exercitationem iure numquam veritatis et repudiandae distinctio tempore porro placeat.
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
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={salada} alt='Salad photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad, quibusdam, pariatur omnis illo reiciendis ab excepturi fuga ea quam aliquid quo nobis id neque recusandae nesciunt, aliquam autem sit?
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
                            <Card style={{ width: '18vw' }}>
                                <Card.Img variant="top" src={meat} alt='Meat photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, maiores placeat facere doloribus officia fugit ut explicabo non ipsa consequatur, voluptates minus nulla asperiores, delectus cum et suscipit. Rem, facere!
                                    </Card.Text>
                                    <Button
                                        variant="outline-primary"
                                        active = {radioMeat}
                                        onClick={()=>setRadioMeat(!radioMeat)}
                                    >
                                        {
                                        !radioMeat
                                        ?
                                        <span>Put in cart</span>
                                        :
                                        <span>selected product</span>
                                        }
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>
            
            </div>


            <div className='visibility-small-screen'>
            <Carousel variant='dark' indicators={false}>
                    <Carousel.Item>
                        <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={massa} alt='Italian food photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem officia at alias labore, magnam voluptatum mollitia temporibus odio laboriosam modi eum architecto soluta perferendis et ex odit ducimus distinctio?
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
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={couvert} alt='Couvert photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus fuga commodi pariatur soluta, nam architecto ea omnis inventore molestiae, exercitationem iure numquam veritatis et repudiandae distinctio tempore porro placeat.
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
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={bolinho} alt='Bolinho photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad, quibusdam, pariatur omnis illo reiciendis ab excepturi fuga ea quam aliquid quo nobis id neque recusandae nesciunt, aliquam autem sit?
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
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={macarrao} alt='Macarrao photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, maiores placeat facere doloribus officia fugit ut explicabo non ipsa consequatur, voluptates minus nulla asperiores, delectus cum et suscipit. Rem, facere!
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
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={mistura} alt='Mistura photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem officia at alias labore, magnam voluptatum mollitia temporibus odio laboriosam modi eum architecto soluta perferendis et ex odit ducimus distinctio?
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
                            </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={pizza} alt='Pizza photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus fuga commodi pariatur soluta, nam architecto ea omnis inventore molestiae, exercitationem iure numquam veritatis et repudiandae distinctio tempore porro placeat.
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
                        </div>
                    </Carousel.Item >
                    <Carousel.Item >
                        <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={salada} alt='Salad photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad, quibusdam, pariatur omnis illo reiciendis ab excepturi fuga ea quam aliquid quo nobis id neque recusandae nesciunt, aliquam autem sit?
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
                        </div>
                    </Carousel.Item >
                    <Carousel.Item >
                        <div className='Carousel-card'>
                            <Card style={{ width: '50vw' }}>
                                <Card.Img variant="top" src={meat} alt='Meat photo'/>
                                <Card.Body>
                                    <Card.Title>Lorem ipsum dolor</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, maiores placeat facere doloribus officia fugit ut explicabo non ipsa consequatur, voluptates minus nulla asperiores, delectus cum et suscipit. Rem, facere!
                                    </Card.Text>
                                    <Button
                                        variant="outline-primary"
                                        active = {radioMeat}
                                        onClick={()=>setRadioMeat(!radioMeat)}
                                    >
                                        {
                                        !radioMeat
                                        ?
                                        <span>Put in cart</span>
                                        :
                                        <span>selected product</span>
                                        }
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}
 
export default Foods;