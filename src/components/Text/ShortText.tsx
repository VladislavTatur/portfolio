import styled from 'styled-components'

type ShortTextProps = {
  textAlign?: 'left' | 'center' | 'right' | 'center'
  fontWeight?: number
}

export const ShortText = styled.span<ShortTextProps>`
    text-align: ${props => props.textAlign};
    font-weight: ${props => props.fontWeight};
`