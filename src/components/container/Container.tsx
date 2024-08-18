import styled from 'styled-components'

type ContainerProps = {
  width?: string
  height?: string
  overflow?: string
  position?: string
  background?: string
}

export const Container = styled.div<ContainerProps>`
    max-width: ${props => props.width || '1196px'};
    min-height: ${props => props.height || '100%'};
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: ${props => props.background};
`