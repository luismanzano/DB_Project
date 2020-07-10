import React from 'react';
import axios from 'axios';

const ModalCombo = () => (

    <div class="modal-dialog table-dark">
        <div class="modal-content table-dark">
            <div class="modal-header table-dark">
                <h3 class="modal-title table-dark">Agregar Combo</h3>
                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <form action="">
                    <div>
                        <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                        <br />
                        <label class="sr-only">Fecha</label>
                        <input type="date" class="form-control" placeholder="Fecha" />
                        <br />
                        <label class="sr-only">Hora de Inicio</label>
                        <input type="time" class="form-control" placeholder="Hora de Inicio" />
                        <br />
                        <label class="sr-only">Sala</label>
                        <select class="form-control form-control-sm">
                            <option>DROPDOWN</option>
                        </select>
                        <br />
                        <input type="text" class="form-control" placeholder="Sala" />
                        <br />
                        <label class="sr-only">Pelicula</label>
                        <select class="form-control form-control-sm">
                            <option>DROPDOWN</option>
                        </select>
                        <br />
                    </div>

                </form>
            </div>
            <div class="modal-footer table-dark">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Agregar</button>
            </div>
        </div>
    </div>

)

export default ModalCombo;
