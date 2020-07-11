import React, {Component} from 'react'
import './styles/Home.css'
import popcorn1 from './images/popcorn1.png'
import popcorn2 from './images/popcorn2.png'
import comprar from './images/comprar.png'
import trailer from './images/trailer.png'
import {Link} from 'react-router-dom'
import axios from 'axios'

var imagen = "https://lumiere-a.akamaihd.net/v1/images/ba66734fc3379a905313db81d359b611_2737x4096_967d8263.jpeg"


export default class Home extends Component{
    constructor(...props){
        super(...props)

        this.state={
            top5:[]
        }
    }
    
    componentDidMount(){
        const url = `http://127.0.0.1:8000/api/top5/`
        axios.get(url).then(res=>{
            const top5 = res.data.results
            this.setState({top5:top5})
            console.log(this.state)
        })
    }

    render(){
        return(
            <div>

                <div className="row">
                    <div className="col-md-10 offset-1 gap-up fondoMorado gap-down">
                        <div className="row gap-down">
                            <div className="col-md-4 white_color offset-4 text-center gap-up">
                                <h5>Top 5</h5>
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row gap-down">
                                    <div className="col-md-1"></div>
                                    {this.state.top5.map(movie=>(
                                        <div key={movie.id} className="col-md-2">
                                            <div className="contenedor">
                                                <Link to={`/movieView/${movie.id}`} style={{color:'white', fontFamily:'Gill Sans'}} >
                                                    <img className="pelicula" src={movie.thumbnail} alt=""/>
                                                </Link>  
                                                <div className="comprar">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <Link to={`/movieView/${movie.id}`} style={{color:'white', fontFamily:'Gill Sans'}} ><img id="select" src={comprar} alt=""/></Link>
                                                        </div>
                                                        <div className="col-md-4 offset-3">
                                                            <img id="select2" src={trailer} alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-1 gap-up fondoMorado gap-down secretCombo">
                        <Link to="/alimentos" style={{color:'white', fontFamily:'Gill Sans', textDecoration:'none'}}>
                            <div className="row">
                                <div className="col-md-2">
                                    <img id="popcorn" src={popcorn1} alt=""/>
                                </div>
                                <div className="col-md-8 gap-up gap-down text-center align-items-center">
                                    <h5 id="secret">The Secret Combos</h5>
                                </div>
                                <div className="col-md-2 gap-down">
                                    <img id="popcorn2"src={popcorn2} alt=""/>
                                </div>
                            </div>
                        
                        
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}