import Projeto from './Projeto';



export default function Portfolio () {
    return (
        <div className="Portfolio">
            <h2>Projetos Realizados</h2>
            <div className='container'>
                <Projeto/>
                <Projeto/>
                <Projeto/>
                <Projeto/>
                <Projeto/>
            </div>
        </div>
    )
}