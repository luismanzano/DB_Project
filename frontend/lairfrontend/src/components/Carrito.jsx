import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Carrito(){

    function pay(carrito, e){
        e.preventDefault();

        carrito.map(alimento => {
            axios.get(`http://127.0.0.1:8000/api/alimentos/${alimento.id}`)
            .then( res => {
                let cant = res.data.cantidad - alimento.cantidad
                console.log('pagando', res)
                axios.put(`http://127.0.0.1:8000/api/alimentos/${alimento.id}`, {
                    cantidad: cant
                })


            })
        })

        axios.post(`http://127.0.0.1:8000/api/venta`)
    }

    const getAlimentos = `http://127.0.0.1:8000/api/alimentos/`


   let carrito = localStorage.getItem('carrito');
    let montoTotal = 0

    const [fullCarro, setFullCarro] = useState(null)

    if(carrito == '' || carrito == null){
        return(
        <div className="container">
        <div className="row">
            <div className="col-md-10 offset-1 gap-up gap-down">
                Aun no has agregado nada. Date un gusto!
                </div>
            </div>
        </div>
        )
    }

else if (carrito != null && carrito != ''){
    carrito = JSON.parse(carrito)
    console.log('el carrito del carrito', carrito)

    for(let i = 0; i<carrito.length; i++){
        montoTotal += carrito[i].cantidad * carrito[i].costo
    }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-1 gap-up gap-down">
                    <div className='row white-font gap-down border-bottom some-padding'>
                            <div className='col-md-3'>Foto</div>
                            <div className='col-md-3'>Nombre</div>
                            <div className='col-md-2'>Cantidad</div>
                            <div className='col-md-3'>Monto</div>
                        </div>
                        {
                            console.log('carrito en lista', carrito)
                        }
                         {
                            carrito.map(carr => (
                            <div className='row white-font gap-down border-bottom some-padding'>
                            <div className='col-md-3'>Foto</div>
                            <div className='col-md-3'>{carr.nombre}</div>
                            <div className='col-md-2'>{carr.cantidad}</div>
                            <div className='col-md-3'>{carr.cantidad * carr.costo}</div>
                        </div>
                            ))
                        }
                        <div className='row white-font gap-down border-bottom some-padding'>
                            <div className='col-md-3'><strong>MONTO TOTAL</strong></div>
                            <div className='col-md-3'>{montoTotal}</div>
                        </div>
        
                        <div className="row">
                            <div className="col-md-3 offset-9 text-center gap-up gap-down">
                                <button className="btn btn-success" onClick={(e) => pay(carrito, e)}>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
        
                
            </div>
            )
    }

    
}
export default Carrito