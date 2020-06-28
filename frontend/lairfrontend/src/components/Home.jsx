import React, {Component} from 'react'
import NavBar from './NavBar'
import './styles/Home.css'
import Footer from './Footer'
import popcorn1 from './images/popcorn1.png'
import popcorn2 from './images/popcorn2.png'


export default class Home extends Component{
    constructor(...props){
        super(...props)

        this.state={

        }
    }

    render(){
        return(
            <div>
  
                    <NavBar/>

                <div className="row">
                    <div className="col-md-10 fondoGris offset-1 gap-up">
                        <div className="row">
                            <div className="col-md-10 offset-1 gap-up fondoMorado gap-down">
                                <div className="row">
                                    <div className="col-md-2 white_color offset-5 text-center gap-up">
                                        <h5>Top 5</h5>
                                    </div>
                                </div>
                                <div row="row">
                                    <div className="col-md-12 gap-down">
                                        <div className="row">
                                            <div className="col-md-2 offset-1">
                                                <img className="pelicula" src="https://lumiere-a.akamaihd.net/v1/images/ba66734fc3379a905313db81d359b611_2737x4096_967d8263.jpeg" alt=""/>
                                            </div>
                                            <div className="col-md-2">
                                                <img className="pelicula" src="https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg" alt=""/>
                                            </div>
                                            <div className="col-md-2">
                                                <img className="pelicula" src="https://es.web.img3.acsta.net/pictures/19/12/19/12/29/3194366.jpg" alt=""/>
                                            </div>
                                            <div className="col-md-2">
                                                <img className="pelicula" src="https://es.web.img2.acsta.net/pictures/20/01/22/12/46/2447825.jpg" alt=""/>
                                            </div>
                                            <div className="col-md-2">
                                                <img className="pelicula" src="https://es.web.img2.acsta.net/pictures/19/11/20/17/14/1219132.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 offset-1 gap-up fondoMorado gap-down">
                                <div className="row">
                                    <div className="col-md-4 imagen">
                                        <img id="popcorn" src={popcorn1} alt=""/>
                                    </div>
                                    <div className="col-md-4 white_color text-center my-auto gap-down">
                                        <h5 id="secret">The Secret Combos</h5>
                                    </div>
                                    <div className="col-md-4 text-right gap-down">
                                        <img id="popcorn2"src={popcorn2} alt=""/>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}