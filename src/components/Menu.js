import { Link } from "react-router"; 
import { IoMdClose } from "react-icons/io";




export default function Menu({handleOpenMenu}) {
    return (
        <ul>
                <IoMdClose onClick={()=>handleOpenMenu(false)} className="closeIcon" />
                <Link to='/'>Home</Link>
                <Link to='About'>Sobre mim</Link>
                <Link to='Portfolio'>Projetos</Link>
        </ul>
    )
}