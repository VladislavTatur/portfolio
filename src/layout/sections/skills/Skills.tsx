import styled from 'styled-components'
import {FlexContainer} from '../../../components/container/Container'
import {Skill} from './Skill/Skill'
import React from 'react'

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexContainer alignI={'center'} justify={'space-between'} wrap={'wrap'}>
        <Skill iconId={'figma'}/>
        <Skill iconId={'html'}/>
        <Skill iconId={'css'}/>
        <Skill iconId={'sass'}/>
        <Skill iconId={'react'}/>
      </FlexContainer>
    </StyledSkills>
  )
}


const StyledSkills = styled.section`
    width: 100%;
    background-color: #000000;
    padding: 59px 0;
`