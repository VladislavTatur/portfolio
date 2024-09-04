import styled from 'styled-components'
import photo from '../../../assets/images/myPhoto.jpg'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Button} from '../../../components/button/Button'
import {Icon} from '../../../components/icon/Icon'
import {Container, FlexContainer} from '../../../components/container/Container'
import {Header} from '../../header/Header'
import {ShortText} from '../../../components/Text/ShortText'
import {Text} from '../../../components/Text/Text'
import {theme} from '../../../styles/Theme'
import {Link} from '../../../components/Link'
import {font} from '../../../styles/Common'


export const Main = () => {
  return (
    <StyledMain id="main">
      <Header/>
      <Container main>
        <MyPhoto src={photo} alt="My photo"/>
          <FlexContainer direction={'column'} minHeight="70vh" justify="center">
          <Headline2>Hello! <br/> I’m Vladislav Tatur</Headline2>
          <Text fontWeight={400} maxWidth="404px">I’am freelance <ShortText color={theme.colors.font}>web
            developer</ShortText> based in Indonesia who loves to craft attractive design experiences for the
            web.</Text>
          <FlexWrapper align={'center'}>
            <Link href="//http.vlad-1507@mail.ru" target="_blank">
              <Button background={'#676cbd'} width={'203px'} height={'64px'}>
                <Icon iconId={'mail'} width={20} height={20} viewBox="0 0 20 20"/>
                Mail Me
              </Button>
            </Link>
            <Link
              href="https://www.google.com/search?sca_esv=d8369754702056cf&sxsrf=ADLYWIK08WPCnvQJsMZ_t4YPStuY9WLMPw:1725306880057&q=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8&udm=2&fbs=AEQNm0A8NLnHQsnv3eSO77JkwM6ySP-9Y3beOoi4jXemQiiTpVHOr_4LoxVaxJouugb9VzpyiEAYcdvjkG3PRCTfbNaxvkiCWtPgj87wUSLywzGuKxxB4hSwuC-PjP-DiMz-H42U7NfqpzxTTSAL_eSqgj8WLg5g3CEAE63TcVxinW3e1M_3YPteAG3DWGmO6uTJeVA2bgW_krx6_MTedsSegRZUKSK1ps_NV_MU0hC1V3-7CS1IYog7ULUm-k9irDwvp3xjxhHk&sa=X&ved=2ahUKEwiNndv9hKWIAxXAAjQIHZc9IEYQtKgLegQIJRAB&biw=1920&bih=1031&dpr=1"
              target="_blank">
              <Button background={'transparent'} width={'201px'} height={'44px'}>
                <Icon iconId={'download'} viewBox={'0 0 20 20'} width={20} height={20}/>
                Download CV
              </Button>
            </Link>
          </FlexWrapper>
          </FlexContainer>

      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
    min-height: 100vh;

    @media ${theme.media.tablet} {
        min-height: 100%;
    }

    ${Button} {
        @media ${theme.media.tablet} {
            width: 160px;
            height: 50px;
        }
    }
    
    ${FlexContainer} {

        @media ${theme.media.tablet} {
            padding: 0 20px;
            min-height:100%
        }
    }
`

const Headline2 = styled.h2`
    ${font({family: '\'Playfair Display\', sans-serif', weight: 700, lineHeight: 120, Fmin: 50, Fmax: 90})},

`

const MyPhoto = styled.img`
    width: 50%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.9;
    z-index: -1;

    @media ${theme.media.tablet} {
        // TODO:спросить почему не работает через тему
        width: 100%;
        max-height: 450px;
        position: relative;
        top: 0;
        object-position: center 30%;
    }
`



