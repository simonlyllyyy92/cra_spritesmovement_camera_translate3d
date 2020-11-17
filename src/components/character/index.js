import React, {useState} from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'

//hooks
import useKeyPress from '../../hooks/useKeyPress'
import setDirections from '../../hooks/useHeldDirection'

const Character = () => {
    const [dir, setDir] = useState('down')
    const [walking, setWalking] = useState('false')
    useKeyPress((e) => {
        const facing = setDirections(e.type, e.which)
        if(facing[0]){
            setDir(facing[0])
        }
        setWalking(facing[0] ? 'true' : 'false')
        e.preventDefault()
    })
    return (
        <div className="character" facing={dir} walking={walking}>
            <SpriteSheet />
        </div>
    )
}

export default Character