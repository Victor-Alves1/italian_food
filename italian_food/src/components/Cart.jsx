import cart from '../../images/cart.svg'

import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

import { useState } from "react";

const Cart = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          <img src={cart} alt="" className='w-100 me-5'/>
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
 
export default Cart;

    
  
  
