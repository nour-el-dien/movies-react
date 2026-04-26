import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  
    
    const [trendingMovies , setTrendingMovies] =useState ([])

    async function getTrainding() 
    {

        let {data} = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=fc708b614e576b767c05e61adb675805")
        console.log(data);
        setTrendingMovies(data.results) }

        useEffect(()=> {
        // api call
            getTrainding()
        } , [],)

        return <>
            <div className="row">
                { trendingMovies.map ((movie , index)=> <div className='col-md-3'>
            
                        
                        <div className="card w-100" >
                        <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}  className="w-100" alt="..."/>
                        <div className="card-body p-2">
                        <h1 className="card-text h6">{movie.title ||movie.name}</h1>
                        </div>
                        </div>
                    
                    </div>

                )}
            </div>
        
        
        </>
        };

