import React from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'

//hooks
import useKeyPress from '../../hooks/useKeyPress'
import setDirections from '../../hooks/useHeldDirection'

const Character = () => {

    useKeyPress((e) => {
        setDirections(e.type, e.which)
    })

    return (
        <div className="character" facing="up" walking="false">
            <SpriteSheet />
        </div>
    )
}

export default Character