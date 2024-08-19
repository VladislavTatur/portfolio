import styled from 'styled-components'

type PaintingBoxProps = {
  width: number
  height: number
  backgroundColor: string

}

export const PaintingBox = styled.div<PaintingBoxProps>`
    min-width: ${props => props.width}px;
    min-height: ${props => props.height}px;
    background-color: ${props => props.backgroundColor};
`