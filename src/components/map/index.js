import React from 'react'
import Character from '../character/index'
import './index.css'

//character 
import {imageGalary} from '../../assets'

const Map = () => {
    return (
        <div className="map pixel-art">
            <Character sprites={imageGalary.m2}/>
        </div>
    )
}

export default Map