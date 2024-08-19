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
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    text-align: ${props => props.textAlign};
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"}px;
`