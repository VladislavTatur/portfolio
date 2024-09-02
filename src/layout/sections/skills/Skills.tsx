import styled from 'styled-components'
import {Container, FlexContainer} from '../../../components/container/Container'
import {Skill} from './Skill/Skill'
import React from 'react'
import {theme} from '../../../styles/Theme'

export const Skills = () => {
  return (
    <StyledSkills>
      <Container padding={'59px 25px'}>
        <FlexContainer alignI={'center'} justify={'space-between'}>
          <Skill iconId={'figma'}/>
          <Skill iconId={'html'}/>
          <Skill iconId={'css'}/>
          <Skill iconId={'sass'}/>
          <Skill iconId={'react'}/>
        </FlexContainer>
      </Container>
    </StyledSkills>
  )
}


const StyledSkills = styled.section`
    width: 100%;
    background-color: ${theme.colors.thirdBg};
    white-space: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

    ${Container} {
        @media ${theme.media.tablet} {
            display: flex;
            width: fit-content;
            padding: 60px;
        }
    }
}

${FlexContainer} {
    @media ${theme.media.tablet} {
        gap: 70px;
    }
}
`