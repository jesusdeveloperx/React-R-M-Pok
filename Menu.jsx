import { Link } from "react-router-dom"
import './Menu.css'

export default function Menu(){
    return(<div className="menu-var"> <header className="nav-bar">
      <Link  className="var" to="digimon">Digimon</Link>
 <Link className="var" to="contact">Play</Link>
        <Link  className="var" to="pokemon">Pokemon</Link>
        <Link  className="var" to="rickmort">Rick & Mort</Link>
        </header>
<div className="menu-logs">
    <img className="log" src="https://help.sumologic.com/img/integrations/app-development/GitHub.png" alt="logo git"/>
    <img className="log" src="https://cdn-icons-png.flaticon.com/512/4817/4817826.png" alt="logo linkedin"/>
    {/* <Link  className="var" to="home">Home</Link> */}

</div>
       
       </div>
        
    )
}