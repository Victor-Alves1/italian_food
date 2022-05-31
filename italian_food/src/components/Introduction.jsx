import bgPhoto from '../../images/backgroundPhoto.jpg'

const Introduction = () => {
    return (
        <>
            <img src={bgPhoto} alt='A background photo with a pizza' className='bgPhoto'/>
            <div className='welcome-screen'>
                <h1>Bem vindo ao restaurante Cibo Italiano</h1>
                <h2>Receitas de família de ascendencia da Sicilia e da Calabria</h2>
            </div>
        </>
    );
}
 
export default Introduction;