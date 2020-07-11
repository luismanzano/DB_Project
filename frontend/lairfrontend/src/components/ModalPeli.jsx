import React, { Component } from 'react'
import axios from 'axios';

export default class ModalProyec extends Component {

    constructor(props) {
        super(props)
        this.state = {
            salas: [],
            movies: []
        }
    }

    componentDidMount() {
        const url1 = `http://127.0.0.1:8000/api/salas/`
        axios.get(url1).then(res => {
            this.setState({ salas: res.data.results })
        })
        const url2 = `http://127.0.0.1:8000/api/movies/`
        axios.get(url2).then(res => {
            this.setState({ movies: res.data.results })
        })
    }

    render() {
        const { salas } = this.state
        const { movies } = this.state
        return (

            <div class="modal-dialog table-dark">
                <div class="modal-content table-dark">
                    <div class="modal-header table-dark">
                        <h3 class="modal-title table-dark">Agregar Pelicula</h3>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div>
                                <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                <br />
                                <label className="text-dark">Titulo</label>
                                <input type="text" class="form-control"  />
                                <br />
                                <label className="text-dark">Duración</label>
                                <input type="time" class="form-control"  />
                                <br />
                                <label className="text-dark">Director</label>
                                <input type="text" class="form-control"  />
                                <br />
                                <label className="text-dark">Genero</label>
                                <select name="genero" id="genero">
                                <option value="volvo">Drama</option>
                                <option value="saab">Comedia</option>
                                <option value="mercedes">Accion</option>
                                <option value="audi">Fantasia</option>
                                </select>
                                <br />
                                <label className="text-dark">Idioma</label>
                                <select name="cars" id="cars">
                                <option value="volvo">Ingles</option>
                                <option value="saab">Español</option>
                                <option value="mercedes">Frances</option>
                                <option value="audi">Aleman</option>
                                </select>
                                <br />
                                <label className="text-dark">Sinopsis</label>
                                <textarea class="form-control"  rows="3"></textarea>
                                <br />
                                <label className="text-dark">Subir Imagen</label>
                                <input type="file" class="form-control-file table light"></input>
                                <br />
                                <label className="text-dark">Proyecciones</label>
                                <input type="text" class="form-control"  />
                                <br />
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer table-dark">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
        )
    }
}

