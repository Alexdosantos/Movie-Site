import { useState , useEffect } from "react"
import CardMovie from "../compenents/CardMovies"
const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home =() => {
   const  [topMovies , setTopMovies] =  useState ([])

   const getTopMovie = async(url)  =>  {
    const res = await fetch(url)
    const data = await res.json()

   setTopMovies(data.results)
   }
   useEffect(() =>{
    const topMovieUrl = `${moviesURL}top_rated?${apiKey}`
        console.log(topMovieUrl)
    getTopMovie(topMovieUrl)



   },[])


    return (
    <div className="cotainer">
        <h2 className="titulo">Melhores Filmes</h2>
        <div className="movies-conteiner">
            {topMovies.length === 0 && <p>Carreganco...</p>}
            {topMovies.length > 0 && topMovies.map((movie)=> <CardMovie key={movie.id} movie={movie} />)}
        </div>
       


    </div>

    )
    
}
export default Home