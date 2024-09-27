'use client'

import styled from 'styled-components';


export const InputContainer = styled.div<object>`
    width: 100%;
    height: 42px;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`

export const Input = styled.input.attrs<object>({})`

`

export const Form = styled.form.attrs<object>({})`
    width: 100%;
`

export const ErrorMessage = styled.p.attrs({})`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`