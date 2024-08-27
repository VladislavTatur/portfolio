import {Container, FlexContainer} from '../../../components/container/Container'
import {Headlines2} from '../../../components/headlines/Headlines2'
import {Icon} from '../../../components/icon/Icon'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'
import {Button} from '../../../components/button/Button'
import {theme} from '../../../styles/Theme'

export const Connect = () => {
  return (
    <StyledConnect>
      <Container>
        <FlexContainer>
          <FlexWrapper direction={'column'} maxWidth="50%">
            <Headlines2 title="Let’s Connect" size={100}/>
            <FlexContainer padding={'31px 0 0 0'}>
              <SocialList>
                <SocialItem>
                  <SocialLink href="#"><Icon iconId="dribble" width={25} height={25} viewBox={'0 0 25 25'}/></SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink href="#"><Icon iconId="upwork" width={25} height={25} viewBox={'0 0 25 25'}/></SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink href="#"><Icon iconId="linkedin" width={25} height={25} viewBox={'0 0 25 25'}/></SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink href="#"><Icon iconId="github" width={25} height={25} viewBox={'0 0 25 25'}/></SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink href="#"><Icon iconId="youtube" width={25} height={25} viewBox={'0 0 25 25'}/></SocialLink>
                </SocialItem>
              </SocialList>
            </FlexContainer>
          </FlexWrapper>
          <StyledMyForm action="">
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

          </StyledMyForm>
        </FlexContainer>
      </Container>
    </StyledConnect>
  )
}

const SocialList = styled.ul`
    display: flex;
    gap: 50px;
`

const SocialItem = styled.li``

const SocialLink = styled.a``

const StyledConnect = styled.section`
    width: 100%;
    background-color: ${theme.colors.thirdBg};
`

const StyledButton = styled(Button)`
    padding: 40px 0 0 0;
    font-size: 30px;
    color: ${theme.colors.accent};
    display: flex;
    gap: 40px;
    align-items: center;
`

const StyledMyForm = styled.form`
    padding-left: 8%;
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
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
`

const AboutField = styled.label`
    font-size: 30px;
    margin: 20px 20px 20px 0;
`