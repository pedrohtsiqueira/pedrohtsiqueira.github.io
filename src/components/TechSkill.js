export default function TechSkill (props) {
    return (
        <div className="techSkill">
            <h3>{props.title}</h3>
            <img src={props.imgSrc}/>
        </div>
    )
}