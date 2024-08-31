import React from 'react'
import styled from 'styled-components'
import {Button} from '../../components/button/Button'
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/container/Container'
import { Link } from '../../components/Link'


const menuItems = [{name: 'Home', link: "#main"}, {name: 'About', link: "#specialization"}, {name: 'Works', link: "#works"}, {name: 'Reviews', link: "#reviews"}]

export const Header = () => {
  return (
    <StyledHeader>
      <Container padding="0 15px">
        <FlexWrapper wrap={"wrap"} justify="space-between" align={"center"}>
          <Logo/>
          <Menu menuItems={menuItems}/>
          <Link href={"menuItems.link"}>
            <Link href="#connect">
            <Button background={"#676CDB"} padding={"10px 20px"}>
            Contact Me
          </Button>
            </Link>
          </Link>
        </FlexWrapper>
      </Container>

    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: transparent;
    font-weight: 500;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`

