import React from 'react'
import styled from 'styled-components'
import {Link} from '../Link'
import {theme} from '../../styles/Theme'
import {font} from '../../styles/Common'

type MenuItemProps = {
  name: string
  link: string
}

export const HeaderMenu = (props: { menuItems: Array<MenuItemProps> }) => {
  return (
    <StyledHeaderMenu>
      <StyledMenuList>
        {props.menuItems.map((item, index) => {
          return <StyledMenuItem key={index}>
            <Link href={item.link}>{item.name}</Link>
          </StyledMenuItem>
        })}
      </StyledMenuList>
    </StyledHeaderMenu>
  )
}

const StyledHeaderMenu = styled.nav`
@media ${theme.media.tablet} {
    display: none;
}
`

const StyledMenuList = styled.ul`
    display: flex;
    gap: 40px;

`

const StyledMenuItem = styled.li`
    ${font({weight: 500, Fmin: 17, Fmax: 20})}

    &:hover {
        transform: scale(1.1);
    }
`