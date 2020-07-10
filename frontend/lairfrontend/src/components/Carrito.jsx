import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Carrito(){

    const [re, setRe] = useState(null)

    function pay(carrito, montoTotal, e){
        e.preventDefault();

        carrito.map(alimento => {
            axios.get(`http://127.0.0.1:8000/api/alimentos/${alimento.id}/`)
            .then( res => {
                let cant = res.data.cantidad - alimento.cantidad
                console.log('pagando', res)
                axios.put(`http://127.0.0.1:8000/api/alimentos/${alimento.id}/`, {
                    id: res.data.id,
                    nombre : res.data.nombre,
                    costo : res.data.costo,
                    cantidad : parseInt(res.data.cantidad) - parseInt(alimento.cantidad),
                    categoria : res.data.categoria,
                    caducidad : res.data.caducidad,
                    id_producto : res.data.id_producto,

                }).then( succ => {console.log('succ', succ)}).catch( err => {console.log('err', err)})


            })
        })

        let date = new Date();
        let year = date.getFullYear().toString();
        let month = date.getMonth().toString();
        if(month < 10)
        month = '0'+month
        let day = date.getDay().toString();
        if(day < 10)
        day = '0'+day
        let send = year + '-' + month + '-' + day
        send = send.toString()
        console.log('send', send)

        axios.get(`http://127.0.0.1:8000/api/ventas/`).then(succ => {console.log('me traigo ventas', succ)})

        axios.post(`http://127.0.0.1:8000/api/ventas/`, {
            id_cliente: 17,
            monto_total: montoTotal
        }).then(succ => {
            console.log('succ de venta', succ)
            alert('Su compra se ha realizado exitosamente')
            localStorage.setItem('carrito', '')
        })
        .catch(err => {console.log('error ventas', err); console.log('send2', send)})



    }




    function delete1(item, e){
        e.preventDefault();

        console.log('re', re)

        console.log('item Enviado', item);
        for(let i = 0; i<carrito.length; i++){
            if(carrito[i].id == item.id){
                console.log('carrito a cambiar', carrito[i])
                if(carrito[i].cantidad > 1)
                carrito[i].cantidad--;

                else if(carrito[i].cantidad == 1){
                    carrito.splice(i, 1)
                }
                
                console.log('carrito cambiado', carrito);

                localStorage.setItem('carrito', JSON.stringify(carrito))
                console.log('carritoLocal', localStorage.getItem('carrito'))
                
                setRe(carrito)
                console.log('re2', re)


            }
        }
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
                            <div className='col-md-2'>Foto</div>
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
                            <div className='col-md-2'>Foto</div>
                            <div className='col-md-3'>{carr.nombre}</div>
                            <div className='col-md-2'>{carr.cantidad}</div>
                            <div className='col-md-3'>{carr.cantidad * carr.costo}</div>
                            <div className='col-md-2'>
                                <div className='btn btn-danger' onClick={(e) => delete1(carr, e)}>Eliminar 1</div>
                            </div>
                        </div>
                            ))
                        }
                        <div className='row white-font gap-down border-bottom some-padding'>
                            <div className='col-md-3'><strong>MONTO TOTAL</strong></div>
                            <div className='col-md-3'>{montoTotal}</div>
                        </div>
        
                        <div className="row">
                            <div className="col-md-3 offset-9 text-center gap-up gap-down">
                                <button className="btn btn-success" onClick={(e) => pay(carrito, montoTotal, e)}>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
        
                
            </div>
            )
    }

    
}
export default Carrito