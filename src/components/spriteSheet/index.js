import React from 'react'
import './index.css'

const SpriteSheet = ({sprites}) => {
    return (
        <div className="character_spritesheet pixel-art" style={{
            backgroundImage: `url(${sprites})`,
            backgroundRepeat: 'no-repeat',
        }}/>
    )
}

export default SpriteSheet