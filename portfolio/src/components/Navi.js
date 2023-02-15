import {Link} from "react-router-dom"
import './nav.css'

export default function Navi()
{
    return (
         
       
        <div className="center">
            <span className="name">Afreen Ansari</span>
            <div>
            <span><Link className="link" to="/">Home</Link></span>
        <span><Link className="link" to="/MyProject">MyProjects</Link></span>
        <span><Link className="link" to="/AboutMe">AboutMe</Link></span>
            </div>
        </div>
       //<h1><Link className="link" to="/">Home</Link></h1>
       // <h1><Link className="link" to="/MyProject">MyProjects</Link></h1>
        //<h1><Link className="link" to="/AboutMe">AboutMe</Link></h1>
    )
}