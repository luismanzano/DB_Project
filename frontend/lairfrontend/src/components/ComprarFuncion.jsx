import React, {Component} from 'react'
import './styles/ComprarFuncion.css'
import axios from 'axios'
import asientoDes from './images/asientoDes.png'
import asientoOc from './images/asientoOc.png'
import asientoSelec from './images/asientoSelec.png'


export default class ComprarFuncion extends Component{
    constructor(props){
        super(props)

        this.state={
            funcion: Object,
            sala: Object,
            filas:Number,
            columnas:Number,
            tabla:[],
            asientos:[],
            movie: Object,
            habTabla: false,
            asientoMostrar:0,
            totalPagar:0,
            name:'',
            lastName:'',
            email:'',
            ci:'',
            date:'',
            id:0,
            aSelected: []
            
        }

        this.cantEntrada=0
        this.asientosSelect=0
        this.entradaA=0
        this.entradaN=0
        this.total=0
        this.countId=0
        

        this.ocuparAsiento=this.ocuparAsiento.bind(this)
        this.handleChangeA=this.handleChangeA.bind(this)
        this.handleChangeN=this.handleChangeN.bind(this)
        this.habilitarTabla=this.habilitarTabla.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleName=this.handleName.bind(this)
        this.handleLastName=this.handleLastName.bind(this)
        this.handleEmail=this.handleEmail.bind(this)
        this.handleCi=this.handleCi.bind(this)
        this.handleDate=this.handleDate.bind(this)
        this.pagar=this.pagar.bind(this)
        this.ObtenerAsiSelec=this.ObtenerAsiSelec.bind(this)
    }

    componentDidMount(){
        const {match} = this.props
        const {params} = match
        const{id} = params
        this.setState({id:id})

        axios.get(`http://127.0.0.1:8000/api/asientos/`).then(res=>{
            const x = res.data.count
            this.countId=x
        })

        axios.get(`http://127.0.0.1:8000/api/proyecciones/${id}`).then(res=>{
            const funcion = res.data
            this.setState({funcion:funcion})
            const idSala=res.data.id_salas
            const idPelicula=res.data.id_pelicula
            axios.get(`http://127.0.0.1:8000/api/movies/${idPelicula}`).then(res=>{
                const movie = res.data
                this.setState({movie:movie})
            })
            axios.get(`http://127.0.0.1:8000/api/asientosOcupados/${id}`).then(res=>{
                    const asientos = res.data.results
                    this.setState({asientos:asientos})
                    axios.get(`http://127.0.0.1:8000/api/salas/${idSala}`).then(res=>{
                        const fila = res.data.filas
                        const colum = res.data.columnas
                        const sala = res.data
                        this.setState({filas:fila, columnas:colum})
                        this.setState({sala:sala})
                        let x = 0
                        let y = 0
                        console.log(fila,colum)
                        for(var i=0; i < this.state.filas; i++){
                            for(var j=0; j < this.state.columnas;j++){
                                this.setState({tabla:this.state.tabla.concat([{id:x, fila:i, columna:j, ocupado:false, imagen:asientoDes, selected:false}])})
                                x=x+1;
                            }
                        }
                        this.ocuparAsiento()
                x=0;
            })
                })
           
        }) 

        
    }


    ocuparAsiento(){
        for(var i=0; i<this.state.tabla.length; i++){
           this.state.asientos.map(asiento=>{
            if(asiento.fila==this.state.tabla[i].fila&&this.state.tabla[i].columna){
                let tabla = this.state.tabla;
                tabla[i].ocupado = true;
                tabla[i].imagen=asientoOc;
                this.setState({ tabla });
            } 
           }) 
        }
    }

    habilitarTabla(){
        if(this.cantEntrada==0){
            alert('Seleccione la cantidad de asientos')
            this.setState({habTabla:false})
        } else{
            this.state.tabla.map(asiento=>{
                if(asiento.imagen==asientoSelec){
                    let tabla = this.state.tabla;
                    tabla[asiento.id].imagen=asientoDes
                    this.setState({tabla})
                }
            })
            this.setState({habTabla:true})
            this.asientosSelect=0
        }
    }

    handleChangeA(e){
        this.setState({habTabla:false})
        this.entradaA=e.target.value
        this.cantEntrada = parseInt(this.entradaN)+parseInt(this.entradaA)
        this.setState({asientoMostrar:this.cantEntrada})
        let total = (this.entradaA*4)+(this.entradaN*2)
        this.setState({totalPagar:total})
    }

    handleChangeN(e){
        this.setState({habTabla:false})
        this.entradaN=e.target.value
        this.cantEntrada = parseInt(this.entradaN)+parseInt(this.entradaA)
        this.setState({asientoMostrar:this.cantEntrada})
        let total=(this.entradaA*4)+(this.entradaN*2)
        this.setState({totalPagar:total})
    }
    
    handleClick(e){
        let tabla = this.state.tabla;
        if(tabla[e].imagen==asientoOc){
            alert('Asiento Ocupado, porfavor seleccione otro' + e)
        } else if(tabla[e].imagen==asientoSelec){
            tabla[e].imagen=asientoDes;
            tabla[e].selected=false;
            this.setState({ tabla });
            this.asientosSelect=this.asientosSelect-1
            this.setState({asientoMostrar:this.state.asientoMostrar+1})
        } else if(tabla[e].imagen==asientoDes){
            if(this.cantEntrada==this.asientosSelect){
                alert("Cantidad Máxima de asientos seleccionada")
            } else {
                console.log(e)
                tabla[e].imagen=asientoSelec;
                tabla[e].selected=true;
                this.setState({ tabla });
                this.asientosSelect=this.asientosSelect+1
                this.setState({asientoMostrar:this.state.asientoMostrar-1})
                alert("Asiento" + e)
            }
        }
    }

