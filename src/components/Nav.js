import { Link } from "react-router-dom";


export default function Nav () {
    return (
        <nav>
            <ul>
                <Link>Home</Link>
                <Link>Bio</Link>
                <Link>Projetos</Link>
            </ul>
        </nav>
    )
}