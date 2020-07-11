import React, { Component } from 'react'
import axios from 'axios'

export default class TabProyec extends Component {

    constructor(props) {
        super(props)
        this.state = {
            proy: [],
            fecha:Date,
            hora:0,
            sala:0,
            pelicula:'',
            edit:false,
            idEditar:0,
            salas:[],
            movies:[],
            idPeli:0
        }
        this.handleEdit=this.handleEdit.bind(this)
        this.handleFecha=this.handleFecha.bind(this)
        this.handleHora=this.handleHora.bind(this)
        this.handleSala=this.handleSala.bind(this)
        this.handlePelicula=this.handlePelicula.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }
    componentDidMount() {
        const url1 = `http://127.0.0.1:8000/api/proyecciones/`
        axios.get(url1).then(res => {
            this.setState({ proy: res.data.results })
        })

        const url2 = `http://127.0.0.1:8000/api/salas/`
        axios.get(url2).then(res => {
            this.setState({ salas: res.data.results })
        })
        const url3 = `http://127.0.0.1:8000/api/movies/`
        axios.get(url3).then(res => {
            this.setState({ movies: res.data.results })
        })
    }

    handleFecha(e){this.setState({fecha:e.target.value})}
    handleHora(e){this.setState({hora:e.target.value})}
    handleSala(e){this.setState({sala:e.target.value})}
    handlePelicula(e){
        this.state.movies.map(movie=>{
            console.log(movie.id,e.target.value[0])
            if(movie.id==e.target.value[0]){
                this.setState({idPeli:movie.id})
            }
        })
        if(this.state.movies)
        console.log(e.target.value[0])
    }
    

    handleEdit(e){
        this.setState({edit:true,idEditar:e.id});
        this.setState({fecha:e.fecha,hora:e.inicio,pelicula:e.pelicula})
    }

    handleClick(){
        if(this.state.fecha==0||this.state.hora==0){
            alert("Porfavor rellene todos los campos")
        } else if(this.state.edit){
            console.log('Entre aqui')
            axios.put(`http://127.0.0.1:8000/api/proyecciones/${this.state.idEditar}/`,{
                id: this.state.idEditar,
                fecha: this.state.fecha,
                inicio: this.state.hora,
                id_salas: this.state.sala,
                id_pelicula: this.state.idPeli,
                asientos_vendidos: 4.0,
                existo: 0
            }).then(response => { 
                console.log(response)
                this.setState({edit:false})
            })
            .catch(error => {
                console.log(error.response)
            });
        } else{
            axios.post(`http://127.0.0.1:8000/api/proyecciones/`,{
                fecha: this.state.fecha,
                inicio: this.state.hora,
                id_salas: this.state.sala,
                id_pelicula: this.state.idPeli,
                asientos_vendidos: 4.0,
                existo: 0
            }).then(response => { 
                console.log(this.state)
                this.setState({edit:false})
            })
            .catch(error => {
                console.log(error.response)
            });
        }
    }

    handleClose(){
        console.log('entro')
        this.setState({edit:false})
    }
    render() {
        return (

            <>
            <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Proy" aria-expanded="false" aria-controls="Proy"><b>Funciones</b></button>
                    <span><button className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggProy2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                </div>

                <div className="collapse" id="Proy">
                <table class="table table-dark table-hover table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora de Inicio</th>
                        <th scope="col">Sala</th>
                        <th scope="col">Pelicula</th>
                        <th scope="col">Asientos Vendidos</th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.proy.map(proyeccion => (
                        <tr >
                            <th key={proyeccion.id} scope="row">{proyeccion.id}</th>
                            <td>{proyeccion.fecha}</td>
                            <td>{proyeccion.inicio}</td>
                            <td>{proyeccion.id_salas}</td>
                            <td>{proyeccion.id_pelicula}</td>
                            <td>{proyeccion.asientos_vendidos}</td>
                            <td><span><button data-toggle="modal" data-target="#AggProy" onClick={this.handleEdit.bind(this,proyeccion)}className="btn btn-warning btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                            </svg></button></span></td>
                            <td><span><button className="btn btn-danger btn-sm container-fluid" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                            </svg></button></span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>


                <div class="modal fade" id="AggProy" tabindex="-1" role="dialog" aria-labelledby="AggProy" aria-hidden="true">
                <div class="modal-dialog table-dark">
                <div class="modal-content table-dark">
                    <div class="modal-header table-dark">
                        <h3 class="modal-title table-dark">Agregar Función</h3>
                        <button type="button" class="btn btn-danger" onClick={this.handleClose} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div>
                                <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                <br />
                                <label className="text-dark">Fecha</label>
                                <input defaultValue={this.state.fecha}onChange={this.handleFecha} type="date" class="form-control"  />
                                <br />
                                <label className="text-dark">Hora de Inicio</label>
                                <input defaultValue={this.state.hora}onChange={this.handleHora} type="time" class="form-control" />
                                <br />
                                <label className="text-dark">Sala</label>
                                <select defaultValue={this.state.sala}class="form-control form-control-sm" id="Sala" onChange={this.handleSala}>
                                    {this.state.salas.map(sala => (
                                        <option>{sala.id}</option>
                                    ))}
                                </select>
                                <br />
                                <label className="text-dark">Pelicula</label>
                                <select class="form-control form-control-sm" id="Pelicula" onChange={this.handlePelicula}>
                                    {this.state.movies.map(movie => (
                                        <option>{movie.id}{movie.title}</option>
                                    ))}
                                </select>
                                <br />
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer table-dark">
                        <button type="button" class="btn btn-secondary" onClick={this.handleClose} data-dismiss="modal">Cerrar</button>
                        <button type="button" onClick={this.handleClick}class="btn btn-primary">Editar</button>
                    </div>
                </div>
            </div>
                </div>

                <div class="modal fade" id="AggProy2" tabindex="-1" role="dialog" aria-labelledby="AggProy2" aria-hidden="true">
                <div class="modal-dialog table-dark">
                <div class="modal-content table-dark">
                    <div class="modal-header table-dark">
                        <h3 class="modal-title table-dark">Agregar Función</h3>
                        <button type="button" class="btn btn-danger" onClick={this.handleClose} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div>
                                <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                <br />
                                <label className="text-dark">Fecha</label>
                                <input onChange={this.handleFecha} type="date" class="form-control"  />
                                <br />
                                <label className="text-dark">Hora de Inicio</label>
                                <input onChange={this.handleHora} type="time" class="form-control" />
                                <br />
                                <label className="text-dark">Sala</label>
                                <select class="form-control form-control-sm" id="Sala" onChange={this.handleSala}>
                                    {this.state.salas.map(sala => (
                                        <option>{sala.id}</option>
                                    ))}
                                </select>
                                <br />
                                <label className="text-dark">Pelicula</label>
                                <select class="form-control form-control-sm" id="Pelicula" onChange={this.handlePelicula}>
                                    {this.state.movies.map(movie => (
                                        <option>{movie.id}{movie.title}</option>
                                    ))}
                                </select>
                                <br />
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer table-dark">
                        <button type="button" onClick={this.handleClose} class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" onClick={this.handleClick}class="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
                </div>
            </>
            

        )
   
}
}
