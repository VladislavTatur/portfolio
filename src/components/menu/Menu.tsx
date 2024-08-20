import React from 'react'
import styled from 'styled-components'

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <li key={index}>
            <a href="">{item}
            </a>
          </li>
        })}
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
    ul {
        list-style-type: none;
        display: flex;
        gap: 40px;
    }

    ul li a {
        color: white;
    }

`