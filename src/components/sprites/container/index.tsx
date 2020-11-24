import * as React from 'react'

import '../styles/index.css'

interface SpritesProps {
    sprites: string;
}

const Sprites : React.FunctionComponent<SpritesProps> = ({sprites}) => {
    return (
        <div
            className="character_spritesheet pixel-art"
            style={{
                backgroundImage:`url(${sprites})`,
                backgroundRepeat:'no-repeat'
            }}
        />
    )
}

export default Sprites