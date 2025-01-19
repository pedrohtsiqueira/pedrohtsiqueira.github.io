export default function Skill (props) {
    return (
        <div className="skill">
            <h3>{props.title}</h3>
            <img src={props.imgSrc}/>
            <p>{props.description}</p>
        </div>
    )
}