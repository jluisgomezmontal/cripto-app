import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Cotizacion } from './components/Cotizacion';
import { Formulario } from './components/Formulario';
import { Spinner } from './components/Spinner';
import imagenLogo from './cryptomonedas.png'

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 2rem;
    }
`;

const Imagen = styled.img`
    display: block;
    max-width: 60%;
    margin: 1rem auto ;
    @media(min-width: 992px){
        margin-top: 5rem;
        max-width: 100%;
    }

`
const Heading = styled.h1`
    font-family: 'Bebas Neue';
    color: #fff;
    text-align: center;
    font-weight: 700px;
    font-size: 40px;
    margin: 35px 0 20px 0;


`

export const CriptoApp = () => {

    const [moneda, setMoneda] = useState('');
    const [criptoMoneda, setCriptoMoneda] = useState('')
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        if(moneda === '') return

        const consultarApi = async() => {
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

            const resultado = await axios.get(url);

            setCargando(true);

            setTimeout(() => {
                setCargando(false);
                setResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
            }, 1700);

        }

        consultarApi();
        
    }, [moneda, criptoMoneda])

    const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado}
/>
    return (
        <Contenedor>
            <div>
                <Imagen
                    src={imagenLogo}
                    alt="ImagenLogo"
                />

            </div>
            <div>
                <Heading>Cotizador de Criptomonedas by JLGM</Heading>
                <Formulario
                setCriptoMoneda={setCriptoMoneda}
                setMoneda={setMoneda}
                />
                {
                    componente
                }

            </div>
        </Contenedor>

    )
}
