import React from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'

const Character = () => {
    return (
        <div className="character" facing="up" walking="false">
            <SpriteSheet />
        </div>
    )
}

export default Character