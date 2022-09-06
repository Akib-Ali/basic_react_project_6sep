import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar=()=>{
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/puppy">Puppy Page</Link>
            <Link to="/search">Search</Link>
        </div>
    )
}