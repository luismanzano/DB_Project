import React, {Component} from 'react'
import './styles/Cartelera.css'
import axios from 'axios'
import comprar from './images/comprar.png'
import trailer from './images/trailer.png'
import {Link} from 'react-router-dom'

const url = `http://127.0.0.1:8000/api/movies/`

export default class Cartelera extends Component{

    constructor(...props){
        super(...props)

        this.state={
            movies:[]
        }
    }

    

        componentDidMount(){
            axios.get(url)
            .then(res=>{
               const movies = res.data.results;
               this.setState({movies:movies});
            })
        }

        render(){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-4 text-center gap-up white_color">
                            <h5>Cartelera</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-1 gap-up gap-down pelis">
                            {this.state.movies.map(movie =>(
                                console.log(movie.id),
                                <div className="contenedor">
                                    <img className="pelicula" src="https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg" alt=""/>
                                    <div className="comprar">
                                        <div className="row">
                                                <div className="col-md-4">
                                                <Link to={`/movieView/${movie.id}`} style={{color:'white', fontFamily:'Gill Sans'}} ><img id="select" src={comprar} alt=""/></Link>
                                                </div>
                                                <div className="col-md-4 offset-3">
                                                    <a href=""><img id="select2" src={trailer} alt=""/></a>
                                                </div>
                                        </div>
                                    </div>   
                                </div>
                            ))}
                        </div>
                    </div>   
                </div>
            )

            
        }
}



