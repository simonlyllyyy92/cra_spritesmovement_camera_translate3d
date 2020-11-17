import React, {useState} from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'

//hooks
import useKeyPress from '../../hooks/useKeyPress'
import setDirections from '../../hooks/useHeldDirection'

const Character = () => {
    const [dir, setDir] = useState('down')
    useKeyPress((e) => {
        const facing = setDirections(e.type, e.which)
        if(facing){
            setDir(facing)
        }
    })

    return (
        <div className="character" facing={dir} walking="false">
            <SpriteSheet />
        </div>
    )
}

export default Character