import React, {useState} from 'react';
import axios from 'axios'


function AdminPeliculas(){

    const url = `http://127.0.0.1:8000/api`

    const [movies, setMovies] = useState(null);

    axios.get(url).then(res => {
        console.log(res.data);
        this.setMovies(res.data);
    })



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
      <th scope="col">Director</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
    </tr>
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

export default AdminPeliculas;