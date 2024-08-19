import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <TextFooter>
        Thanks for watching
      </TextFooter>
    </StyledFooter>
  )
}

const TextFooter = styled.span`
`
const StyledFooter = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
    text-align: center;
    padding-bottom: 50px;
`