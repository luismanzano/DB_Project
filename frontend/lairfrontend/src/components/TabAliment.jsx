import React, { Component } from 'react'
import axios from 'axios'

export default class TabAliment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            alimento: []
        }
    }
    componentDidMount() {
        const url1 = `http://127.0.0.1:8000/api/alimentos/`
        axios.get(url1).then(res => {
            this.setState({ alimento: res.data.results })
        })
    }
    render() {
        const { alimento } = this.state
        return (
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
                    {alim.map(alimento => (
                        <tr>
                            <th key={alimento.id} scope="row">{alimento.id}</th>
                            <td>{alimento.nombre}</td>
                            <td>{alimento.costo}</td>
                            <td>{alimento.cantidad}</td>
                            <td>{alimento.categoria}</td>
                            <td>{alimento.caducidad}</td>
                            <td><span><button className="btn btn-warning btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                            </svg></button></span></td>
                            <td><span><button className="btn btn-danger btn-sm container-fluid"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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