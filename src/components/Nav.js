import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";



export default function Nav () {
    return (
        <>
            <nav className="desktop">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='About'>Sobre mim</Link>
                    <Link to='Portfolio'>Projetos</Link>
                </ul>
            
            </nav>
            <nav className="mobile">
                <IoMdMenu/>
            </nav>
        </>

    )
}