import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {Link} from '../../Link'
import {theme} from '../../../styles/Theme'
import {Icon} from '../../icon/Icon'

type MenuItemProps = {
  name: string
  link: string
}

export const MobileMenu = (props: { menuItems: Array<MenuItemProps> }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtmClick = () => {setMenuIsOpen(!menuIsOpen)}
  return (
    <StyledMobileMenu>
        <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtmClick}>
          <span></span>
        </BurgerButton>
        <LogoWrapper>
          <Link href={"#main"}>
            <Icon viewBox={'0 0 185 50'} width={'185'} height="50" iconId="logo"/>
          </Link>
        </LogoWrapper>
      <MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <ul>
          {props.menuItems.map((item, index) => {
            return <StyledMenuItem key={index}>
              <Link href={item.link}>{item.name}</Link>
            </StyledMenuItem>
          })}
        </ul>
        <Link href={'#connect'}>
          <Button background={theme.colors.accent} padding={'10px 20px'} isOpen={menuIsOpen}>
            Contact Me
          </Button>
        </Link>
      </MobileMenuPopup>
    </StyledMobileMenu>
  )
}

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;

    }
`

const LogoWrapper = styled.div`
    position: fixed;
    top: 20px;
    left: 15px;
    z-index: 9999;
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    
    top: 15px;
    right: 15px;
    width: 60px;
    height: 60px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before{
        content: "";
        width: 50px;
        height: 50px;
        background-color: #2d3540;;
        border-radius: 30%;
    }

    span {
        display: block;
        width: 34px;
        height: 3px;
        background-color: ${theme.colors.font};
        position: absolute;
        top: 45%;
        right: 50%;
        transform: translate(50%, 50%);
        border-radius: 5px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 34px;
            height: 3px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-8px);
            border-radius: 5px;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                background-color: ${theme.colors.font};
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 34px;
            height: 3px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(8px);
            border-radius: 5px;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                background-color: ${theme.colors.font};
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(45, 53, 64, 0.85);
    display: none;


    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
`

type ButtonProps = {
  background?: string;
  color?: string;
  width?: string;
  height?: string;
  padding?: string
  isOpen: boolean
}

const Button = styled.button<ButtonProps>`
    padding: ${props => props.padding || '0'};
    background-color: ${props => props.background || `${theme.colors.accent}`};
    color: ${props => props.color || '#ffffff'};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: 20px;
    display: block;
    position: fixed;
    left: 50%;
    bottom: 120px;
    transform: translateX(-50%);
    
`

const StyledMenuItem = styled.li`
`