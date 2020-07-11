import React, { Component } from 'react'
import axios from 'axios';


export default class ModalProyec extends Component {

    constructor(props) {
        super(props)
        this.state = {
            salas: [],
            movies: [],
            date: '',
            start: '',
            sala: '',
            movie: '',
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


    handleDate(event){
        this.setState({date: event.target.value})
        console.log('date', this.state.movie)
        
    }

    handleStart(event){
        let a = event.target.value.toString()
         a = a +':00'
        this.setState({start: a})
        console.log('start', this.state.movie)
        
    }


    handleSala(event){
        this.setState({sala: event.target.value})
        console.log('sala', this.state.sala)
        
    }

    handleMovie(event){
        console.log('event', event.target.value)
         let a = event.target.value
        console.log('a', a)
        this.setState({movie: a})
        console.log('movie', this.state.movie)
        console.log('a2', a)
        
    }


    addProyection(e){
        e.preventDefault();

        console.log('date', this.state.date)
        console.log('start', this.state.start)
        console.log('sala', this.state.sala)
        console.log('movie', this.state.movie)

        axios.post(`http://127.0.0.1:8000/api/proyecciones/`, {
            fecha: this.state.date.toString(),
            inicio: this.state.start.toString(),
            id_salas: parseInt(this.state.sala),
            id_pelicula: parseInt(this.state.movie),
            asientos_vendidos: 0,
            exists: 1

        }).then(succ => {console.log('succ', succ)}).catch(err=>{console.log('err', err)})
        .catch(err => {console.log('err', err)})
    }



    render() {
        const { salas } = this.state
        const { movies } = this.state
        return (

            <div class="modal-dialog table-dark">
                <div class="modal-content table-dark">
                    <div class="modal-header table-dark">
                        <h3 class="modal-title table-dark">Agregar Función</h3>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div>
                                <label className="text-dark" ><b>Por favor rellene todos los campos</b></label>
                                <br />
                                <label className="text-dark" >Fecha</label>
                                <input type="date" class="form-control"  onChange={e =>this.handleDate(e)}/>
                                <br />
                                <label className="text-dark" >Hora de Inicio</label>
                                <input type="time" class="form-control" onChange={e =>this.handleStart(e)}/>
                                <br />
                                <label className="text-dark" >Sala</label>
                                <select class="form-control form-control-sm" id="Sala" onChange={e => this.handleSala(e)}>
                                    {salas.map(sala => (
                                        <option value={sala.id}>{sala.id}</option>
                                    ))}
                                </select>
                                <br />
                                <label className="text-dark">Pelicula</label>
                                <select class="form-control form-control-sm" id="Pelicula" onChange={e => this.handleMovie(e)}>
                                    {movies.map(movie => (
                                        <option value={movie.id}>{movie.title}</option>
                                    ))}
                                </select>
                                <br />
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer table-dark">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-success" onClick={(e)=> this.addProyection(e)}>Agregar</button>
                    </div>
                </div>
            </div>
        )
    }
}

