import React, { Component } from 'react'
import axios from 'axios';

export default class ModalAliment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            salas: [],
            movies: [],
            
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
                        <h3 class="modal-title">Agregar Alimento</h3>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body ">
                        <div>
                            <form >
                                <div>
                                    <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                    <br />
                                    <label className="text-dark">Nombre</label>
                                    <input type="text" class="form-control" />
                                    <br />
                                    <div className="container-fluid form-inline">
                                        <div className="col-md-6">
                                            <label className="text-dark text-center">Costo</label>
                                            <input type="number"class="form-control" min="1"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-dark text-center">Cantidad</label>
                                            <input type="number" class="form-control" min="1"/>
                                        </div>
                                    </div>
                                    <br />
                                    <label className="text-dark">Categoria</label>
                                    <input type="text" class="form-control" />
                                    <br />
                                    <label className="text-dark">Caducidad</label>
                                    <input type="date" class="form-control" />
                                    <br />
                                </div>
                            </form>
                        </div>
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
