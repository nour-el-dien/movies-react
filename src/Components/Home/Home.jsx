import axios from 'axios'
import React, {  useEffect, useState } from 'react'

export default function Home() {
  
    
    const [trendingMovies , setTrendingMovies] =useState ([])
    const [trendingTv , setTrendingTv] =useState ([])

    
    async function getMovie() {

        let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=fc708b614e576b767c05e61adb675805")
        setTrendingMovies(data.results) };

     async function getTv()  {
        let { data } = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=fc708b614e576b767c05e61adb675805")
            setTrendingTv(data.results) };       

        useEffect(()=> 
            {
        // api call
            getMovie() 
             getTv()
                            } , [])


        return <>
        <h2>Movies</h2>
            <div className="row">
                { trendingMovies.map ((movie , index)=> 
                <div key={movie.id} className='col-md-3 g-3'>
            
                        
                        <div className="card w-100" >
                        <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}  className="w-100" alt="..."/>
                        <div className="card-body p-2">
                        <h1 className="card-text h6">{movie.title ||movie.name}</h1>
                             </div>
                          </div>                 
                </div>
                )}
            </div>
                    <h2>Tv Shows</h2>
                    <div className='row'>
                {trendingTv.map((tv, index) => (
                    <div key={tv.id} className='col-md-3 g-3'>
                        <div className="card w-100" >
                            <img src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} className="w-100" alt="..." />       
                            <div className="card-body p-2">
                                <h1 className="card-text h6">{tv.title || tv.name}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </>
        };



