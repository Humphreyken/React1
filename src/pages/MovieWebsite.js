import { useState } from "react"
import Swal from "sweetalert2";

export default function MovieWebsite() {
  const [text, setText] = useState();
  const [movies, setMovies] = useState([]);

  function getMoviesHandler(e) {
    e.preventDefault();
    if (text.length < 3) {
      Swal.fire("")
    }

    fetch("http://www.omdbapi.com/?apikey=5722b970&s=" + text)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      .catch(error => console.log('error is' + error))

  }

  return <div className="w-100 py-5" style={{ backgroundColor: "black", height: "100%", position: "absolute" }}>
    <h1 className="text-center text-uppercase">Movie Flix</h1>
    <form onSubmit={getMoviesHandler} className="todo-header dflex flex-wrap justify-content-center m-3 rounded border border-danger">

      {/* 2. Add an onChange event to the input */}
      <input onChange={e => setText(e.target.value)} placeholder="Search for your favourite movies" type="text" className="fs-5 p-3 rounded w-50 me-5" />

      {/* 3. Add an onClick to the button */}
      <button className="btn btn-danger p-3 fs-5 w-25 ms-5">Search</button>
    </form>
    <div className="d-flex flex-wrap justify-content-center px-1">


      {movies.map(x => {
        return <div key={x.imdbID} className="card" style={{ width: '18rem' }}>
          <img src={x.Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{x.Title} </h5>
            <p className="card-text">{x.Year} {x.Type} </p>
            <a href="#" className="btn btn-primary">see details</a>
          </div>
        </div>
      })}

    </div>
  </div>


}