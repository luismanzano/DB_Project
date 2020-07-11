import React, { Component } from 'react'
import axios from 'axios'


export default class TabAliment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            alimento: [],
            nombre:'',
            costo:Number,
            cantidad:Number,
            categoria:'',
            caducidad:Date,
            count:Number,
            edit:false,
            idEditar:Number
        }

        this.handleEdit=this.handleEdit.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleName=this.handleName.bind(this)
        this.handleCosto=this.handleCosto.bind(this)
        this.handleCantidad=this.handleCantidad.bind(this)
        this.handleCategoria=this.handleCategoria.bind(this)
        this.handleCaducidad=this.handleCaducidad.bind(this)
        this.handleClose=this.handleClose.bind(this)
        this.resetValue=this.resetValue.bind(this)
    }
    componentDidMount() {
        const url1 = `http://127.0.0.1:8000/api/alimentos/`
        axios.get(url1).then(res => {
            const alimento = res.data.results
            this.setState({ alimento: alimento, count:res.data.count })
            console.log(this.state)
        })
    }

    handleName(e){this.setState({nombre:e.target.value})}
    handleCosto(e){this.setState({costo:e.target.value})}
    handleCantidad(e){this.setState({cantidad:e.target.value})}
    handleCategoria(e){this.setState({categoria:e.target.value})}
    handleCaducidad(e){this.setState({caducidad:e.target.value})}

    handleEdit(){
        if(this.state.name==''||this.state.costo==0||this.state.cantidad==0||this.state.categoria==''){
            alert("Porfavor rellene todos los campos")
        } else if(this.state.edit){
            console.log('Entre aqui')
            axios.put(`http://127.0.0.1:8000/api/alimentos/${this.state.idEditar}/`,{
                id: this.state.idEditar,
                nombre: this.state.nombre,
                costo: this.state.costo,
                cantidad: this.state.cantidad,
                categoria: this.state.categoria,
                caducidad: this.state.caducidad,
                id_producto: 1
            }).then(response => { 
                console.log(response)
                this.setState({edit:false})
            })
            .catch(error => {
                console.log(error.response)
            });
        } else{
            axios.post(`http://127.0.0.1:8000/api/alimentos/`,{
                nombre: this.state.nombre,
                costo: this.state.costo,
                cantidad: this.state.cantidad,
                categoria: this.state.categoria,
                caducidad: this.state.caducidad,
                id_producto: 1
            }).then(response => { 
                console.log(this.state)
                this.setState({edit:false})
            })
            .catch(error => {
                console.log(error.response)
            });
        }
    }

    handleClick(e){
        this.setState({edit:true,idEditar:e.id});
        this.setState({nombre:e.nombre,costo:e.costo,cantidad:e.cantidad,categoria:e.categoria,caducidad:e.caducidad})
        this.setState({categoria:e.categoria})
        console.log(this.state.categoria, e.categoria)
    }

    handleClose(){
        console.log('entro')
        this.setState({edit:false})
    }

    resetValue(){
        this.setState({edit:false});
        this.setState({nombre:'',costo:0,cantidad:0,categoria:'',caducidad:0})
    }

    render() {
        return (
            <>
             <div className="btn btn-group btn-group-lg toggle container-fluid">
                    <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#Alim" aria-expanded="false" aria-controls="Alim"><b>Alimentos</b></button>
                    {this.state.edit?
                        <span><button onClick={this.resetValue} className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggAlim"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                    :
                    <span><button onClick={this.resetValue} className="btn btn-success btn-lg pull-right" data-toggle="modal" data-target="#AggAlim2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button></span>
                    }
                    
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
                    {this.state.alimento.map(alimento => (
                        <tr>
                            <th key={alimento.id} scope="row">{alimento.id}</th>
                            <td>{alimento.nombre}</td>
                            <td>{alimento.costo}</td>
                            <td>{alimento.cantidad}</td>
                            <td>{alimento.categoria}</td>
                            <td>{alimento.caducidad}</td>
                            <td><span><button onClick={this.handleClick.bind(this,alimento)} className="btn btn-warning btn-sm container-fluid" data-toggle="modal" data-target="#AggAlim" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                            </svg></button></span></td>
                            <td><span><button className="btn btn-danger btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                            </svg></button></span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>

                
                <div class="modal fade" id="AggAlim" tabindex="-1" role="dialog" aria-labelledby="AggAlim" aria-hidden="true">
                <div class="modal-dialog table-dark">
                <div class="modal-content table-dark">
                    <div class="modal-header table-dark">
                        <h3 class="modal-title">Agregar Alimento</h3>
                        <button type="button" onClick={this.handleClose} class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body ">
                        <div>
                            <form >
                                <div>
                                    <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                    <br />
                                    <label className="text-dark">Nombre</label>
                                    <input type="text" defaultValue={this.state.nombre} class="form-control" onChange={this.handleName}/>
                                    <br />
                                    <div className="container-fluid form-inline">
                                        <div className="col-md-6">
                                            <label className="text-dark text-center">Costo</label>
                                            <input  defaultValue={this.state.costo} type="number"class="form-control" min="1" onChange={this.handleCosto}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-dark text-center">Cantidad</label>
                                            <input  defaultValue={this.state.cantidad} type="number" class="form-control" min="1" onChange={this.handleCantidad}/>
                                        </div>
                                    </div>
                                    <br />
                                    <label className="text-dark">Categoria</label>
                                    <input type="text"  defaultValue={this.state.categoria} class="form-control" onChange={this.handleCategoria}/>
                                    <br />
                                    <label className="text-dark">Caducidad</label>
                                    <input type="date"  defaultValue={this.state.caducidad} class="form-control" onChange={this.handleCaducidad} />
                                    <br />
                                </div>
                            </form>
                        </div>
                    </div>
                        <div class="modal-footer table-dark">
                            <button onClick={this.handleClose}type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button onClick={this.handleEdit} type="button" class="btn btn-primary">Editar</button>
                        </div>
                    
                </div>
            </div>
            </div> 
  
            <div class="modal fade" id="AggAlim2" tabindex="-1" role="dialog" aria-labelledby="AggAlim2" aria-hidden="true">
            <div class="modal-dialog table-dark">
            <div class="modal-content table-dark">
                <div class="modal-header table-dark">
                    <h3 class="modal-title">Agregar Alimento</h3>
                    <button type="button" onClick={this.handleClose} class="btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body ">
                    <div>
                        <form >
                            <div>
                                <label className="text-dark"><b>Por favor rellene todos los campos</b></label>
                                <br />
                                <label className="text-dark">Nombre</label>
                                <input type="text"  class="form-control" onChange={this.handleName}/>
                                <br />
                                <div className="container-fluid form-inline">
                                    <div className="col-md-6">
                                        <label className="text-dark text-center">Costo</label>
                                        <input   type="number"class="form-control" min="1" onChange={this.handleCosto}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-dark text-center">Cantidad</label>
                                        <input   type="number" class="form-control" min="1" onChange={this.handleCantidad}/>
                                    </div>
                                </div>
                                <br />
                                <label className="text-dark">Categoria</label>
                                <input type="text"   class="form-control" onChange={this.handleCategoria}/>
                                <br />
                                <label className="text-dark">Caducidad</label>
                                <input type="date"   class="form-control" onChange={this.handleCaducidad} />
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
              
                    <div class="modal-footer table-dark">
                        <button onClick={this.handleClose}type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button onClick={this.handleEdit} type="button" class="btn btn-primary">Agregar</button>
                    </div> 
                
            </div>
        </div>
        </div>
 
                  
            </>
           
        )
    } 
}