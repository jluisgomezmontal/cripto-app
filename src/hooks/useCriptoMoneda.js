import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
    font-family: 'Bebas Neue' cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    display: block; 
`;

const Select = styled.select`
    margin: 1rem 0;
    width: 100%;
    padding: .7rem;
    border-radius: 10px;
    border: none;
    display: block; 
    -webkit-appearance: none;
    font-size: 1.3rem;
`;

export const useCriptoMoneda = (label, initialState, opciones ) => {

    const [state, setState] = useState(initialState);



    
    const SelectCripto = ()=>(
        <>
            <Label>{label}</Label>
            <Select            onChange={ e=> setState(e.target.value) }
            value={ state}
            >
                <option value='' >----Seleccione Cripto Moneda</option>
            {
                opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name} >{opcion.CoinInfo.FullName}</option>
                )) 
            }
    
            </Select>
        </>
    );

    return [ state, SelectCripto ];
}
