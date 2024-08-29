import styled from 'styled-components'
import {theme} from '../../styles/Theme'

type StyledText = {
  lHeight?: string
  maxWidth?: string
  padding?: string
  fontSize?: number
  fontWeight?: number
  color?: string
}

export const Text = styled.p<StyledText>`
    color: ${props => props.color || `${theme.colors.textSelection}`};
    line-height: ${props => props.lHeight};
    max-width: ${props => props.maxWidth};
    margin: 10px 0 30px 0; 
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    
`