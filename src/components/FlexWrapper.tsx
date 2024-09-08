import styled from 'styled-components'

type FlexWrapperProps = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  width?: string
  height?: string
  gap?: number
  textAlign?: string
  grow?: number
  alignC?: string
  shrink?: number
  flex?: string | number
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    text-align: ${props => props.textAlign};
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    align-content: ${props => props.alignC || "stretch"};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'}px;
    flex-grow: ${props => props.grow};
    flex-shrink: ${props => props.shrink};
    flex: ${props => props.flex};
`