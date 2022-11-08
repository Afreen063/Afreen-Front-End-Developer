import {Link} from "react-router-dom"
import './nav.css'

export default function Navi()
{
    return (
         
        <div>
        <ul className="body">
            <li className="name">Afreen</li>
            <li>
                <ul className="nav">
                <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/MyProject">MyProjects</Link></li>
        <li><Link className="link" to="/AboutMe">AboutMe</Link></li>
                </ul>
            </li>
        </ul>
       </div>
       
    )
}