import React from 'react'
import {Icon} from '../icon/Icon'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <Qwe>
    <a href="">
      <Icon viewBox={"0 0 185 50"} width={"185"} height="50" iconId='logo'/>
    </a>
    </Qwe>
  )
}

const Qwe = styled.div`
  a {
      display: flex;
  }
`