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
            <Offcanvas.Title>CART</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit accusamus illo vero sunt repudiandae voluptatibus temporibus, consectetur, necessitatibus nam ad? Earum numquam architecto totam voluptate voluptas recusandae necessitatibus soluta!
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
 
export default Cart;

    
  
  
