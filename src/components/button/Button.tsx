import styled from 'styled-components'
import {theme} from '../../styles/Theme'

type ButtonProps = {
  background?: string;
  color?: string;
  width?: string;
  height?: string;
  padding?: string
  border?: string
}

export const Button = styled.button<ButtonProps>`
    padding: ${props => props.padding || '0'};
    background-color: ${props => props.background || `${theme.colors.accent}`};
    color: ${props => props.color || '#ffffff'};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: 20px;
    border: ${props => props.border || 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:hover {
        cursor: pointer;
    }
`