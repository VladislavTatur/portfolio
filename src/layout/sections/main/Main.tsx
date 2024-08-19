import styled from 'styled-components'
import photo from '../../../assets/images/myPhoto.jpg'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Button, TextInButton} from '../../../components/button/Button'
import {Icon} from '../../../components/icon/Icon'
import {Container} from '../../../components/container/Container'
import {Header} from '../../header/Header'
import {Headlines2} from '../../../components/headlines/Headlines2'

export const Main = () => {
  return (
    <Container width="100%" height={'100vh'}>
      <Container>
        <Header/>
        <FlexWrapper direction="column">
          <MainTitle>
            <Headlines2 title={<>Hello!<br/> I’m Vladislav Tatur</>} size={40} LHeight={108}/>
            <AboutMe>I am studying at the it-incubator for a web developer</AboutMe>
          </MainTitle>
        </FlexWrapper>
        <FlexWrapper align={'center'}>
          <Button background="#676CDB" width={'203px'} height={'64px'}>
            <Icon iconId={'mail'} width={20} height={20} viewBox="0 0 20 20"/>
            <TextInButton description={'Email Me'}/>
          </Button>
          <Button background="transparent" width={'201px'} height={'44px'}>
            <Icon iconId={'download'} viewBox={'0 0 20 20'} width={20} height={20}/>
            <TextInButton description={'Download CV'}/>
          </Button>
        </FlexWrapper>
      </Container>
      <MyPhoto src={photo} alt=""/>
    </Container>
  )
}

const MainTitle = styled.div``


const AboutMe = styled.p`
    color: rgba(255, 255, 255, 0.5);
`

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