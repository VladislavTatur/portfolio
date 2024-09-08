import {Container, FlexContainer} from '../../../components/container/Container'
import {Icon} from '../../../components/icon/Icon'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'
import {Button} from '../../../components/button/Button'
import {theme} from '../../../styles/Theme'
import {Link} from '../../../components/Link'
import {font} from '../../../styles/Common'

export const Connect = () => {
  return (
    <StyledConnect id="connect">
      <Container>
        <FlexWrapper wrap="wrap">
          <FlexWrapper direction={'column'} grow={1}>
            <Headline2>Let’s <br/> Connect</Headline2>
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
          </FlexWrapper>
          <StyledMyForm action="">
            <FlexContainer alignI="flex-start" justify={'center'}
                           direction={'column'} grow={1} wrap={"wrap"}>
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
    background-color: ${theme.colors.thirdBg};
    
    ${Container} {
        @media ${theme.media.tablet} {
            padding: 30px 20px 40px
        }
    }
    
    ${FlexWrapper} > *:first-child{
        // @media ${theme.media.tablet} {
        //     margin: 0 20px
        // } 
    }
`

const Headline2 = styled.h2`
    ${font({family: "'Playfair Display', sans-serif", weight: 700, lineHeight: 120, Fmin: 50, Fmax: 100})}

`

const MenuSocial = styled.nav`
  margin-top: 30px;
    
    @media ${theme.media.tablet} {
        margin: 60px 0;
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 50px;
    
    @media ${theme.media.mobile} {
        gap: 0;
        justify-content: space-between;
    }
`

const SocialItem = styled.li`
    transition: .2s;
    &:hover {
        transform: translateY(-10px) scale(1.2);
    }
`

const StyledButton = styled(Button)`
    margin-top: 40px;
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
    width: 350px;
    display: flex;
    flex-grow: 1;
    margin: 0 30px;

   input, label {
        width: 100%;
    }    
    
    @media ${theme.media.tablet} {
        margin: 0;
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

