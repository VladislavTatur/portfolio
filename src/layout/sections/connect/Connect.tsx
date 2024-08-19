import {Container} from '../../../components/container/Container'
import {Headlines2} from '../../../components/headlines/Headlines2'
import {Icon} from '../../../components/icon/Icon'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'

export const Connect = () => {
  return (
    <StyledConnect>
    <Container height={'730px'}>
      <FlexWrapper>
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
        <FlexWrapper width="50%" align="center" justify="center">
          <form action="">
            <FlexWrapper direction="column">
              <label>Your name:</label>
              <input type="text"/>
              <label>Your email address:</label>
              <input type="email"/>
              <label>Tell about the project:</label>
              <input type="text"/>
              <input type="submit" value="Send"/>
            </FlexWrapper>

          </form>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
    </StyledConnect>
  )
}

const StyledConnect = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
`