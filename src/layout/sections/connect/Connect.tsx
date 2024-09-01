import {Container, FlexContainer} from '../../../components/container/Container'
import {Headlines2} from '../../../components/headlines/Headlines2'
import {Icon} from '../../../components/icon/Icon'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'
import {Button} from '../../../components/button/Button'
import {theme} from '../../../styles/Theme'
import {Link} from '../../../components/Link'

export const Connect = () => {
  return (
    <StyledConnect id="connect">
      <Container>
        <FlexWrapper wrap="wrap">
          <FlexWrapper direction={'column'} maxWidth="50%">
            <Headlines2 size={100}>Let’s Connect</Headlines2>
            <FlexContainer margin={'31px 0 0 0'}>
              <MenuSocial>
                <SocialList>
                  <SocialItem>
                    <Link href="https://dribbble.com/"><Icon iconId="dribble" width={25} height={25}
                                                             viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="https://www.upwork.com/"><Icon iconId="upwork" width={25} height={25}
                                                               viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="https://www.linkedin.com/"><Icon iconId="linkedin" width={25} height={25}
                                                                 viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="https://github.com/"><Icon iconId="github" width={25} height={25}
                                                           viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="https://www.youtube.com/"><Icon iconId="youtube" width={25} height={25}
                                                                viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                </SocialList>
              </MenuSocial>
            </FlexContainer>
          </FlexWrapper>
          <StyledMyForm action="">
            <FlexContainer margin={'0 0 0 8%'} padding={'0 4% 0 0'} alignI="flex-start" justify={'center'}
                           direction={'column'} width={'calc(100% - 8%)'}>
              <AboutField>Your name:
                <Field name={'user-name'}/>
              </AboutField>
              <AboutField>Your email address:
                <Field type="email" name={'user-email'}/>
              </AboutField>
              <AboutField>Tell about the project:
                <Field name={'about-the-project'}/>
              </AboutField>
              <StyledButton type="submit" background={'transparent'}>Send
                <Icon iconId={'arrow-right'} width={30} height={30} viewBox="0 0 35 35"/>
              </StyledButton>
            </FlexContainer>
          </StyledMyForm>
        </FlexWrapper>
      </Container>
    </StyledConnect>
  )
}

const StyledConnect = styled.section`
    width: 100%;
    background-color: ${theme.colors.thirdBg};
`

const MenuSocial = styled.nav``

const SocialList = styled.ul`
    display: flex;
    gap: 50px;
`

const SocialItem = styled.li`
    transition: .2s;

    &:hover {
        transform: translateY(-10px) scale(1.2);
    }
`

const StyledButton = styled(Button)`
    margin: 40px 0 0 0;
    font-size: 30px;
    color: ${theme.colors.accent};
    display: flex;
    gap: 40px;
    align-items: center;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: translateY(2px);
    }
`

const StyledMyForm = styled.form`
    font-weight: 500;

    label, input {
        width: 100%;
    }
`

const Field = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    color: ${theme.colors.font};
    padding: 10px 0;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
`

const AboutField = styled.label`
    font-size: 30px;
    margin: 20px 20px 20px 0;
`