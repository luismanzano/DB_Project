import React from 'react'

import TabAliment from './TabAliment'
import TabPeli from './TabPeli'
import TabProyec from './TabProyec'
import TabCombo from './TabCombo'
import ModalCombo from './ModalCombo'
import ModalProyec from './ModalProyec'


const Administrador = () => (
    <div className="container">
        <div className="row">

            <div className="col-md-10 offset-1 gap-up">

                    <TabAliment />


            </div>
            <div className="col-md-10 offset-1 gap-up gap-down">

                <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Combo" aria-expanded="false" aria-controls="Combo"><b>Combo</b></button>
                    <span><button className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggCombo"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                </div>

                <div className="collapse" id="Combo">
                    <TabCombo />
                </div>

                <div class="modal fade" id="AggCombo" tabindex="-1" role="dialog" aria-labelledby="AggCombo" aria-hidden="true">
                    <ModalCombo />
                </div>

            </div>

            <div className="col-md-10 offset-1 gap-up">

                
                    <TabPeli />
            

            </div>
            

            <div className="col-md-10 offset-1 gap-up gap-down">

                <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Proy" aria-expanded="false" aria-controls="Proy"><b>Funciones</b></button>
                    <span><button className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggProy"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                </div>

                <div className="collapse" id="Proy">
                    <TabProyec />
                </div>

                <div class="modal fade" id="AggProy" tabindex="-1" role="dialog" aria-labelledby="AggProy" aria-hidden="true">
                    <ModalProyec />
                </div>

            </div>    

        </div>
    </div>
)

export default Administrador