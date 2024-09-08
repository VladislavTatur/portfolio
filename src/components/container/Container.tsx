import styled from 'styled-components'
import {theme} from '../../styles/Theme'

type ContainerProps = {
  padding?: string
  main?: boolean
}

export const Container = styled.div<ContainerProps>`
    margin: 0 auto;
    padding: ${props => props.padding || '100px 0'};
    max-width: 1200px;
    height: 100%;
    //outline: 1px solid red;

    @media ${theme.media.tablet} {
        padding: ${props => props.main ? '0 0 50px' : '50px 0'};
    }
`

type FlexContainerProps = {
  direction?: string
  justify?: string
  alignI?: string
  wrap?: string
  maxWidth?: string
  minWidth?: string
  gap?: number
  textAlign?: string
  alignC?: string
  padding?: string
  margin?: string
  width?: string
  grow?: number
  height?: string
  flex?: string | number
}

export const FlexContainer = styled.div<FlexContainerProps>`
    text-align: ${props => props.textAlign};
    max-width: ${props => props.maxWidth};
    min-width: ${props => props.minWidth};
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.alignI || 'stretch'};
    align-content: ${props => props.alignC || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'}px;
    flex-grow: ${props => props.grow};
    flex: ${props => props.flex};
    //outline: 1px solid red;
`