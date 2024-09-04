import {Container, FlexContainer} from '../../../components/container/Container'
import styled from 'styled-components'
import {PaintingBox} from '../../../components/paintingbox/PaintingBox'
import React from 'react'
import {theme} from '../../../styles/Theme'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {font} from '../../../styles/Common'

export const Specialization = () => {

  return (
    <StyledSpecialization id="specialization">
      <Container>
        <FlexWrapper wrap="wrap" align="center" justify="space-around">
          <FlexContainer direction={'column'} maxWidth={'20%'}>
            <InformationData>4 +</InformationData>
            <InformationText>Years Experience Working</InformationText>
          </FlexContainer>
          <FlexContainer margin="0 0 0 60px" direction={'column'} alignI="center" justify="center"
                         textAlign="center">
            <Headlines1>Developer and Designer, specialized in UI/UX and Web Developer</Headlines1>
            <FlexContainer gap={15} margin={'20px 0 0 0'} wrap="wrap">
              <PaintingBox text="Front End Developer" iconId="computer"/>
              <PaintingBox text="UI/UX Designer" iconId="paint"/>
              <PaintingBox text="Branding Designer" iconId="lightning"/>
            </FlexContainer>
          </FlexContainer>
        </FlexWrapper>
      </Container>
    </StyledSpecialization>
  )
}

const StyledSpecialization = styled.section`
    background-color: ${theme.colors.secondaryBg};


    ${Container} {

        @media screen and (max-width: 1210px) {
            padding: 25px 20px 90px;
        }
    }

    ${FlexWrapper} > *:first-child {
        @media screen and (max-width: 1210px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
            line-height: 100px;
            margin-bottom: 58px;
            margin-top: 69px;
        }
    }

    ${FlexContainer} {
        @media screen and (max-width: 1100px) {
            margin-left: 0;
        }
    }
`

const InformationData = styled.span`
    margin-bottom: 60px;
    font-family: 'Playfair Display', sans-serif;
    font-size: 100px;
    color: ${theme.colors.accent};
    white-space: nowrap;
    
    @media screen and (max-width: 1210px) {
        margin-right: 30px;
    }
`

const InformationText = styled.span`
    ${font({family: '\'Playfair Display\', sans-serif', weight: 700, lineHeight: 180, Fmin: 26, Fmax: 40})},
`

const Headlines1 = styled.h1`
    line-height: 180%;
    font-size: 2rem;
    max-width: 800px;
    
    @media screen and (max-width: 1210px) {
        margin-bottom: 60px;
    }
`
