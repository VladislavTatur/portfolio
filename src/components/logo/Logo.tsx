import React from 'react'
import {Icon} from '../icon/Icon'
import styled from 'styled-components'
import {theme} from '../../styles/Theme'

export const Logo = () => {
  return (
    <IconLogo>
    <a href={'#main'}>
      <Icon viewBox={"0 0 185 50"} width={"185"} height="50" iconId='logo'/>
    </a>
    </IconLogo>
  )
}

const IconLogo = styled.div`
  a {
      display: flex;
  }
    
    @media ${theme.media.tablet} {
        
    }
`