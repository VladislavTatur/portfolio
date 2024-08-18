import styled from 'styled-components'

type ButtonProps = {
  background: string;
  color?: string;
  width?: string;
  height?: string;
  padding?: string
}

export const Button = styled.button<ButtonProps>`
    border: none;
    padding: ${props => props.padding || "0"};
    background-color: ${props => props.background || "#676CDB"};
    color: ${props => props.color || "#ffffff"};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`
type TextInButtonProps = {
  description: string
}

export const TextInButton = (props: TextInButtonProps) => {
  return (
    <StyledTextInButton>
      <span>{props.description}</span>
    </StyledTextInButton>
  )
}

const StyledTextInButton = styled.span`

`