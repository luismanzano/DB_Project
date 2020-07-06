import React from 'react'
import './styles/Contacto.css'
import NavBar from './NavBar'
import Footer from './Footer'

const Contacto = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4 white_color gap-up text-center offset-4">
                <h5>Contáctanos</h5>
            </div>
        </div>

        <div className="row gap-up">
            <div className="col-md-10 offset-1 fondoMorado gap-down infoContacto">
                <div className="row gap-up text-center white_color">
                    <div className="col-md-6"> <h5>Nombre</h5></div>
                    <div className="col-md-6"> <h5>Apellido</h5></div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <input className="input" type="text"/>
                    </div>
                    <div className="col-md-6">
                        <input className="input" type="text"/>
                    </div>
                </div>
                <div className="row text-center gap-up white_color">
                    <div className="col-md-6"> <h5>Correo Electrónico</h5></div>
                    <div className="col-md-6"> <h5>Teléfono</h5></div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <input className="input" type="text"/>
                    </div>
                    <div className="col-md-6">
                        <input className="input" type="text"/>
                    </div>
                </div>

                <div className="row gap-up text-center white_color">
                    <div className="col-md-4 offset-4"><h5>Mensaje</h5></div>
                </div>

                <div className="row text-center gap-down">
                    <div className="col-md-12">
                        <textarea name="mensaje" id="mensaje" cols="" rows="5"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-10 offset-1 gap-down">
                <div className="row text-center">
                    <div className="col-md-3 offset-10">
                        <button className="boton">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Contacto