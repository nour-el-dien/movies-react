import axios from 'axios'
import React, {  useEffect, useState } from 'react'


export default function Movies() {
 
  const [trendingMovies , setTrendingMovies] =useState ([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

        async function getMovie(pageNumber = 1) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=fc708b614e576b767c05e61adb675805&page=${pageNumber}`)
        // add data to state
        setTrendingMovies(data.results);
        if (data.total_pages) setTotalPages(data.total_pages);
        }; 
 
 
    useEffect(() => {
        // api call
        getMovie(page)
    }, [page])

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setSelectedMovie(null)
            }
        }

        document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [selectedMovie])

return (<>

  <h1 className="text-center">Movies</h1>

  <div className="row">
    {trendingMovies.map ((movie, index)=>

      <div className="col-lg-3 col-md-4 col-sm-6 g-3" key={movie.id}>

        <div 
        className="card w-100 border-0"
         onClick={() => setSelectedMovie(movie)}
        style={{ cursor: "pointer" }}
        >

        <img 
        src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} 
        className='w-100' 
        alt="" 
        />
        <div className="card-text text-center h5 w-100">
        {movie.title ||movie.name}
        </div>


        <div className="h5 card-text text-center">
        release date : {movie.release_date}
        </div>

        </div>


      </div>
  
  )}
  </div>

  <div className="d-flex justify-content-center align-items-center my-4">
    <button
      className="btn btn-primary mx-2"
      onClick={() => setPage(p => Math.max(1, p - 1))}
      disabled={page === 1}
    >
      Previous
    </button>

    <span className="mx-2">Page {page}{totalPages ? ` of ${totalPages}` : ''}</span>

    <button
      className="btn btn-primary mx-2"
      onClick={() => setPage(p => (totalPages ? Math.min(totalPages, p + 1) : p + 1))}
      disabled={totalPages ? page >= totalPages : false}
    >
      Next
    </button>
  </div>


{selectedMovie && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center "
    style={{
      backgroundColor: "rgba(0,0,0,0.9)",
      zIndex: 9999,
    }}
  >
    <div className="bg-dark w-75 mx-auto text-white rounded d-flex align-items-center position-relative" >
      <button
        className="btn btn-danger mb-3 position-absolute top-0 end-0 m-2"
        onClick={() => setSelectedMovie(null)}
      >
        X
      </button>

      <p  className='h2 w-50 text-center '>{selectedMovie.title}</p>





      <img
        src={
          
          "https://image.tmdb.org/t/p/w500/" +
          selectedMovie.poster_path
        }

          className='w-10'
        alt=""
      />
      <p className='h5 w-50 text-center '>
      {selectedMovie.overview}
      </p>

      <p className='w-50 p-3 h5 text-center'>
        Release Date: {selectedMovie.release_date}
      </p>
      <p className='w-50 p-3 h5 text-center '>
        Rating: {selectedMovie.vote_average}
      </p>

    </div>
  </div>
  )}




 </>
  )
}
