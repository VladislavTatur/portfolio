import styled from 'styled-components'

type StyledText = {
  lHeight?: string
  maxWidth?: string
  padding?: string
  fontSize?: number
}

export const Text = styled.p<StyledText>`
    color: rgba(255, 255, 255, 0.5);
    line-height: ${props => props.lHeight};
    max-width: ${props => props.maxWidth};
    padding: 0 0 30px 0; 
    font-size: ${props => props.fontSize}px;
`