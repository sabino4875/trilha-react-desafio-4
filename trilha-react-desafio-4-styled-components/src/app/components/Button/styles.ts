'use client'

import styled, { css } from 'styled-components';
import { ButtonProps } from './types';



export const ButtonContainer = styled.button.attrs<ButtonProps>({})`
    width: 100%;
    height: 42px;
    border-radius: 21px;

    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;

   cursor: not-allowed;

   ${({isValid}) => !isValid && css`
       pointer-events: none;
    `}

    &:hover {
        opacity: 0.6;
    }

    ${({isValid}) => isValid && css`
        background-color: #81259D;
        color: #FFF;
        border: 1px solid #81259D;
        cursor:pointer;
      `}
`
