import {Headlines2} from '../../../components/headlines/Headlines2'
import {Container} from '../../../components/container/Container'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'
import {PaintingBox} from '../../../components/box/Box'
import React from 'react'

export const Specialization = () => {
  return (
    <StyledSpecialization>
    <Container height={'659px'}>

      <FlexWrapper>
        <Experience years={<>+ 4<br/></>} text="Years Experience Working"/>
        <FlexWrapper direction={'column'} align="center" justify="center" textAlign="center">
          <Headlines2 align="justify" title="Developer and Designer, specialized in UI/UX and Web Developer" size={40} LHeight={72}/>
          <FlexWrapper gap={15}>
            <PaintingBox width={288} height={295} backgroundColor="rgba(103, 108, 219, 1)"/>
            <PaintingBox width={288} height={295} backgroundColor="rgba(196, 196, 196, 1)"/>
            <PaintingBox width={288} height={295} backgroundColor="rgba(196, 196, 196, 1)"/>
            </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>

    </Container>
    </StyledSpecialization>
  )
}

const StyledSpecialization = styled.div`
    width: 100%;
;
`
type ExperienceProps = {
  years: string | React.ReactNode
  text: string
}

const Experience = ({years, text}: ExperienceProps) => {
  return (
    <StyledYears>
      {years}
      <StyledExperienceText>
        {text}
      </StyledExperienceText>
    </StyledYears>
  )
}

const StyledYears = styled.p``

const StyledExperienceText = styled.span``