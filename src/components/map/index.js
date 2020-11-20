import React from 'react'
import SetPlacements from '../setPlacements'
import './index.css'
//character 
import {imageGalary} from '../../assets'


const Map = () => {
    return (
        <div className="map pixel-art">
            <SetPlacements sprites={imageGalary.m2} x={90} y={34} isPlayer={true}/>
            <SetPlacements sprites={imageGalary.m1} x={60} y={50} isPlayer={false} dir={'down'}/>
        </div>
    )
}

export default Map