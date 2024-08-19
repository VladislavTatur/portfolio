import {FlexContainer} from '../../../components/container/Container'
import {FlexWrapper} from '../../../components/FlexWrapper'
import styled from 'styled-components'
import {PaintingBox} from '../../../components/paintingbox/PaintingBox'
import React from 'react'
import {Icon} from '../../../components/icon/Icon'
import {TextInBox} from '../../../components/paintingbox/TextInBox'
import {Headlines1} from '../../../components/headlines/Headlines1'

export const Specialization = () => {
  return (
    <StyledSpecialization>
      <FlexContainer>
        <Experience years={<>+ 4<br/></>} text="Years Experience Working"/>
        <FlexWrapper direction={'column'} align="center" justify="center" textAlign="center">
          <Headlines1 align="justify" title="Developer and Designer, specialized in UI/UX and Web Developer" size={40}
                      LHeight={72}/>
          <FlexWrapper gap={15}>
            <PaintingBox width={288} height={295} backgroundColor="rgba(103, 108, 219, 1)">
              <Icon iconId="computer"/>
              <TextInBox>Front End Developer</TextInBox>
            </PaintingBox>
            <PaintingBox width={288} height={295} backgroundColor="rgba(196, 196, 196, 1)">
              <Icon iconId="paint"/>
              <TextInBox>UI/UX Designer</TextInBox>
            </PaintingBox>
            <PaintingBox width={288} height={295} backgroundColor="rgba(196, 196, 196, 1)">
              <Icon iconId="lightning"/>
              <TextInBox>Branding Designer</TextInBox>
            </PaintingBox>
          </FlexWrapper>
        </FlexWrapper>
      </FlexContainer>
    </StyledSpecialization>
  )
}

const StyledSpecialization = styled.section`
    width: 100%;;
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