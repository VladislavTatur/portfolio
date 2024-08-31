import styled from 'styled-components'

type ContainerProps = {
  padding?: string
  margin?: string
}

export const Container = styled.div<ContainerProps>`
    margin: ${props => props.margin || "0 auto"};
    padding: ${props => props.padding || "100px 0"};
    max-width: 1200px;
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
  width?: string
}

export const FlexContainer = styled.div<FlexContainerProps>`
    text-align: ${props => props.textAlign};
    max-width: ${props => props.maxWidth};
    width: ${props => props.width};
    min-height: ${props => props.minHeight};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.alignI || "stretch"};
    align-content: ${props => props.alignC || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"}px;

`