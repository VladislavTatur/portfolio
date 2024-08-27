import styled from 'styled-components'

type ButtonProps = {
  background: string;
  color?: string;
  width?: string;
  height?: string;
  padding?: string

}

export const Button = styled.button<ButtonProps>`
    padding: ${props => props.padding || '0'};
    background-color: ${props => props.background};
    color: ${props => props.color || '#ffffff'};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: 20px;
    
    &:hover {
        cursor: pointer;
    }
`

export const TextInButton = styled.span``