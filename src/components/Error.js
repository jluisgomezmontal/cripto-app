import styled from '@emotion/styled'
import React from 'react'

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: .3rem 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    font-weight: 500;
`

export const Error = ({ mensaje }) => {
    return (
        <MensajeError>
            { mensaje }
        </MensajeError>
    )
}
