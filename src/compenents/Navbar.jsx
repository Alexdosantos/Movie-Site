import { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import {BiCameraMovie  , BiSearchAlt2} from "react-icons/bi"
import "./Navbar.css"

const Navbar = () => {
    const [search ,setSearch] = useState("")
    const navegar = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                   <BiCameraMovie/> Cine Movies
                </Link>
            </h2>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Pesquise um Filme" 
                onChange={(e) => setSearch(e.target.value).target.value}
                value ={search}
                />
                
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

