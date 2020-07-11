import React from 'react'

import TabAliment from './TabAliment'
import TabPeli from './TabPeli'
import TabProyec from './TabProyec'



const Administrador = () => (
    <div className="container">
        <div className="row">

            <div className="col-md-10 offset-1 gap-up">
                    <TabAliment />
            </div>

            <div className="col-md-10 offset-1 gap-up">
                    <TabPeli />
            </div>
            
            <div className="col-md-10 offset-1 gap-up gap-down">
                    <TabProyec />
            </div>    

        </div>
    </div>
)

export default Administrador