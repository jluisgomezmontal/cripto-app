import styled from '@emotion/styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCriptoMoneda } from '../hooks/useCriptoMoneda'
import {useMoneda} from '../hooks/useMoneda'
import { Error } from './Error'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.5rem;
    padding: .3rem .6rem;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .5s ease;
    
    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
    `

export const Formulario = ({ setMoneda, setCriptoMoneda}) => {
    const [listaCripto, setListaCripto] = useState([]);
    const [error, setError] = useState(false);
    const MONEDAS=[
        {
            codigo: 'USD',
            nombre: 'Dolar de USD',
        },
        {
            codigo: 'MXN',
            nombre: 'Peso Mexicano',
        },
        {
            codigo: 'EUR',
            nombre: 'Euro',
        },
        {
            codigo: 'GBP',
            nombre: 'Libra',
        }
    ];

    const [ moneda, SelectMoneda ] = useMoneda('Elije tu Moneda', '', MONEDAS);

    const [ cripto, SelectCripto] = useCriptoMoneda('Elije tu Criptomoneda', '', listaCripto);

    const consultarCripto = (e) => {
        e.preventDefault();

        if (moneda === '' || cripto === '') {
            setError(true);
            return;
        }
        setError(false);
        setMoneda(moneda);
        setCriptoMoneda(cripto);

    }
    
    useEffect(() => {


        const consultarApi = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            setListaCripto(resultado.data.Data)
        }
        consultarApi();
    }, [])
    
    return (
        <form
         onSubmit={consultarCripto}
        >
            <SelectMoneda/>
            <SelectCripto/>
            <Boton
                type="submit"
                value="Calcular"
                />
            {
                error ? <Error mensaje="Todos los campos son obligatorios"/>: null
            }
        </form>
    )
}
