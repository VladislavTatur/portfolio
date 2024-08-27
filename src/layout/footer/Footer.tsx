import styled from 'styled-components'
import {theme} from '../../styles/Theme'

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
    width: 100%;
    background-color: ${theme.colors.thirdBg};
    text-align: center;
    padding-bottom: 50px;
`