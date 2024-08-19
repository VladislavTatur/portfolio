import styled from 'styled-components'

type ContainerProps = {
  width?: string
  overflow?: string
  position?: string
  background?: string
  height?: string
}

export const Container = styled.div<ContainerProps>`
    min-height: ${props => props.height};
    max-width: ${props => props.width || '1196px'};
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: ${props => props.background};
`

type FlexContainerProps = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  width?: string
  height?: string
  gap?: number
  textAlign?: string
}

export const FlexContainer = styled(Container)<FlexContainerProps>`
    text-align: ${props => props.textAlign};
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"}px;
`