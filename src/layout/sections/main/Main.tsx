import styled from 'styled-components'
import photo from '../../../assets/images/myPhoto.jpg'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Button} from '../../../components/button/Button'
import {Icon} from '../../../components/icon/Icon'
import {Container, FlexContainer} from '../../../components/container/Container'
import {Header} from '../../header/Header'
import {Headlines2} from '../../../components/headlines/Headlines2'
import {ShortText} from '../../../components/Text/ShortText'
import {Text} from '../../../components/Text/Text'
import {theme} from '../../../styles/Theme'
import {Link} from '../../../components/Link'


export const Main = () => {
  return (
    <StyledMain id="main">
      <Header/>
      <Container>
        <Headlines2 size={90}>Hello! <br/> I’m Vladislav Tatur</Headlines2>
          <Text fontWeight={400} maxWidth="404px">I’am freelance <ShortText color={theme.colors.font}>web
            developer</ShortText> based in Indonesia who loves to craft attractive design experiences for the
            web.</Text>
        <FlexContainer alignI={'center'} wrap="wrap">
          <Link href="#connect">
            <Button background="#676cbd" width={'203px'} height={'64px'}>
              <FlexWrapper align={'center'} justify={'center'} gap={10}>
                <Icon iconId={'mail'} width={20} height={20} viewBox="0 0 20 20"/>
                Mail Me
              </FlexWrapper>
            </Button>
          </Link>
          <Link href="#">
            <Button background="transparent" width={'201px'} height={'44px'}>
              <FlexWrapper align={'center'} justify={'center'} gap={5}>
                <Icon iconId={'download'} viewBox={'0 0 20 20'} width={20} height={20}/>
                Download CV
              </FlexWrapper>
            </Button>
          </Link>

        </FlexContainer>
        <MyPhoto src={photo} alt="My photo"/>
      </Container>
    </StyledMain>
  )
}


const MyPhoto = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    object-position: top -250px right 50%;
    top: 0;
    right: 0;
    opacity: 0.9;
    z-index: -1;
`

const StyledMain = styled.section`
    width: 100%;
    min-height: 100vh;
`

