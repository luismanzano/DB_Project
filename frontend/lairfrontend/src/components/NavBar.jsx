import React from 'react'
import './styles/NavBar.css'
import {Link} from 'react-router-dom'


const NavBar = () =>(
    
            <div className="col-md-10 navbar offset-1 gap-up">
                    <div className="col-md-2">
                        <Link to="/" style={{color:'white', fontFamily:'Gill Sans'}} ><h5>THE Lair</h5></Link>
                    </div>
                    <div className="col-md-2">
                        <Link to="/cartelera" style={{color:'white', fontFamily:'Gill Sans'}}><h5>Cartelera</h5></Link>
                    </div>
                    <div className="col-md-2">
                        <Link to="/alimentos" style={{color:'white', fontFamily:'Gill Sans'}}><h5>Alimentos</h5></Link>
                    </div>
                    <div className="col-md-2">
                        <Link to="/contacto" style={{color:'white', fontFamily:'Gill Sans'}}><h5>Contáctanos</h5></Link>
                    </div>
                    <div className="col-md-2">
                        <Link to="/admin"style={{color:'white', fontFamily:'Gill Sans'}} ><h5>Administrador</h5></Link>
                    </div>
            </div>
)

export default NavBar