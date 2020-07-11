import React, { Component } from 'react'
import axios from 'axios'

export default class TabPeli extends Component {

    constructor(props) {
        super(props)
        this.state = {
            peli: [],
            edit:false,
            idEdit:Number,
            titulo:'',
            duracion:Number,
            director:'',
            genero:'',
            idioma:'',
            sipnosis:'',
            imagen:'',
            edit:false,
            idEditar:Number,
            reparto:''
        }
        this.handleTitulo=this.handleTitulo.bind(this)
        this.handleDuracion=this.handleDuracion.bind(this)
        this.handleDirector=this.handleDirector.bind(this)
        this.handleGenero=this.handleGenero.bind(this)
        this.handleIdioma=this.handleIdioma.bind(this)
        this.handleSipnosis=this.handleSipnosis.bind(this)
        this.handleImagen=this.handleImagen.bind(this)
        this.handleModify=this.handleModify.bind(this)
        this.handleReparto=this.handleReparto.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }
    componentDidMount() {
        const url1 = `http://127.0.0.1:8000/api/movies/`
        axios.get(url1).then(res => {
            this.setState({ peli: res.data.results })
        })
    }
    
    handleClick(e){
        this.setState({edit:true,idEditar:e.id});
        this.setState({titulo:e.title,duracion:e.duration,director:e.director,genero:e.genre,idioma:e.language,sipnosis:e.synopsis,reparto:e.reparto})
    } 
    handleTitulo(e){this.setState({titulo:e.target.value})}
    handleDuracion(e){this.setState({duracion:e.target.value})}
    handleDirector(e){this.setState({director:e.target.value})}
    handleGenero(e){this.setState({genero:e.target.value})}
    handleIdioma(e){this.setState({idioma:e.target.value})}
    handleSipnosis(e){this.setState({sipnosis:e.target.value})}
    handleImagen(){
       const x = document.getElementById("imagen").files[0].name; 
       this.setState({imagen:x})
       console.log(this.state.imagen)
    }
    handleReparto(e){this.setState({reparto:e.target.value})}

