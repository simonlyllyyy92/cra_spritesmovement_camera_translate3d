import React, {useState, useEffect} from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'


const AI = ({sprites, step, dir}) => {
    const [direction, setDir] = useState(dir)
    const [walking, setWalking] = useState('stop')

    useEffect(() => {
        step()
    },[])

    return (
        <div 
            className="ai" 
            facing={direction} 
            walking={walking} 
        >
            <SpriteSheet sprites={sprites}/>
        </div>
    )
}

export default AI


