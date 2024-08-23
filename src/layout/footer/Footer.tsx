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
    color: rgba(255, 255, 255, 0.5);

`
const StyledFooter = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
    text-align: center;
    padding-bottom: 50px;
`