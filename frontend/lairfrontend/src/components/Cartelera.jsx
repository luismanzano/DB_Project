import React, {Component} from 'react'
import NavBar from './NavBar'
import './styles/Cartelera.css'
import Footer from './Footer'

const Cartelera =()=>(
<div className="container">
    <div className="row">
        <div className="col-md-4 offset-4 text-center gap-up white_color">
            <h5>Cartelera</h5>
        </div>
    </div>
    <div className="row">
        <div className="col-md-10 offset-1 gap-up gap-down">
            Aqui van las peliculas
        </div>
    </div>   
</div>       
)
 
export default Cartelera