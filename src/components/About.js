import TechSkill from './TechSkill';


export default function About () {
    const javascriptImg = "./icons/javascript.png";
    const cssImg = "./icons/css.png";
    const htmlImg = "./icons/html.png";
    const reactImg = "./icons/react.png";
    
    return (
        <div className="About">
            <p>Atuo como psicólogo desde 2019. Em 2024 iniciei o curso oferecido pela UFF de Tecnólogo em Sistemas de Informação.</p>
            <p>Combino a psicologia e as questões da tecnologia na minha prática profissional, seja como psicólogo ou desenvolvedor.</p>
            <div className='skills'>
                <TechSkill imgSrc={javascriptImg} title={'javascript'}/>
                <TechSkill imgSrc={cssImg} title={'CSS'}/>
                <TechSkill imgSrc={htmlImg} title={'HTML'}/>
                <TechSkill imgSrc={reactImg} title = {'React.js'}/>
            </div>
            
        </div>
    )

}