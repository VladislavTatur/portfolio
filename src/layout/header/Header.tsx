import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'
import {Button} from '../../components/button/Button'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu/>
      <Button background={"#676CDB"} padding={"10px 20px"}>Contact Me</Button>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
`