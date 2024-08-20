import styled from 'styled-components'

type ButtonProps = {
  background: string;
  color?: string;
  width?: string;
  height?: string;
  padding?: string

}

export const Button = styled.button<ButtonProps>`
    border: none;
    padding: ${props => props.padding || '0'};
    background-color: ${props => props.background || '#676CDB'};
    color: ${props => props.color || '#ffffff'};
    width: ${props => props.width};
    height: ${props => props.height};
    
    &:hover {
        cursor: pointer;
    }
`

export const TextInButton = styled.span``