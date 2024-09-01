import styled from 'styled-components'
import {theme} from '../../styles/Theme'


export const PaintingBox = styled.div`
    width: 288px;
    min-height: 295px;
    background-color: ${theme.colors.quote};
    stroke: ${theme.colors.secondaryBg};
    color: ${theme.colors.secondaryBg};
    transition: .2s;
    flex-grow: 1;
    
    &:hover {
        background-color: ${theme.colors.hover};
        color: ${theme.colors.font};
        stroke: ${theme.colors.font};
    }
`