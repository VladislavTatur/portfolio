import {Container, FlexContainer} from '../../../components/container/Container'
import {Headlines2} from '../../../components/headlines/Headlines2'
import {Icon} from '../../../components/icon/Icon'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'
import {Button} from '../../../components/button/Button'
import {ShortText} from '../../../components/Text/ShortText'

export const Connect = () => {
  return (
    <StyledConnect>
      <Container>
        <FlexContainer>
          <FlexWrapper direction={'column'} maxWidth="50%">
            <Headlines2 title="Let’s Connect" size={100} LHeight={120}/>
            <FlexContainer padding={'31px 0 0 0'}>
              <Icon iconId="dribble"/>
              <Icon iconId="upwork"/>
              <Icon iconId="linkedin"/>
              <Icon iconId="github"/>
              <Icon iconId="youtube"/>
            </FlexContainer>
          </FlexWrapper>
          <StyledMyForm action="">
            <AboutField>Your name:</AboutField>
            <Field/>
            <AboutField>Your email address:</AboutField>
            <Field type="email"/>
            <AboutField>Tell about the project:</AboutField>
            <Field/>
            <StyledButton type="submit" background="transparent"><ShortText fontSize={30}>Send</ShortText> <Icon
              iconId={'arrow-right'} width={25} height={25} viewBox="0 0 35 35"/>
            </StyledButton>

          </StyledMyForm>
        </FlexContainer>
      </Container>
    </StyledConnect>
  )
}

const StyledConnect = styled.section`
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
`

const StyledButton = styled(Button)`
    padding: 40px 0 0 0;
    font-size: 30px;
    display: flex;
    gap: 40px;
    color: #676cdb;
    //    
    //svg {
    //    text-align: center;
    //}
`

const StyledMyForm = styled.form`
    padding-left: 8.2%;
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
    color: white;
    padding: 10px 0;
`

const AboutField = styled.label`
    font-size: 30px;
    margin: 20px 20px 20px 0;
`