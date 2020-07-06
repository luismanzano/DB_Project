import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Administrador = () => (
    <div className="container">
        <NavBar />
        <div className="row">

            <div className="col-md-10 fondoGris offset-1 gap-up">

                <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Alim" aria-expanded="false" aria-controls="Alim"><b>Alimentos</b></button>
                    <span><button className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggAlim"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                </div>

                <div className="collapse" id="Alim">
                    <table class="table table-dark table-hover table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Costo</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Caducidad</th>
                                <th scope="col"> </th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><span><button className="btn btn-warning btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                    <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                </svg></button></span></td>
                                <td><span><button className="btn btn-danger btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                                </svg></button></span></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="AggAlim" tabindex="-1" role="dialog" aria-labelledby="AggAlim" aria-hidden="true">
                    <div class="modal-dialog table-dark">
                        <div class="modal-content table-dark">
                            <div class="modal-header table-dark">
                                <h3 class="modal-title">Agregar Alimento</h3>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body ">
                                <form action="">
                                    <div>
                                        <label className="text-dark">Por favor rellene todos los campos</label>
                                        <br />
                                        <label class="sr-only">Nombre</label>
                                        <input type="text" class="form-control" placeholder="Nombre" />
                                        <br />
                                        <label class="sr-only">Costo</label>
                                        <input type="text" class="form-control" placeholder="Costo" />
                                        <br />
                                        <label class="sr-only">Cantidad</label>
                                        <input type="text" class="form-control" placeholder="Cantidad" />
                                        <br />
                                        <label class="sr-only">Categoria</label>
                                        <input type="text" class="form-control" placeholder="Categoria" />
                                        <br />
                                        <label class="sr-only">Caducidad</label>
                                        <input type="text" class="form-control" placeholder="Caducidad" />
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
                </div>

            </div>

            <div className="col-md-10 fondoGris offset-1 gap-up">

                <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Peli" aria-expanded="false" aria-controls="Peli"><b>Peliculas</b></button>
                    <span><button className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggPeli"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                </div>

                <div className="collapse" id="Peli">
                    <table class="table table-dark table-hover table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Duracion</th>
                                <th scope="col">Director</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Idioma</th>
                                <th scope="col">Proyecciones</th>
                                <th scope="col"> </th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><span><button className="btn btn-warning btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                    <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                </svg></button></span></td>
                                <td><span><button className="btn btn-danger btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                                </svg></button></span></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="AggPeli" tabindex="-1" role="dialog" aria-labelledby="AggPeli" aria-hidden="true">
                    <div class="modal-dialog table-dark">
                        <div class="modal-content table-dark">
                            <div class="modal-header table-dark">
                                <h3 class="modal-title table-dark">Agregar Pelicula</h3>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <div>
                                        <label className="text-dark">Por favor rellene todos los campos</label>
                                        <br />
                                        <label class="sr-only">Titulo</label>
                                        <input type="text" class="form-control" placeholder="Titulo" />
                                        <br />
                                        <label class="sr-only">Duración</label>
                                        <input type="text" class="form-control" placeholder="Duración" />
                                        <br />
                                        <label class="sr-only">Director</label>
                                        <input type="text" class="form-control" placeholder="Director" />
                                        <br />
                                        <label class="sr-only">Genero</label>
                                        <input type="text" class="form-control" placeholder="Genero" />
                                        <br />
                                        <label class="sr-only">Idioma</label>
                                        <input type="text" class="form-control" placeholder="Idioma" />
                                        <br />
                                        <label class="sr-only">Proyecciones</label>
                                        <input type="text" class="form-control" placeholder="Proyecciones" />
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
                </div>

            </div>

            <div className="col-md-10 fondoGris offset-1 gap-up">

                <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Proy" aria-expanded="false" aria-controls="Proy"><b>Proyecciones</b></button>
                    <span><button className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggProy"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                </div>

                <div className="collapse" id="Proy">
                    <table class="table table-dark table-hover table-bordered table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora de Inicio</th>
                                <th scope="col">Sala</th>
                                <th scope="col">Pelicula</th>
                                <th scope="col">Asientos Vendidos</th>
                                <th scope="col"> </th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><span><button className="btn btn-warning btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                    <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                </svg></button></span></td>
                                <td><span><button className="btn btn-danger btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                                </svg></button></span></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal fade" id="AggProy" tabindex="-1" role="dialog" aria-labelledby="AggProy" aria-hidden="true">
                    <div class="modal-dialog table-dark">
                        <div class="modal-content table-dark">
                            <div class="modal-header table-dark">
                                <h3 class="modal-title table-dark">Agregar Alimento</h3>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <div>
                                        <label className="text-dark">Por favor rellene todos los campos</label>
                                        <br />
                                        <label class="sr-only">Fecha</label>
                                        <input type="text" class="form-control" placeholder="Fecha" />
                                        <br />
                                        <label class="sr-only">Hora de Inicio</label>
                                        <input type="text" class="form-control" placeholder="Hora de Inicio" />
                                        <br />
                                        <label class="sr-only">Sala</label>
                                        <input type="text" class="form-control" placeholder="Sala" />
                                        <br />
                                        <label class="sr-only">Pelicula</label>
                                        <input type="text" class="form-control" placeholder="Pelicula" />
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
                </div>

            </div>

        </div>
        <Footer />
    </div>
)

export default Administrador