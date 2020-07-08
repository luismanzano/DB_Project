import React, {Component} from 'react'
import './styles/MovieView.css'
import axios from 'axios'

const MovieView = ({match})=>(
    <div>
        <h5>{match.params.handle}</h5>
    </div>
)

export default MovieView