import styled from 'styled-components'
import {Slide} from './Slide'
import {theme} from '../../styles/Theme'

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide/>
    </StyledSlider>
  )
}


const StyledSlider = styled.div`
  @media ${theme.media.tablet} {
      
  }
`

