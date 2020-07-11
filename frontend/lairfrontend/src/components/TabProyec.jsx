import React, { Component } from 'react'
import axios from 'axios'

export default class TabProyec extends Component {

    constructor(props) {
        super(props)
        this.state = {
            proy: []
        }
        this.deleteProy=this.deleteProy.bind(this)
    }
    componentDidMount() {
        const url1 = `http://127.0.0.1:8000/api/proyecciones/`
        axios.get(url1).then(res => {
            this.setState({ proy: res.data.results })
        })
    }
    deleteProy(k, e){

        e.preventDefault();
            console.log('la maldita k', k)
            let parametro = k.id.toString()
        axios.get(`http://127.0.0.1:8000/api/asientosOcupados/${parametro}`).then(res => {
            console.log('Asientos Ocupados Get', res)
            let array = res.data.results;
            array.forEach(element => {
                console.log(element)
                axios.delete(`http://127.0.0.1:8000/api/asientos/${element.id}`).then(res => {
                    console.log('el asiento ocupado es', res)
                })
            });
        })
        
        axios.put(`http://127.0.0.1:8000/api/proyecciones/${parametro}/`, {
            id: parseInt(k.id),
            fecha: k.fecha,
            inicio: k.inicio.toString(),
            id_salas: k.salas,
            id_pelicula: k.id_pelicula,
            asientos_vendidos: k.asientos_vendidos,
            exists: 0
        }
            )

        /** , {
            fecha: k.fecha,
            inicio: k.inicio,
            id_salas: k.salas,
            id_pelicula: k.id_pelicula,
            asientos_vendidos: k.asientos_vendidos,
            exists: 0
        } */
        
    }
    render() {
        const { proy } = this.state
        return (
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
                    {proy.map(proyeccion => (
                        <tr >
                            <th key={proyeccion.id} scope="row">{proyeccion.id}</th>
                            <td>{proyeccion.fecha}</td>
                            <td>{proyeccion.inicio}</td>
                            <td>{proyeccion.id_salas}</td>
                            <td>{proyeccion.id_pelicula}</td>
                            <td>{proyeccion.asientos_vendidos}</td>
                            <td><span><button className="btn btn-warning btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                            </svg></button></span></td>
                            <td><span><button className="btn btn-danger btn-sm container-fluid" onClick={(e)=>this.deleteProy(proyeccion, e)}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                            </svg></button></span></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        )
   
}
}
