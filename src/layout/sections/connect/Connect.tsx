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
    <StyledConnect>
      <Container>
        <FlexWrapper wrap="wrap">
          <FlexWrapper direction={'column'} maxWidth="50%">
            <Headlines2 title="Let’s Connect" size={100}/>
            <FlexContainer margin={'31px 0 0 0'}>
              <MenuSocial>
                <SocialList>
                  <SocialItem>
                    <Link href="#"><Icon iconId="dribble" width={25} height={25} viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="#"><Icon iconId="upwork" width={25} height={25} viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="#"><Icon iconId="linkedin" width={25} height={25} viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="#"><Icon iconId="github" width={25} height={25} viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                  <SocialItem>
                    <Link href="#"><Icon iconId="youtube" width={25} height={25} viewBox={'0 0 25 25'}/></Link>
                  </SocialItem>
                </SocialList>
              </MenuSocial>
            </FlexContainer>
          </FlexWrapper>

            <StyledMyForm action="">
              <FlexContainer margin={'0 0 0 8%'} alignI="flex-start" justify={'center'} direction={'column'} width={"calc(100% - 8%)"}>
              <AboutField>Your name:
                <Field name={'user-name'}/>
              </AboutField>

              <AboutField>Your email address:
                <Field type="email" name={'user-email'}/>
              </AboutField>

              <AboutField>Tell about the project:
                <Field name={'about-the-project'}/>
              </AboutField>

              <StyledButton type="submit" background="transparent">Send
                <Icon iconId={'arrow-right'} width={30} height={30} viewBox="0 0 35 35"/>
              </StyledButton>
              </FlexContainer>
            </StyledMyForm>

        </FlexWrapper>
      </Container>
    </StyledConnect>
  )
}

const MenuSocial = styled.nav``

const SocialList = styled.ul`
    display: flex;
    gap: 50px;
`

const SocialItem = styled.li``


const StyledConnect = styled.section`
    width: 100%;
    background-color: ${theme.colors.thirdBg};
`

const StyledButton = styled(Button)`
    margin: 40px 0 0 0;
    font-size: 30px;
    color: ${theme.colors.accent};
    display: flex;
    gap: 40px;
    align-items: center;
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
`

const AboutField = styled.label`
    font-size: 30px;
    margin: 20px 20px 20px 0;
`