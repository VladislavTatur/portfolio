import React from 'react'
import styled from 'styled-components'
import {Button} from '../../components/button/Button'
import {Logo} from '../../components/logo/Logo'
import {HeaderMenu} from '../../components/headerMenu/HeaderMenu'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Container} from '../../components/container/Container'
import {Link} from '../../components/Link'
import {theme} from '../../styles/Theme'
import {MobileMenu} from '../../components/headerMenu/mobileMenu/MobileMenu'


const menuItems = [
  {name: 'Home', link: '#main'},
  {name: 'About', link: '#specialization'},
  {name: 'Works', link: '#works'},
  {name: 'Comments', link: '#reviews'}
]

export const Header = () => {
  return (
    <StyledHeader>
      <Container padding="0 15px">
        <FlexWrapper wrap={'wrap'} justify="space-between" align={'center'}>
          <LogoWrapper>
            <Logo/>
          </LogoWrapper>
          <HeaderMenu menuItems={menuItems}/>
          <MobileMenu menuItems={menuItems}/>
          <Link href={'#connect'}>
            <Button background={theme.colors.accent} padding={'10px 20px'}>
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
    position: fixed;
    width: 100%;

    ${Button} {
        @media ${theme.media.tablet} {
            display: none;
        }
    }

`
const LogoWrapper = styled.div`
    @media ${theme.media.tablet} {
        display: none;
    }
`