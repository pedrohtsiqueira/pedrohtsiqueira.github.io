import Skill from './Skill';


export default function About () {
    const javascriptImg = "./icons/javascript.png";
    const cssImg = "./icons/css.png";
    const htmlImg = "./icons/html.png";
    const reactImg = "./icons/react.png";
    const empDesc = "A capacidade de entender o ponto de vista do cliente facilita o desenvolvimento de produtos mais adequados."

    return (
        <div className="About">
            <p>Atuo como psicólogo desde 2019. Em 2024 iniciei o curso oferecido pela UFF de Tecnólogo em Sistemas de Informação.</p>
            <p>Combino a psicologia e as questões da tecnologia na minha prática profissional, seja como psicólogo ou desenvolvedor.</p>
            <section>
                <h3>Habilidades Técnológicas</h3>
                <div className='skills' id='tech' >  
                    <Skill imgSrc={javascriptImg} title={'Javascript'}/>
                    <Skill imgSrc={cssImg} title={'CSS'}/>
                    <Skill imgSrc={htmlImg} title={'HTML'}/>
                    <Skill imgSrc={reactImg} title = {'React.js'}/>
                </div>
            </section>
            <section>
                <h3>Outras competências</h3>
                <div className='skills'>
                    <Skill title={'Empatia'} description={empDesc}/>
                </div>
            </section>
        </div>
    )

}