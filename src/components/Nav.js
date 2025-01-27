import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";



export default function Nav () {
   const [open, setOpen] = useState(false);


   function handleOpenMenu(e) {
       setOpen(e);
   }
    
    return (
        <div className="navBar">
            <nav className="desktop">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='About'>Sobre mim</Link>
                    <Link to='Portfolio'>Projetos</Link>
                </ul>
            
            </nav>
            <nav className="mobile">
                {open ? <Menu handleOpenMenu={handleOpenMenu}/>: <IoMdMenu onClick={()=>handleOpenMenu(true)}/>}
            </nav>
        </div>

    )
}
