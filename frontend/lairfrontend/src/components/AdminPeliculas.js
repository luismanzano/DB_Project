import React, {useState, useEffect} from 'react';
import axios from 'axios'


function AdminPeliculas(){
//EL URL CON LAS PELICULAS (VA A CAMBIAR CUANDO COLOQUEMOS MAS TABLAS)
//LA DIRECCION http://127.0.0.1:8000/api PUEDE CAMBIAR DEPENDIENDO DE SU COMPUTADORA
//SI NO USA LA MISMA INTENTEN CONFIGURARLA PARA QUE TODOS USEMOS LA MISMA
    const url = `http://127.0.0.1:8000/api`

    const [movies, setMovies] = useState(null);

    //CON ESTE COMANDO DE AXIOS NOS TRAEMOS LO QUE NECESITAMOS DE LA API


    useEffect(() => {
      axios.get(url).then(res => {
        console.log(res.data);
        setMovies(res.data);
        console.log(movies)
    })
    }, [url])


    
    if(movies!=null){

      return(
        <div className="container">

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titulo</th>
      <th scope="col">Duracion</th>
      <th scope="col">Director</th>
      <th scope="col">Genero</th>
      <th scope="col">Idioma</th>
      <th scope="col">Proyectando</th>
    </tr>
  </thead>
  <tbody>
   {movies.map(movie => (
    <tr>
      <th scope="row">{movie.id}</th>
      <td>{movie.title}</td>
      <td>{movie.duration}</td>
      <td>{movie.director}</td>
      <td>{movie.genre}</td>
      <td>{movie.language}</td>
      <td>{movie.showing ? 'Si' : '$No'}</td>
    </tr>
  ))}

  </tbody>
</table>


           
           <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Titulo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

  
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
           
        </div>
    )
    }

    else {
      return (
        <h2>Cargando</h2>
      )
    }



    
}

export default AdminPeliculas;