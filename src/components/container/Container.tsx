import styled from 'styled-components'

type ContainerProps = {
  padding?: string
}

export const Container = styled.div<ContainerProps>`
    margin: 0 auto;
    padding: ${props => props.padding || "100px 15px"};
    max-width: 1230px;
    width: 100%;
    min-height: 100%;
`

type FlexContainerProps = {
  direction?: string
  justify?: string
  alignI?: string
  wrap?: string
  maxWidth?: string
  gap?: number
  textAlign?: string
  alignC?: string
  padding?: string
  minHeight?: string
  margin?: string
}

export const FlexContainer = styled.div<FlexContainerProps>`
    text-align: ${props => props.textAlign};
    max-width: ${props => props.maxWidth};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    min-height: ${props => props.minHeight};
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.alignI || "stretch"};
    align-content: ${props => props.alignC || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"}px;
`