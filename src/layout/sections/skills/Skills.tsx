import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/container/Container'
import {Skill} from './Skill/Skill'

export const Skills = () => {
  return (

    <StyledSkills>
      <Container>
        <FlexWrapper justify={'space-around'} align="center">
          <Skill iconId={'figma'}/>
          <Skill iconId={'html'}/>
          <Skill iconId={'css'}/>
          <Skill iconId={'sass'}/>
          <Skill iconId={'react'}/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}


const StyledSkills = styled.section`
    width: 100%;
    background-color: #000000;



`