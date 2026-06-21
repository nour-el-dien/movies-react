import React from 'react'
import axios from 'axios'
import {  useEffect, useState } from 'react'

export default function Games() {
    const [trendingGames , setTrendingGames] =useState ([])
    
async function getGames() {

        let {data} = await axios.get("https://api.rawg.io/api/games?key=b20a9aec3a334ac79cb7001b6722ce6f&dates=2025-01-01,2025-12-31&ordering=-added")
        setTrendingGames(data.results) };

        console.log();
        

        useEffect(()=> 
                    {
                // api call
                    getGames() 
                     
                    } , [])
                                    
  return<>


    <div>Games</div>

            <div className="row">
                { trendingGames.map ((game , index)=> 
                <div key={game} className='col-md-3  g-3'>
            
                        
                        <div className="card border-0" >
                         <img src={game.background_image} className="rounded" alt={game.name}/>

                            <div className="card-body p-2">

                            <h1 className="card-text text-center h6">{game.name}</h1>

                            </div> 
                        </div>

              
                </div>
                )}
            </div>
            



  </>
}
