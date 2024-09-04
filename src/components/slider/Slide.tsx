import {FlexWrapper} from '../FlexWrapper'
import {FlexContainer} from '../container/Container'
import {Link} from '../Link'
import {Icon} from '../icon/Icon'
import photo from '../../assets/images/man.jpg'
import {theme} from '../../styles/Theme'
import styled from 'styled-components'


export const Slide = () => {
  return (
    <StyledSlide>
      <FlexWrapper wrap={"wrap"}>
        <Photo src={photo} alt="photo of the commentator"/>
        <FlexContainer direction="column" wrap={"wrap"}>
          <Comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis eligendi hic impedit in molestias necessitatibus nihil quo rerum voluptatum. Ad, alias, consectetur cumque dolores doloribus eaque eius fuga impedit, iusto laudantium magnam non nulla quis similique suscipit! Accusamus corporis distinctio dolorum eveniet illum inventore ipsum laboriosam maiores minus necessitatibus nulla, perspiciatis quam reiciendis repellat velit voluptatem voluptates, voluptatum. Accusantium aperiam aspernatur beatae consequatur consequuntur cumque debitis delectus dolorem doloremque ea eveniet ex, excepturi exercitationem explicabo fugit harum hic inventore, itaque laboriosam laborum modi nostrum obcaecati praesentium repudiandae sapiente sint suscipit ut velit veniam veritatis. A blanditiis dignissimos placeat unde.
          </Comment>
          <FlexContainer margin={"20px 0 0 27px"}>
            <Link href={'#'}>
              <Icon iconId={'arrow-right'} transform="180" width={40} height={40} viewBox="0 0 40 40"/>
            </Link>
            <Link href={'#'}>
              <Icon iconId={'arrow-right'} width={40} height={40} viewBox="0 0 40 40"/>
            </Link>
          </FlexContainer>
        </FlexContainer>

      </FlexWrapper>
    </StyledSlide>
  )
}

const StyledSlide = styled.div`

    
    
  ${Link}{
      color: ${theme.colors.accent};
      
      &:hover {
          transform: scale(1.2);
      }
  }
  
`

const Photo = styled.img`
    object-fit: cover;
    width: 390px;
    height: 390px;
    display: flex;
    justify-content: center;
    
    @media ${theme.media.mobile} {
        width: 335px;
        height: 373px;
    }
`

const Comment = styled.p`
    margin: 0 5px 0 15px;
    padding-top: 75px;
    padding-right: 10px;
    width: 505px;
    height: 252px;
    flex-grow: 1;
    white-space: pre-wrap;
    overflow-y: auto;
    overflow-x: hidden;

    position: relative;
    z-index: 0;
    
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
    
    

    &::before {
        content: open-quote;
        position: absolute;
        left: 10px;
        top: 35px;
        font-size: 100px;
        color: ${theme.colors.quote};
        font-family: "Playfair Display", sans-serif;
        z-index: 1;
    }
`