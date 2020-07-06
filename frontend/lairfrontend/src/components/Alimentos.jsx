import React, { Component } from 'react'
import NavBar from './NavBar'
import './styles/Alimentos.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import Footer from './Footer'
import Carrito from './Carrito'
import Combos from './Combos'
import Alimento from './Alimento'

const Alimentos = ()=>(
    <div className="container">
                <Router>
                    <div className="row gap-up">
                        <div className="col-md-4 text-right">
                            <Link to="/alimentos" style={{color:'white', fontFamily:'Gill Sans'}}> <h5>Alimentos</h5></Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link to="/combos" style={{color:'white', fontFamily:'Gill Sans'}}> <h5>Combos</h5></Link>
                        </div>
                        <div className="col-md-4 text-left">
                            <Link to="/carrito" style={{color:'white', fontFamily:'Gill Sans'}}> <h5>Carrito</h5></Link>
                        </div>
                    </div>
                <Route path="/alimentos" component={Alimento}/>
                <Route path="/combos" component={Combos}/>
                <Route path="/carrito" component={Carrito}/>
                </Router>
    </div>
)
export default Alimentos