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


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Header/>
        <FlexContainer direction={'column'}>
          <Headlines2 padding={'100px 0 10px 0'} title={<>Hello!<br/> I’m Vladislav Tatur</>} size={90} LHeight={108}/>
          <Text maxWidth="404px">I’am freelance <ShortText color={'#fff'}>web
            developer</ShortText> based in Indonesia who loves to craft attractive design experiences for the
            web.</Text>
        </FlexContainer>
        <FlexWrapper align={'center'}>
          <Button background="#676CDB" width={'203px'} height={'64px'}>
            <FlexWrapper align={'center'} justify={'center'} gap={10}>
              <Icon iconId={'mail'} width={20} height={20} viewBox="0 0 20 20"/>
              <ShortText>Mail Me</ShortText>
            </FlexWrapper>
          </Button>
          <Button background="transparent" width={'201px'} height={'44px'}>
            <FlexWrapper align={'center'} justify={'center'} gap={5}>
              <Icon iconId={'download'} viewBox={'0 0 20 20'} width={20} height={20}/>
              <ShortText>Download CV</ShortText>
            </FlexWrapper>
          </Button>
        </FlexWrapper>
      </Container>
      <MyPhoto src={photo} alt="My photo"/>
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
