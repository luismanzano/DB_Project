import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Carrito(){

    const getAlimentos = `http://127.0.0.1:8000/api/alimentos/`


   let carrito = localStorage.getItem('carrito');
    let montoTotal = 0

    const [fullCarro, setFullCarro] = useState(null)

    if(carrito == ''){
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

else if (carrito != ''){
    carrito = JSON.parse(carrito)
    console.log('el carrito del carrito', carrito)

    for(var i = 0; i<carrito.length; i++){

    }

    var flag = false

    for(let i = 0; i<carrito.length; i++){
        var alimento = getAlimentos.concat(carrito[i].id);
        console.log('er alimento3', alimento)
        
            axios.get(alimento).then(res => {
                console.log('er alimento 2', res.data)
                console.log('Carrito normal', carrito)
                console.log('Carrito[i]', carrito[i])


                 carrito[i].nombre = res.data.nombre
                 carrito[i].costo = res.data.costo
            })

            montoTotal += carrito[i].cantidad * carrito[i].costo;
            if(carrito[carrito.length-1].nombre){
                flag = true
            }
    }



    // setFullCarro(carrito);
    // console.log('fullCarro', fullCarro);

    if(flag == false) {
        return(
            <h2>Cargando</h2>
        )
    }

    else if (flag == true){
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
                                <button className="boton">Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>
        
                
            </div>
            )
    }

    
}
    
}

export default Carrito