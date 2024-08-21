import styled from 'styled-components'

type ShortTextProps = {
  color?: string
  fontSize?: number
  lineHeight?: string
  maxWidth?: string
  textAlign?: 'left' | 'center' | 'right' | 'center'
}

export const ShortText = styled.span<ShortTextProps>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize}px;
    line-height: ${props => props.lineHeight};
    max-width: ${props => props.maxWidth};
    text-align: ${props => props.textAlign};
`