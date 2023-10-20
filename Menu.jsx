import { Link } from "react-router-dom"
import './Menu.css'

export default function Menu(){
    return <footer className="nav-bar">
        
        <Link className="var" to="contact">Play</Link>
        <Link  className="var" to="pokemon">Pokemon</Link>
        <Link  className="var" to="character">Rick & Mort</Link>

        </footer>
        
    
}