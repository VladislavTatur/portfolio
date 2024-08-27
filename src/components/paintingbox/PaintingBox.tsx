import styled from 'styled-components'
import {theme} from '../../styles/Theme'

type PaintingBoxProps = {
  width: number
  height: number


}

export const PaintingBox = styled.div<PaintingBoxProps>`
    min-width: ${props => props.width}px;
    min-height: ${props => props.height}px;
    background-color: ${theme.colors.quote};
    stroke: ${theme.colors.secondaryBg};
    color: ${theme.colors.secondaryBg};
    &:hover {
        background-color: ${theme.colors.hover};
        color: ${theme.colors.font};
        stroke: ${theme.colors.font};
    }
`