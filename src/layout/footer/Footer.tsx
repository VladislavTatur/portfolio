import styled from 'styled-components'
import {theme} from '../../styles/Theme'
import {Container} from '../../components/container/Container'

export const Footer = () => {
  return (
    <StyledFooter>
        <TextFooter>
          Thanks for watching
        </TextFooter>
    </StyledFooter>
  )
}

const TextFooter = styled.small`
    color: ${theme.colors.textSelection};

`
const StyledFooter = styled.div`
    background-color: ${theme.colors.thirdBg};
    text-align: center;
    min-height: 70px;
`