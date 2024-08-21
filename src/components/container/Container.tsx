import styled from 'styled-components'

type ContainerProps = {
  maxWidth?: string
  overflow?: string
  position?: string
  background?: string
  height?: string
  margin?: string
  minWidth?: string
}

export const Container = styled.div<ContainerProps>`
    min-height: ${props => props.height};
    max-width: ${props => props.maxWidth || '1196px'};
    min-width: ${props => props.minWidth};
    margin: ${props => props.margin || '0 auto'};
    //position: relative;
    //overflow: hidden;
    background-color: ${props => props.background};
`

type FlexContainerProps = {
  direction?: string
  justify?: string
  alignI?: string
  wrap?: string
  width?: string
  gap?: number
  textAlign?: string
  alignC?: string
  padding?: string
  minHeight?: string
}

export const FlexContainer = styled(Container)<FlexContainerProps>`
    text-align: ${props => props.textAlign};
    width: ${props => props.width};
    padding: ${props => props.padding};
    min-height: ${props => props.minHeight};
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.alignI || "stretch"};
    align-content: ${props => props.alignC || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"}px;
`