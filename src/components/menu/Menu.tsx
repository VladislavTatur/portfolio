import React from 'react'
import styled from 'styled-components'
import {theme} from '../../styles/Theme'

type MenuItemProps = {
  name: string
  link: string
}

export const Menu = (props: { menuItems: Array<MenuItemProps> }) => {
  return (
    <StyledMenu>
      <StyledMenuList>
        {props.menuItems.map((item, index) => {
          return <StyledMenuItem key={index}>
            <StyledLink href={item.link}>{item.name}
            </StyledLink>
          </StyledMenuItem>
        })}
      </StyledMenuList>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`

`

const StyledMenuList = styled.ul`
    display: flex;
    gap: 40px;
`

const StyledMenuItem = styled.li`

`
const StyledLink = styled.a`
    color: ${theme.colors.font};
`