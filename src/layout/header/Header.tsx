import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button/Button'
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'
import {ShortText} from '../../components/Text/ShortText'
import {FlexWrapper} from '../../components/FlexWrapper'


const menuItems = ["Home", "About", "Services"]

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper wrap={"wrap"} justify="space-between" align={"center"}>
      <Logo/>
      <Menu menuItems={menuItems}/>
      <Button background={"#676CDB"} padding={"10px 20px"}>
        <ShortText fontWeight={400}>Contact Me</ShortText>
      </Button>
    </FlexWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: transparent;
    max-width: 1441px;
    margin: 0 auto;
    padding: 10px 122px;
`