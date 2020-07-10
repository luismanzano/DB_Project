import React, {Component} from 'react'
import './styles/MovieView.css'
import axios from 'axios'
import comprar from './images/comprar.png'
import {Link} from 'react-router-dom'


export default class MovieView extends Component{
    
    constructor(...props){
        super(...props)

        this.contador=0
        this.x=0

        this.state={
            movie: Object,
            funciones:[],
            salas:[],
            asientosVendidos:[]
        }
        this.sumaContador=this.sumaContador.bind(this);
        this.reiniciarContador=this.reiniciarContador.bind(this);
    }

    componentDidMount(){
        const {match} = this.props
        const {params} = match
        const{id} = params
        const url= `http://127.0.0.1:8000/api/movies/${id}`
        const url2=`http://127.0.0.1:8000/api/proyeccionesPelicula/${id}`
        console.log(url2)
        axios.get(url)
        .then(res=>{
           const movies = res.data;
           this.setState({movie:movies});
        })

        axios.get(url2)
        .then(res=>{
            const funciones = res.data.results;
            this.setState({funciones:funciones})
            this.state.funciones.map(funcion=>{
                axios.get(`http://127.0.0.1:8000/api/salas/${funcion.id_salas}`)
                .then(res=>{
                    const sala = res.data.asientos_totales
                    this.setState({salas:this.state.salas.concat([sala])})
                })
                axios.get(`http://127.0.0.1:8000/api/asientosOcupados/${funcion.id}`).then(res=>{
                    const asiento = res.data.count
                    this.setState({asientosVendidos:this.state.asientosVendidos.concat([asiento])})
                    console.log(this.state)
                })
            })
        }) 
    }
    sumaContador(){
        this.contador=this.contador+1;
      } 

    reiniciarContador(){
        this.contador=0;
      } 

     

    render(){
        return(

            <div>
            <div className="row gap-up gap-down">
                <div className="col-md-3 imagen">
                    <div className="row">
                        <div className="col-md-12">
                            <img id="imagen" src={this.state.movie.thumbnail} alt=""/>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <p className="texto"> <span id="director">Director:</span> {this.state.movie.director}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12"><h2 className="white_color titulo">{this.state.movie.title}</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="titulo2">Reparto:</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-justify">
                                    <p className="texto">{this.state.movie.reparto}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="row">
                                <div className="col-md-12">
                                    <p className="titulo2">Género:</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="texto">{this.state.movie.genre}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row">
                                <div className="col-md-12">
                                    <p className="titulo2">Duración:</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="texto">{this.state.movie.duration} minutos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="titulo2">Sipnosis:</p> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 sip text-justify">
                                    <p className="sipnosis texto">{this.state.movie.synopsis}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-10 offset-1">
                    <div className="row funciones text-center">
                        <div className="col-md-12 white_color funcion"><h5>Funciones</h5></div>
                    </div>
                </div>
            </div>
            {this.state.funciones.length==0?
            <div className="row gap-up">
                <div className="col-md-12 text-center"><h5 className="white_color">No hay Funciones Disponibles</h5></div>
            </div>
            :<div className="row gap-up">
            <div className="col-md-10 offset-1">
            <table className="table">
                <thead className="fondoMorado">
                    <tr>
                    <th className="white_color" scope="col">Hora</th>
                    <th className="white_color" scope="col">Idioma</th>
                    <th className="white_color" scope="col">Modalidad</th>
                    <th className="white_color" scope="col">Disponibilidad</th>
                    <th className="white_color" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.funciones.map(funcion=>(
                            <tr key={funcion.id}>
                                <td scope="row">{funcion.inicio}</td>
                                <td>{this.state.movie.language}</td>
                                <td></td>
                                <td scope="row">{this.x = this.state.salas[this.contador]-this.state.asientosVendidos[this.contador]}</td>
                                {this.sumaContador()}
                                <td><Link to={`/comprarFuncion/${funcion.id}`} style={{color:'white', fontFamily:'Gill Sans'}} ><img id="botonCompra" src={comprar} alt=""/></Link></td>
                            </tr> 
                    ))}
                </tbody>
                {this.reiniciarContador()}
            </table>
            </div>
        </div>
        }  
        </div>  
        )
    }
}