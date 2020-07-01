import React, {Component} from 'react'
import Home from './Home'
import AdminPeliculas from './AdminPeliculas'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
    constructor(...props){
        super(...props)

        this.state={

        }
    }

    render(){
        return(
            <div className="fondo">
                <Home/>
            </div>
            
        )
    }
}

export default App