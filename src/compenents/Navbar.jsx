import { Link } from "react-router-dom"
import {BiCameraMovie  , BiSearchAlt2} from "react-icons/bi"

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                   <BiCameraMovie/> Cine Movies
                </Link>
            </h2>

            <form action="">

                <input type="text" placeholder="Pesquise um Filme" />
                <button type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
            
        </nav>
    )
    
}
export default Navbar



{/* <Link to="/Movie/1">Movie</Link>
<Link to="/Search">Search</Link> */}

