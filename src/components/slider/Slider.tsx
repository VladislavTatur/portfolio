import styled from 'styled-components'
import photo from '../../assets/images/man.jpg'
import {Icon} from '../icon/Icon'
import {FlexWrapper} from '../FlexWrapper'
import {FlexContainer} from '../container/Container'
import {theme} from '../../styles/Theme'
import {Link} from '../Link'

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <FlexWrapper wrap="wrap">
          <Photo src={photo} alt="photo of the commentator"/>
          <FlexWrapper direction={'column'} justify="space-between">
            <Quote/>
            <Comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis eligendi hic impedit in molestias necessitatibus nihil quo rerum voluptatum. Ad, alias, consectetur cumque dolores doloribus eaque eius fuga impedit, iusto laudantium magnam non nulla quis similique suscipit! Accusamus corporis distinctio dolorum eveniet illum inventore ipsum laboriosam maiores minus necessitatibus nulla, perspiciatis quam reiciendis repellat velit voluptatem voluptates, voluptatum. Accusantium aperiam aspernatur beatae consequatur consequuntur cumque debitis delectus dolorem doloremque ea eveniet ex, excepturi exercitationem explicabo fugit harum hic inventore, itaque laboriosam laborum modi nostrum obcaecati praesentium repudiandae sapiente sint suscipit ut velit veniam veritatis. A blanditiis dignissimos placeat unde.
            </Comment>
            <FlexContainer margin="30px 0 0 27px">
              <Link href={'#'}>
                <Icon iconId={'arrow-right'} transform="180" width={40} height={40} viewBox="0 0 40 40"/>
              </Link>
              <Link href={'#'}>
                <Icon iconId={'arrow-right'} width={40} height={40} viewBox="0 0 40 40"/>
              </Link>
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

  ${Link}{
      color: ${theme.colors.accent};
      
      &:hover {
          transform: scale(1.2);
      }
  }
  
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


    position: relative;
    font-size: 100px;
    color: ${theme.colors.quote};
    padding: 0 0 0 15px;
    font-family: "Playfair Display", sans-serif;


    &::after {
        content: open-quote;
        position: absolute;
        left: 15px;
        top: 14px;
    }
`