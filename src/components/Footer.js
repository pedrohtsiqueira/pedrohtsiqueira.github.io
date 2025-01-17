import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




export default function Footer () {
    return(
        <div className="Footer">
            <div className="icons">
                <a href='https://www.linkedin.com/in/pedro-siqueira/'><FaLinkedin/></a>
                <a href='https://github.com/pedrohtsiqueira'><FaGithub/></a>
            </div>
            
        </div>
    )
}