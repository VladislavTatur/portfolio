import styled from 'styled-components'
import {Container, FlexContainer} from '../../../components/container/Container'
import {Skill} from './Skill/Skill'
import React from 'react'
import {theme} from '../../../styles/Theme'

export type SkillsProps = {
  iconId: string
}

const skillIcon: Array<SkillsProps> = [
  {iconId: 'figma'},
  {iconId: 'html'},
  {iconId: 'css'},
  {iconId: 'sass'},
  {iconId: 'react'},
]

export const Skills = () => {

  return (
    <StyledSkills>
      <Container padding={'59px 25px'}>
          <Skill
          skills={skillIcon}
          />
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