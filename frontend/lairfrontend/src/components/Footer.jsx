import React, { Component } from 'react'
import './styles/Footer.css'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'

export default class Footer extends Component {
    render() {
        return (
                <div className="col-md-10 fondoGris offset-1 gap-down">

                    <div className="row">
                        <div className="col-md-4 text-left">
                            <br/>
                            <h5 className="white_color"><b>The Lair 2020 ™</b></h5>
                        </div>
                        <div className="col-md-4 text-center">
                        <a href=""><img id="logo" src={instagram} width="50" height="50" /></a>
                            <a href=""><img id="logo" src={facebook} width="50" height="50" /></a>
                            <a href=""><img id="logo" src={twitter} width="50" height="50" /></a>
                        </div>
                        

                    </div>
                </div>
        )
    }
}