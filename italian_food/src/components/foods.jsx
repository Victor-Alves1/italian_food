import massa from '../../images/massa.jpg'
import couvert from '../../images/couvert.jpg'
import bolinho from '../../images/bolinho.jpg'
import macarrao from '../../images/macarrao.jpg'
import mistura from '../../images/mistura.jpg'
import pizza from '../../images/pizza.jpg'
import salada from '../../images/salada.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Foods = () => {
    function ToggleButtonExample() {
        const [checked, setChecked] = useState(false);
        const [radioValue, setRadioValue] = useState('1');
      
        const radios = [
          { name: 'Active', value: '1' },
          { name: 'Radio', value: '2' },
          { name: 'Radio', value: '3' },
        ];
      
        return (
          <>
            <ButtonGroup className="mb-2">
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="secondary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                Checked
              </ToggleButton>
            </ButtonGroup>
            <br />
            <ButtonGroup className="mb-2">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <br />
            <ToggleButton
              className="mb-2"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
            >
              Checked
            </ToggleButton>
            <br />
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </>
        );
      }
      
      render(<ToggleButtonExample />);
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
                    <Button variant="outline-primary">Go somewhere</Button>
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
                    <Button variant="outline-primary">Go somewhere</Button>
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
                    <Button variant="outline-primary">Go somewhere</Button>
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
                    <Button variant="outline-primary">Go somewhere</Button>
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
                    <Button variant="outline-primary">Go somewhere</Button>
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
                    <Button variant="outline-primary">Go somewhere</Button>
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
                    <Button variant="outline-primary">Go somewhere</Button>
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