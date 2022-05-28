import logo from '../../images/logo.svg'

import Cart from './Cart'


const Header = () => {
    
    return (
        <div className='header d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-3'>
                <img src={logo} alt="" className=''/>
                <h1 className=''>Cibo italiano</h1>
            </div>
            <div className='d-flex gap-8 justifify-content-center'>
                <span className='w-100 my-auto'>
                    Cadastre-se
                </span>
                <span className='w-100 my-auto me-4'>
                    Acesse sua conta
                </span>
                <Cart className=""/>
            </div>
            
        </div>
    );
}
 
export default Header;