import styled from 'styled-components'
import photo from '../../assets/images/man.jpg'
import {Icon} from '../icon/Icon'
import {FlexWrapper} from '../FlexWrapper'
import {FlexContainer} from '../container/Container'

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <FlexWrapper>
          <Photo src={photo} alt="photo of the commentator"/>
          <FlexWrapper direction={'column'}>
            <QuoteComponent/>
            <Comment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
              mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
              litora torquent
            </Comment>
            <FlexContainer padding="0 0 0 27px">
              <Icon iconId={'arrow-right'} transform="180" width={40} height={40} viewBox="0 0 40 40"/>
              <Icon iconId={'arrow-right'} width={40} height={40} viewBox="0 0 40 40"/>
            </FlexContainer>
          </FlexWrapper>
        </FlexWrapper>
      </Slide>
    </StyledSlider>
  )
}


const StyledSlider = styled.div`
`


const Slide = styled.div`

`

const Photo = styled.img`
    object-fit: cover;
    width: 389px;
    height: 391px;
`

const Comment = styled.p`
    padding: 0 109px 20px 15px;
    max-height: 252px;
`
const Quote = styled.span`
    font-size: 50px;
    color: #c4c4c4;
    padding: 0 0 0 15px;
`

const QuoteComponent = () => {
  return (
    <Quote>
      &#8220;
    </Quote>
  )
}