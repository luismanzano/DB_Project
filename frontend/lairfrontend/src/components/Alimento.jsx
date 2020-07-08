import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Alimento(){

    window.localStorage.setItem('carrito', [])
    //FUNCION QUE AGREGA ELEMENTOS AL CARRITO
    function addCart(obj, e){
        e.preventDefault();
        console.log('carrito length', carrito.alimentos.length)
        alert(obj);

        carro = localStorage.getItem('carrito')

        if (carrito.alimentos.length != 0) {
            console.log('analizando')
         var flag = false   
        for(var i=0; i<carrito.alimentos.length ; i++){
            if(carrito.alimentos[i].id == obj){
                carrito.alimentos[i].cantidad++
                console.log('aumento la candidad', carrito.alimentos[i])
                flag = true
                break;
            } 
            }

            if (flag == false) {
                console.log('No match, adding product')
                carrito.alimentos.push({
                    id: obj,
                    cantidad: 1
                })
            }
    }  

    
    
    else {
        console.log('anadiendo producto desde cero')
        carrito.alimentos.push({
            id: obj,
            cantidad: 1
        })
    }
    console.log('carrito', carrito.alimentos)
    }



    const getAlimentos = `http://127.0.0.1:8000/api/alimentos`

    const carrito = {
        alimentos: []
    }

    const [alimentos, setAlimentos] = useState(null);

    useEffect(() => {
        axios.get(getAlimentos).then(res => {
          console.log(res.data);
          setAlimentos(res.data);
          console.log(alimentos)
      })
      }, [getAlimentos]);

      if(alimentos != null){
          return(
            <div className="container">
            <div className="row">
                <div className="col-md-10 offset-1 gap-up gap-down">
                {alimentos.results.map(alimento => (
                    <div className='row'>
                        <div className='col-md-3'>Foto</div>
                        <div className='col-md-3'>{alimento.nombre}</div>
                        <div className='col-md-2'>{alimento.costo}</div>
                        <div className='col-md-3'> <div className='btn btn-success' onClick={(e) => addCart(alimento.id, e)}>Anadir</div> </div>
                    </div>
  ))}
                    
                    

                </div>
            </div>
        </div>
          )
      } else {
          return(
              <div>Cargando</div>
          )
      }

    
}

export default Alimento