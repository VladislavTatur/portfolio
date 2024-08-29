import React from 'react'
import styled from 'styled-components'
import {Button} from '../../components/button/Button'
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/container/Container'
import { Link } from '../../components/Link'


const menuItems = ["Home", "About", "Works", "Services"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container padding="0 15px">
        <FlexWrapper wrap={"wrap"} justify="space-between" align={"center"}>
          <Logo/>
          <Menu menuItems={menuItems}/>
          <Link href="#">
            <Button background={"#676CDB"} padding={"10px 20px"}>
            Contact Me
          </Button>
          </Link>
        </FlexWrapper>
      </Container>

    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: transparent;
    font-weight: 500;
`

