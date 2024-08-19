import {FlexContainer} from '../../../components/container/Container'
import {Headlines2} from '../../../components/headlines/Headlines2'
import {Icon} from '../../../components/icon/Icon'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'

export const Connect = () => {
  return (
    <StyledConnect>
      <FlexContainer>
        <FlexWrapper direction={'column'} width="50%">
          <Headlines2 title="Let’s Connect" size={100}/>
          <FlexWrapper>
            <Icon iconId="dribble"/>
            <Icon iconId="upwork"/>
            <Icon iconId="linkedin"/>
            <Icon iconId="github"/>
            <Icon iconId="youtube"/>
          </FlexWrapper>
        </FlexWrapper>
        <StyledMyForm action="">
          <label>Your name:</label>
          <input type="text"/>
          <label>Your email address:</label>
          <input type="email"/>
          <label>Tell about the project:</label>
          <input type="text"/>
          <button type="submit">Send</button>
        </StyledMyForm>
      </FlexContainer>
    </StyledConnect>
  )
}

const StyledConnect = styled.section`
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
`

const StyledMyForm = styled.form`
    padding-left: 16.5%;
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    label, input {
        width: 100%;
    }
`