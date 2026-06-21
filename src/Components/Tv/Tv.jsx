import axios from 'axios'
import React, { useState , useEffect} from 'react'



export default function Tv() {

const [trendingTv , settrendingTv] = useState([])
  const [selectedTV, setSelectedTV] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);


async function getTv (pageNumber = 1) {
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=fc708b614e576b767c05e61adb675805&page=${pageNumber}`)
  settrendingTv(data.results);
  if (data.total_pages) setTotalPages(data.total_pages);
}


useEffect(()=> {
  getTv(page)

},[page])

      useEffect(() => {
          const handleEsc = (event) => {
              if (event.key === 'Escape') {
                  setSelectedTV(null)
              }
          }
  
          document.addEventListener('keydown', handleEsc)
          return () => document.removeEventListener('keydown', handleEsc)
      }, [selectedTV])



 return (<>
  <h1>Tv</h1>
  <div className="row">
    {trendingTv.map ((tv, index)=>

      <div className="col-lg-3 col-md-4 col-sm-6 g-3" key={tv.id}>

        <div 
        className="card w-100 border-0"
         onClick={() => setSelectedTV(tv)}
        style={{ cursor: "pointer" }}
        >

        <img 
        src={"https://image.tmdb.org/t/p/w500/"+tv.poster_path} 
        className='w-100' 
        alt="" 
        />
        <div className="card-text text-center h5 w-100">
        {tv.title ||tv.name}
        </div>


        <div className="h5 card-text text-center">
        release date : {tv.first_air_date}
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


{selectedTV && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center "
    style={{
      backgroundColor: "rgba(0,0,0,0.9)",
      zIndex: 9999,
    }}
  >
    <div className="bg-dark w-75 mx-auto text-white rounded d-flex align-items-center position-relative">
      <button
        className="btn btn-danger mb-3 position-absolute top-0 end-0 m-2"
        onClick={() => setSelectedTV(null)}
      >
        X
      </button>

      <p  className='h2 w-50 text-center'>{selectedTV.title}</p>





      <img
        src={
          "https://image.tmdb.org/t/p/w500/" +
          selectedTV.poster_path
        }

          className='w-10'
        alt=""
      />
      <p className='h5 w-50 text-center '>
      {selectedTV.overview}
      </p>

      <p className='w-50 p-3 h5 text-center'>
        Release Date: {selectedTV.release_date}
      </p>
      <p className='w-50 p-3 h5 text-center '>
        Rating: {selectedTV.vote_average}
      </p>

    </div>
  </div>
  )}
  


    
    
    
    
    
    
    </>)}