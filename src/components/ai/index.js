import React, {useState, useEffect} from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'


const AI = ({sprites, step, direction}) => {
    const [dir, setDir] = useState(direction)
    const [walking, setWalking] = useState('stop')

    useEffect(() => {
        step()
    },[])

    useEffect(() => setDir(direction),[direction])

    return (
        <div 
            className="ai" 
            facing={dir} 
            walking={walking} 
        >
            <SpriteSheet sprites={sprites}/>
        </div>
    )
}

export default AI


