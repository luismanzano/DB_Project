import React, {Component} from 'react'
import Home from './Home'
import Cartelera from './Cartelera'
import Alimentos from './Alimentos'
import Contacto from './Contacto'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './NavBar'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom'
import Footer from './Footer'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Administrador from './Administrador';
import MovieView from './MovieView';
import ComprarFuncion from './ComprarFuncion'

class App extends Component{
    constructor(...props){
        super(...props)

        this.state={

        }
    }

    render(){
        return(
            <div className="fondo">
                <Router>
                    <div className="row">
                        <NavBar/>
                    </div>

                    <div className="row">
                        <div className="col-md-10 fondoGris offset-1 gap-up gap-down">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/cartelera" component={withRouter(Cartelera)}/>
                                <Route exact path="/alimentos" exact component={Alimentos}/>
                                <Route exact path="/contacto" exact component={Contacto}/>
                                <Route exact path="/admin" exact component={Administrador}/>
                                <Route exact path="/movieView/:id" exact component={MovieView}/>
                                <Route exact path="/comprarFuncion/:id" exact component={ComprarFuncion}/>
                            </Switch>
                        </div>
                    </div>

                    <div className="row">
                        <Footer/>
                    </div>
                </Router>
            </div>
            
        )
    }
}

export default App