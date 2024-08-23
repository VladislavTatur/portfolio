import styled from 'styled-components'

type ShortTextProps = {
  color?: string
  fontSize?: number
  lineHeight?: string
  maxWidth?: string
  textAlign?: 'left' | 'center' | 'right' | 'center'
  padding?: string
  textDecoration?: string
  fontWeight?: number
}

export const ShortText = styled.span<ShortTextProps>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    max-width: ${props => props.maxWidth};
    text-align: ${props => props.textAlign};
    line-height: normal;
    padding: ${props => props.padding};
    text-decoration: ${ props => props.textDecoration};
    font-weight: ${props => props.fontWeight};
`