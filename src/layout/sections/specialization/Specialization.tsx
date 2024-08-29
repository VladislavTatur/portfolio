import {Container, FlexContainer} from '../../../components/container/Container'
import styled from 'styled-components'
import {PaintingBox} from '../../../components/paintingbox/PaintingBox'
import React from 'react'
import {Icon} from '../../../components/icon/Icon'
import {ShortText} from '../../../components/Text/ShortText'
import {InformationText} from '../../../components/Text/InformationText'
import {theme} from '../../../styles/Theme'

export const Specialization = () => {
  return (
    <StyledSpecialization>
      <Container>
        <FlexContainer wrap="wrap" >
          <InformationText maxWidth={228} fontFamily="Playfair Display" text={'Years Experience Working'} data={'4 +'}
                           lineHeight={180} sizeText={'2rem'} sizeData={'5rem'} reverseOrder={true}/>
          <FlexContainer margin="0 0 0 60px" maxWidth="954px" direction={'column'} alignI="center" justify="center"
                         textAlign="center">
            <Headlines1>Developer and Designer, specialized in UI/UX and Web Developer</Headlines1>
            <FlexContainer gap={15} margin={'20px 0 0 0'} wrap="wrap">
              <PaintingBox >
                <FlexContainer direction="column" justify={'flex-end'} alignI={'start'} minHeight="100%"
                               padding="0 0 35px 30px">
                  <Icon iconId="computer" height={30} width={30} viewBox="0 0 30 30"/>
                  <ShortText padding={'10px 0 0 0'} maxWidth={'50%'} textAlign="left">Front End Developer</ShortText>
                </FlexContainer>
              </PaintingBox>
              <PaintingBox >
                <FlexContainer direction="column" justify={'flex-end'} alignI={'start'} minHeight="100%"
                               padding="0 0 35px 30px">
                  <Icon iconId="paint" height={30} width={30} viewBox="0 0 30 30"/>
                  <ShortText padding={'10px 0 0 0'} maxWidth={'50%'} textAlign="left">UI/UX Designer</ShortText>
                </FlexContainer>
              </PaintingBox>
              <PaintingBox >
                <FlexContainer direction="column" justify={'flex-end'} alignI={'start'} minHeight="100%"
                               padding="0 0 35px 30px">

                  <Icon iconId="lightning" height={30} width={30} viewBox="0 0 30 30"/>
                  <ShortText padding={'10px 0 0 0'} maxWidth={'50%'} textAlign="left">Branding Designer</ShortText>
                </FlexContainer>
              </PaintingBox>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </StyledSpecialization>
  )
}

const StyledSpecialization = styled.section`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};

`

const Headlines1 = styled.h1`
    line-height: 180%;
    font-size: 2rem;
    max-width: 800px;
`