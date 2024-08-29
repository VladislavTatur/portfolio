import styled from 'styled-components'
import {theme} from '../../styles/Theme'


export const PaintingBox = styled.div`
    min-width: 288px;
    min-height: 295px;
    background-color: ${theme.colors.quote};
    stroke: ${theme.colors.secondaryBg};
    color: ${theme.colors.secondaryBg};
    
    &:hover {
        background-color: ${theme.colors.hover};
        color: ${theme.colors.font};
        stroke: ${theme.colors.font};
    }
`