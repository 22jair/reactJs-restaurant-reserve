import React from 'react'
import * as style from './ButtonSquare.style'

export default function ButtonSquare({id, img, title, handleButtonSquare }) {
    return (
        <style.ButtonSquareContainer onClick={() => handleButtonSquare()}>
            <style.ButtonSquareImg src={img} />
            <style.ButtonSquareName > { title } </style.ButtonSquareName>
        </style.ButtonSquareContainer>
    )
}
