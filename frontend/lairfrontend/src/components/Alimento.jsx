import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css'

function Alimento(){

    
    //FUNCION QUE AGREGA ELEMENTOS AL CARRITO
    function addCart(obj, name, cost, e){
        e.preventDefault();
        var carrito = [];

        if(!localStorage.getItem('carrito')){
            window.localStorage.setItem('carrito', '')
        }

        if(localStorage.getItem('carrito') == ''){
            console.log('anadiendo producto desde cero')
            carrito.push({
            id: obj,
            cantidad: 1,
            nombre: name,
            costo: cost
        })

        localStorage.setItem('carrito', JSON.stringify(carrito));
        }


        if (localStorage.getItem('carrito') != '') {

            carrito = JSON.parse(localStorage.getItem('carrito'))
            console.log('aver si esta mierda funciona', carrito)

            console.log('analizando')
         var flag = false   
        for(var i=0; i<carrito.length ; i++){
            if(carrito[i].id == obj){
                carrito[i].cantidad++;
                console.log('aumento la candidad');
                localStorage.setItem('carrito', JSON.stringify(carrito));
                flag = true
                break;
            } 
            }

            if (flag == false) {
                console.log('No match, adding product')
                carrito.push({
                    id: obj,
                    cantidad: 1,
                    nombre: name,
                    costo: cost
                })
                localStorage.setItem('carrito', JSON.stringify(carrito));
            }
    }  

    
    
    // else {
    //     console.log('anadiendo producto desde cero')
    //     carrito.push({
    //         id: obj,
    //         cantidad: 1
    //     })
    // }
    console.log('final', JSON.parse(localStorage.getItem('carrito')))
    }



    const getAlimentos = `http://127.0.0.1:8000/api/alimentos`

    

    const [alimentos, setAlimentos] = useState(null);

    useEffect(() => {
        axios.get(getAlimentos).then(res => {
          console.log('res data', res.data);
          setAlimentos(res.data);
          console.log('setAlimentos', alimentos)
      })
      }, [getAlimentos]);

      if(alimentos != undefined){
          console.log('alimentaciones', alimentos)
          return(
            <div className="container">
            <div className="row">
                <div className="col-md-10 offset-1 gap-up gap-down">
                {alimentos && alimentos.results.map(alimento => (
                    <div className='row white-font gap-down border-bottom some-padding'>
                        <div className='col-md-3'>Foto</div>
                        <div className='col-md-3'>{alimento.nombre}</div>
                        <div className='col-md-2'>{alimento.costo}</div>
                        <div className='col-md-3'>

                        {(alimento.cantidad > 0) ? <div className='btn btn-success' onClick={(e) => addCart(alimento.id, alimento.nombre, alimento.costo, e)}>Anadir</div> : <div className='btn btn-secondary'>Agotado</div>}
                          </div>
                    </div>
  ))}
                    
                    

                </div>
            </div>
        </div>
          )
      } else if (alimentos == null) {
          return(
              <div>Cargando</div>
          )
      }

    
}

export default Alimento