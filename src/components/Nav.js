import { Link } from "react-router-dom";


export default function Nav () {
    return (
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='About'>Sobre mim</Link>
                <Link to='Portfolio'>Projetos</Link>
            </ul>
        </nav>
    )
}