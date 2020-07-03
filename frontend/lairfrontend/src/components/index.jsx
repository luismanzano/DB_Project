import React, {Component} from 'react'
import Home from './Home'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Administrador from './Administrador';

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