import styled from '@emotion/styled'
import React from 'react'

const ResultadoDiv = styled.div`
    color: #FFF;
`
const Parrafo = styled.p`
    font-size: 15px;
    span{
        font-weight: bold;
    }
`
const Precio = styled.p`
    font-size: 20px;
`

export const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null
    
    return (
        <ResultadoDiv>
            <Precio>El Precio es: <span>{resultado.PRICE}</span></Precio>
            <Parrafo>El Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>El Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>Ultimas 24Hrs: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </ResultadoDiv>
    )
}
