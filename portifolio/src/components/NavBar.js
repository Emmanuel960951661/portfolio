import { Link, Outlet } from "react-router-dom"

export default function NavBar{
    return(
    <><nav >
        <link to="/"> Home</link>
        <Link to="/About">About</Link>
        <Link to="/ContactMe">Contact Me</Link>
    </nav>
     <Outlet/>
     </>
    )
}