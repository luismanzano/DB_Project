import React, {Component} from 'react'
import './styles/NavBar.css'


export default class NavBar extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-10 navbar offset-1 gap-up">
                    <div className="col-md-2 opciones">THE Lair</div>
                    <div className="col-md-2 opciones">Cartelera</div>
                    <div className="col-md-2 opciones">Alimentos</div>
                    <div className="col-md-2 opciones">Contáctanos</div>
                    <div className="col-md-2 opciones">Administrador</div>
                </div>
            </div>
            
        )
    }
}
