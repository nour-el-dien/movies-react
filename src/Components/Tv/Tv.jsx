import axios from 'axios'
import React, { useState , useEffect} from 'react'



export default function Tv() {

const [trendingTv , settrendingTv] = useState([])

async function getTv () {
  let {data} =  await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=fc708b614e576b767c05e61adb675805")
    settrendingTv(data.results) ; 
}


useEffect (()=> {
    getTv()

},[])



 return (<>
  <h1>Tv</h1>
  <div className="row">
    {trendingTv.map ((tv, index)=>

      <div className="col-md-3 g-3" key={tv.id}>

        <div className="card w-100 border-0">
        <img src={"https://image.tmdb.org/t/p/w500/"+tv.poster_path} className='w-100' alt="" />
        <div className="card-text text-center ">{tv.title ||tv.name}</div>
        </div>


      </div>
  
  )}
  </div>
    </>
  )
}