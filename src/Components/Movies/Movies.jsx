import axios from 'axios'
import React, {  useEffect, useState } from 'react'


export default function Movies() {
 
  const [trendingMovies , setTrendingMovies] =useState ([])

        async function getMovie() {
        let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=fc708b614e576b767c05e61adb675805")
        setTrendingMovies(data.results) }; 
 
 
    useEffect(()=>
    {
        // api call
        getMovie() 
    } , []) 
    
    
    
return (<>
  <h1>Movies</h1>
  <div className="row">
    {trendingMovies.map ((movie, index)=>

      <div className="col-md-3 g-3" key={movie.id}>

        <div className="card w-100 border-0">
        <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} className='w-100' alt="" />
        <div className="card-text text-center">{movie.title ||movie.name}</div>
        </div>


      </div>
  
  )}
  </div>
    </>
  )
}
