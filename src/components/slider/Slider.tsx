import styled from 'styled-components'
import photo from '../../assets/images/man.jpg'
import {Icon} from '../icon/Icon'
import {FlexWrapper} from '../FlexWrapper'
import {FlexContainer} from '../container/Container'
import {theme} from '../../styles/Theme'

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <FlexWrapper wrap="wrap">
          <Photo src={photo} alt="photo of the commentator"/>
          <FlexWrapper direction={'column'} justify="space-between">
            <Quote/>
            <Comment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
              mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
              litora torquent
            </Comment>
            <FlexContainer margin="30px 0 0 27px">
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
    max-width: 894px;
    margin-right: 9%;
`


const Slide = styled.div`

`

const Photo = styled.img`
    object-fit: cover;
    max-width: 390px;
    min-height: 390px;
`

const Comment = styled.p`
    padding: 0 5px 0 15px;
    max-width: 490px;
    max-height: 252px;
    white-space: pre-wrap;
    overflow-y: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;
    position: relative;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.accent};
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${theme.colors.textSelection};
    }
`
const Quote = styled.span`
    margin: 8% 0;
    &::after {
        content: open-quote;
        position: absolute;
        left: 15px;
        top: 14px;
    }

    position: relative;
    font-size: 100px;
    color: ${theme.colors.quote};
    padding: 0 0 0 15px;
    font-family: "Playfair Display", sans-serif;

`