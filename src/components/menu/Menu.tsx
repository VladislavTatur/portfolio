import React from 'react'
import styled from 'styled-components'

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <StyledMenuList>
        {props.menuItems.map((item, index) => {
          return <StyledMenuItem key={index}>
            <StyledLink href="">{item}
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
    list-style-type: none;
    display: flex;
    gap: 40px;
`

const StyledMenuItem = styled.li`

`
 const StyledLink = styled.a`
     color: white;
    text-decoration: none;
 `