import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'

const Header = () => {
    return (
        <div className='flex justify-between align-middle bg-amarelo'>
            <div className='flex gap-3'>
                <img src={logo} alt="" className='p-2 bg-azul'/>
                <h1 className='text-4xl italic leading-normal '>Cibo italiano</h1>
            </div>
            <div className='flex gap-8 content-center'>
                <span className='w-full my-auto'>
                    Cadastre-se
                </span>
                <span className='whitespace-nowrap my-auto '>
                    Acesse sua conta
                </span>
                <img src={cart} alt="" className='full'/>
            </div>
        </div>
    );
}
 
export default Header;