    handleName(e){ this.setState({name:e.target.value})}
    handleLastName(e){ this.setState({lastName:e.target.value})}
    handleEmail(e){ this.setState({email:e.target.value})}
    handleCi(e){ this.setState({ci:e.target.value})}
    handleDate(e){ this.setState({date:e.target.value})}

    pagar(){
        console.log("Estado final")
        console.log(this.state)
        if(this.asientosSelect==0||this.state.asientoMostrar!=0){
            alert("Porfavor seleccione sus asientos")
        }else if(this.state.name==''||this.state.lastName==''||this.state.email==''||this.state.ci==0||this.state.date==0){
            alert("Porfavor rellene todos los campos")
        } else{
            console.log("the count is" + this.countId)
            this.state.tabla.map(asiento=>{
                if(asiento.selected){
                    axios.post(`http://127.0.0.1:8000/api/asientos/`,{
                        id:this.countId,
                        columna:asiento.columna,
                        fila:asiento.fila,
                        id_funciones:this.state.id
                    }).then(response => { 
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error.response)
                    });
                    this.countId++;
                }
                
            })
        }
    }

   ObtenerAsiSelec(){
        
   }


    render(){
        return(
            <div>
               <div className="row gap-up gap-down">
                    <div className="col-md-12 titulo white_color gap-left">
                        <h4>{this.state.movie.title}</h4>    
                    </div>   
                </div> 

                <div className="row">
                    <div className="col-md-10 offset-1 white_color gap-down">
                        <p id="selecciona">Selecciona la cantidad de entradas</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 offset-1">
                        <div className="row gap-down">
                            <div className="col-md-4 text-center offset-3">
                                <div className="row">
                                    <div className="col-md-3 text-right white_color"> <p className="a">Adultos:</p>  </div>
                                    <div className="col-md-6 text-left"><input className="typeNumber" type="number" min="0" max="6" onChange={this.handleChangeA}/></div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="row">
                                    <div className="col-md-3 text-right white_color"> <p className="a">Niños:</p>  </div>
                                    <div className="col-md-6 text-left"><input className="typeNumber" type="number" min="0" max="6" onChange={this.handleChangeN}/></div>
                                </div>
                            </div>
                        </div>
                        <div className="row gap-down">
                            <div className="col-md-3 offset-9">
                                <button className="boton" onClick={this.habilitarTabla}>Aceptar</button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                {this.state.habTabla?
                    <>
                        <div className="row gap-up">
                            <div className="col-md-10 offset-1 white_color">
                                <div className="row">
                                    <div className="col-md-4"><p id="selecciona">Seleccione los asientos</p></div>
                                    <div className="col-md-4 text-right bold"><span>Cantidad de Asientos:  </span><input className="typeNumber" type="number" value={this.state.asientoMostrar} readOnly="readOnly"/></div>
                                    <div className="col-md-4 text-right bold"><span>Total a Pagar:  </span><input className="typeNumber" type="number" value={this.state.totalPagar} readOnly="readOnly"/></div>
                                </div>
                            </div>
                        </div>

                        <div className="row gap-up gap-down">
                            <div className="tabla offset-2 col-md-8 text-center gap-down">
                                {this.state.tabla.map(asiento=>(
                                    <div key={asiento.id}>
                                        <img onClick={this.handleClick.bind(this, asiento.id)} className="asientos" src={asiento.imagen} alt=""/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <hr/>
                        <div className="row">
                            <div className="col-md-10 offset-1 gap-up">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 text-right offset-1 gap-input white_color bold">
                                        <label>
                                            Nombre:
                                            <input type="text"  id="nombre" onChange={this.handleName} />
                                        </label>
                                    </div>
                                    <div className="col-md-5 white_color bold text-right">
                                        <label>
                                            Fecha de Nacimiento:
                                            <input type="date"  id="date"  onChange={this.handleDate} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 text-right offset-1 white_color bold gap-input">
                                        <label>
                                            Apellido:
                                            <input type="text" id="apellido"   onChange={this.handleLastName} />
                                        </label>
                                    </div>
                                    <div className="col-md-5 white_color bold text-right">
                                        <label>
                                            C.I.:
                                            <input type="number" min="0"  id="ci"  onChange={this.handleCi} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 white_color bold text-right offset-1 gap-input">
                                        <label>
                                            Email:
                                            <input type="email"  onChange={this.handleEmail} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 white_color text-center bold">
                                    <label>
                                            Total a Pagar: 
                                            {console.log(this.state)}
                                            <input type="number" value={this.state.totalPagar} readOnly="readOnly" />
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <div className="row gap-down">
                                    <div className="col-md-3 offset-9">
                                        <button className="boton" onClick={this.pagar}>Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                :<div className="row gap-up gap-down">
                    <div className="col-md-12 text-center white_color bold">Seleccione la cantidad de asientos</div>
                </div>
                }
            </div>
        )
    }
}