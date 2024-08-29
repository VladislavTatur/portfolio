import styled from 'styled-components'


type Headlines2State = {
  size?: number
  padding?: string
  color?: string
}

export const Headlines2 = styled.h2<Headlines2State>`
    font-size: ${props => props.size}px;
    color: ${props => props.color};
    padding: ${props => props.padding};
    line-height: 120%;
    font-weight: 700;
    font-family: "Playfair Display", sans-serif;
`