    handleModify(){
        const url = "http://127.0.0.1:8000/media/images.jpg/" + this.state.imagen + "/"
        console.log(url)
        console.log('entro aqui')
        if(this.state.titulo==''||this.state.reparto==''||this.state.director==''||this.state.genero==''||this.state.idioma==''||this.state.sipnosis==''||this.state.imagen==null||this.state.duracion==0){
            alert("Porfavor rellene todos los campos")
        } else if(this.state.edit){
            axios.put(`http://127.0.0.1:8000/api/movies/${this.state.idEditar}/`,{
                id: this.state.idEditar,
                title: this.state.titulo,
                duration: this.state.duracion,
                reparto: this.state.reparto,
                showing: true,
                director: this.state.director,
                genre: this.state.genero,
                language: this.state.idioma,
                synopsis: this.state.sipnosis,
                thumbnail: this.state.imagen
            }).then(response => { 
                this.setState({edit:false})
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
        } else{
            axios.post(`http://127.0.0.1:8000/api/movies/`,{
                title: this.state.titulo,
                duration: this.state.duracion,
                reparto: this.state.reparto,
                showing: true,
                director: this.state.director,
                genre: this.state.genero,
                language: this.state.idioma,
                synopsis: this.state.sipnosis,
            }).then(response => { 
                console.log(response)
                this.setState({edit:false})
                this.setState({nombre:'',costo:0,cantidad:0,categoria:'',caducidad:0})
            })
            .catch(error => {
                console.log(error.response)
            });
        }
    }

    handleClose(){
        this.setState({edit:false})
    }

    render() {
        return (
            <>

                <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Peli" aria-expanded="false" aria-controls="Peli"><b>Peliculas</b></button>
                    {this.state.edit?
                     null
                :
                <span><button className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggPeli2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                }
                    
                    
                </div>
                <div className="collapse" id="Peli">
                <table class="table table-dark table-hover table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Director</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Idioma</th>
                        <th scope="col">Proyecciones</th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.peli.map(pelicula => (
                        <tr>
                            <th id={pelicula.id} scope="row">{pelicula.id}</th>
                            <td>{pelicula.title}</td>
                            <td>{pelicula.duration}</td>
                            <td>{pelicula.director}</td>
                            <td>{pelicula.genre}</td>
                            <td>{pelicula.language}</td>
                            <td>{pelicula.showing ? 'Si' : '$No'}</td>
                            <td><span><button onClick={this.handleClick.bind(this,pelicula)} data-toggle="modal" data-target="#AggPeli" className="btn btn-warning btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                            </svg></button></span></td>
                            <td><span><button className="btn btn-danger btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                            </svg></button></span></td>
                        </tr>
                    ))}
                </tbody>
                
            </table>

                </div>

                <div class="modal fade" id="AggPeli2" tabindex="-1" role="dialog" aria-labelledby="AggPeli2" aria-hidden="true">
                <div class="modal-dialog table-dark">
                <div class="modal-content table-dark">
                    <div class="modal-header table-dark">
                        <h3 class="modal-title table-dark">Agregar Pelicula</h3>
                        <button type="button" class="btn btn-danger" onClick={this.handleClose} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div>
                                <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                <br />
                                <label className="text-dark">Titulo</label>
                                <input type="text" class="form-control" onChange={this.handleTitulo} />
                                <br />
                                <label className="text-dark">Duración</label>
                                <input type="number" class="form-control" onChange={this.handleDuracion} />
                                <br />
                                <label className="text-dark">Director</label>
                                <input type="text" class="form-control" onChange={this.handleDirector} />
                                <br />
                                <label className="text-dark">Genero</label>
                                <input type="text" class="form-control"  onChange={this.handleGenero}/>
                                <br />
                                <label className="text-dark">Idioma</label>
                                <input type="text" class="form-control" onChange={this.handleIdioma} />
                                <br />
                                <label className="text-dark">Sinopsis</label>
                                <textarea class="form-control"  rows="3" onChange={this.handleSipnosis}></textarea>
                                <br />
                                <label className="text-dark">Reparto</label>
                                <textarea class="form-control"  rows="3" onChange={this.handleReparto}></textarea>
                                <br />
                                <label className="text-dark">Subir Imagen</label>
                                <input type="file" id="imagen" class="form-control-file table light" onChange={this.handleImagen}></input>
                                <br />
                                

                            </div>

                        </form>
                    </div>
                    <div class="modal-footer table-dark">
                        <button type="button" onClick={this.handleClose} class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" onClick={this.handleModify}class="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
                </div>


                <div class="modal fade" id="AggPeli" tabindex="-1" role="dialog" aria-labelledby="AggPeli" aria-hidden="true">
                <div class="modal-dialog table-dark">
                <div class="modal-content table-dark">
                    <div class="modal-header table-dark">
                        <h3 class="modal-title table-dark">Agregar Pelicula</h3>
                        <button type="button" class="btn btn-danger" onClick={this.handleClose} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div>
                                <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                <br />
                                <label className="text-dark">Titulo</label>
                                <input value={this.state.titulo} type="text" class="form-control"  onChange={this.handleTitulo}/>
                                <br />
                                <label className="text-dark">Duración</label>
                                <input value={this.state.duracion} type="number" class="form-control"  onChange={this.handleDuracion}/>
                                <br />
                                <label className="text-dark">Director</label>
                                <input type="text" value={this.state.director} class="form-control" onChange={this.handleDirector} />
                                <br />
                                <label className="text-dark">Genero</label>
                                <input type="text" value={this.state.genero} class="form-control"  onChange={this.handleGenero}/>
                                <br />
                                <label className="text-dark">Idioma</label>
                                <input type="text" value={this.state.idioma} class="form-control" onChange={this.handleIdioma} />
                                <br />
                                <label className="text-dark">Sinopsis</label>
                                <textarea class="form-control" value={this.state.sipnosis} rows="3" onChange={this.handleSipnosis}></textarea>
                                <br />
                                <label className="text-dark">Reparto</label>
                                <textarea class="form-control"  rows="3" onChange={this.handleReparto}></textarea>
                                <br />
                                <label className="text-dark">Subir Imagen</label>
                                <input type="file" id="imagen" class="form-control-file table light" onChange={this.handleImagen}></input>
                                <br />
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer table-dark">
                        <button type="button" onClick={this.handleClose} class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button onClick={this.handleModify} type="button" class="btn btn-primary">Editar</button>
                    </div>
                </div>
            </div>
                </div>
            
            </>
        )
    }
}