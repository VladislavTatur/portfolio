import styled from 'styled-components'
import {theme} from '../../styles/Theme'
import {Container} from '../../components/container/Container'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container padding="0">
        <TextFooter>
          Thanks for watching
        </TextFooter>
      </Container>

    </StyledFooter>
  )
}

const TextFooter = styled.small`
    color: ${theme.colors.textSelection};

`
const StyledFooter = styled.div`
    width: 100%;
    background-color: ${theme.colors.thirdBg};
    text-align: center;
    padding-bottom: 50px;
`